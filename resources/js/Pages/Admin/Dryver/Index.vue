<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
    props: {
        data: Object,
        provinces: Object,
    },
    methods: {
        openModal(id) {
            // $('#editUser').modal('show');
            window.location.href = `/drivers/${id}?type=drive_logs`;
        },
        openRescue(id) {
            // $('#editUser').modal('show');
            window.location.href = `/rescuers-logs/${id}`;
        },
        openRepair(id) {
            // $('#editUser').modal('show');
            window.location.href = `/repairs-log/${id}`;
        },
    }
};
</script>

<script setup>
import { ref, computed, watch  } from 'vue';
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { usePage, Head } from "@inertiajs/vue3";
const { props } = usePage();
const formObject = {
    first_name: null,
    last_name: null,
    middle_name: null,
    gender: null,
    province: null,
    city: null,
    email: null,
    mobile_number: null,
    password: null,
    password_confirmation:null,
    role: null,
    status: null,
    license_number: null,
    license_type: null,
    expiration_date: null,
    blood_type: null,
    license_front: null,

};
const { validateForm } = useValidateForm();
const routeName = "drivers";
let {
    isLoadingComponents,
    paginatedData,
    form,
    createPromise,
    updatePromise,
    deletePromise,
    handleCreate,
    serverQuery,
    handleServerQuery,
    handleEdit,
    formState,
} = useCrud(formObject, routeName);

const gender = [
    {
        name: 'Male',
        value: 'male'
    },
    {
        name: 'Female',
        value: 'female'
    },
    {
        name: 'Prefer not to say',
        value: 'prefer_not_to_say'
    }
]
const blood = ['A+','A-','B+','B-','O+','O-','AB+','AB-']
const roles = [
    {
        name: 'Private Driver',
        value: 'Private Driver'
    },
    {
        name: 'Company Driver',
        value: 'Company Driver'
    }
]
const licenseTypeList = ['Student', 'Non-Professional', 'Professional']

const provinces = ref(props.provinces || []);
const cities = computed(() => {
    console.log('select city')
    if (form.province) {
        const selectedProvince = provinces.value.find(
            (province) => province.value === form.province
        );
        return selectedProvince ? selectedProvince.cities : [];
    } else {
        return [];
    }
});

const filteredCities = computed(() => {
    console.log('provinces')
    if (form.province) {
        return cities.value.filter(city => city.province === form.province);
    } else {
        return [];
    }
});

</script>

<template>
    <Head title="Driver"></Head>
    <div class="card card-action custom-container-card">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h4 class="fw-bold mb-4 card-title pt-0">
                    Driver
                </h4>
            </div>
            <div class="card-action-element">
                <button class="btn btn-primary" type="button" @click="handleCreate" data-bs-toggle="offcanvas"
                    data-bs-target="#offCanvasForm" aria-controls="offCanvasForm">
                    <i class="ti ti-user-plus ti-xs me-1"></i>
                    Add Driver
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offCanvasForm" data-bs-backdrop="static"
                    aria-labelledby="offCanvasFormLabel">
                    <div class="offcanvas-header">
                        <h5 id="offCanvasFormLabel" class="offcanvas-title">
                            {{ formState == "create" ? "Add" : "Update" }}
                            Driver
                        </h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                            v-if="!form.processing"></button>
                    </div>
                    <div class="offcanvas-body mx-0 flex-grow-0 pt-0">
                        <div class="form-group mb-3">
                            <label for="">First Name <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.first_name" @input="
                                ($event) => {
                                    form.clearErrors('first_name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'first_name'
                                    );
                                }
                            " placeholder="Enter First Name" :class="{
                                'is-invalid': form.errors.first_name,
                            }" />
                            <div class="invalid-feedback">
                                {{ form.errors.first_name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Middle Name <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.middle_name" @input="($event) => {
                                    form.clearErrors('middle_name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'middle_name'
                                    );
                                }
                                " placeholder="Enter Middle Name" 
                                :class="{
                                    'is-invalid': form.errors.middle_name,
                                }" />
                            <div class="invalid-feedback">
                                {{ form.errors.middle_name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Last Name <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.last_name" @input="($event) => {
                                    form.clearErrors('last_name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'last_name'
                                    );
                                }
                                " placeholder="Enter Last Name" :class="{
                                    'is-invalid': form.errors.last_name,
                                }" />
                            <div class="invalid-feedback">
                                {{ form.errors.last_name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Gender <span class="required">*</span></label>
                            <v-select 
                                v-select 
                                :options="gender" 
                                v-model="form.gender"
                                :reduce="(gender) => gender.value"
                                label="name" 
                                @input="($event) => {
                                        form.clearErrors('gender');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'gender'
                                        );
                                    }"
                                class="custom-select"
                                :class="{
                                    'is-invalid': form.errors.gender,
                                }"
                                placeholder="Select Gender">
                            </v-select>  
                            <div class="invalid-feedback">
                                {{ form.errors.gender }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select Province <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.province"         
                                @input="($event) => {
                                        form.clearErrors('province');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'province'
                                        );
                                    }
                                    " 
                                placeholder="Enter Province" 
                                :class="{
                                        'is-invalid': form.errors.province,
                                    }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.province }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select City <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.city"         
                                @input="($event) => {
                                        form.clearErrors('city');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'city'
                                        );
                                    }
                                    " 
                                placeholder="Enter City" 
                                :class="{
                                        'is-invalid': form.errors.city,
                                    }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.city }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Enter Email <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.email"         
                                @input="($event) => {
                                        form.clearErrors('email');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'email'
                                        );
                                    }
                                    " 
                                placeholder="Enter Email" 
                                :class="{
                                        'is-invalid': form.errors.email,
                                    }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.email }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Mobile Number <span class="required">*</span></label>
                            <input 
                                type="number" 
                                class="form-control" 
                                v-model="form.mobile_number" 
                                @input="
                                ($event) => {
                                    form.clearErrors('mobile_number');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'mobile_number'
                                    );
                                }" 
                                placeholder="Enter Mobile Number" 
                                :class="{'is-invalid': form.errors.mobile_number,}" 
                                autocomplete="off"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.mobile_number }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Password <span class="required">*</span></label>
                             <input type="text" style="display:none" />
                            <input 
                                type="password" 
                                class="form-control" 
                                v-model="form.password" 
                                @input="
                                ($event) => {
                                    form.clearErrors('password');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'password'
                                    );
                                }" 
                                placeholder="Enter Password" 
                                :class="{ 'is-invalid': form.errors.password, }" 
                                autocomplete="new-password"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.password }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Confirm Password</label>
                            <input type="password" class="form-control" v-model="form.password_confirmation" @input="
                                ($event) => {
                                    form.clearErrors('password_confirmation');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'password_confirmation'
                                    );
                                }
                            " 
                            placeholder="Enter Confirm Password" 
                            :class="{ 'is-invalid': form.errors.password_confirmation, }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.password_confirmation }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select Role <span class="required">*</span></label>
                            <v-select 
                                :options="roles" 
                                v-model="form.role"
                                :reduce="(role) => role.value"
                                label="name" 
                                @input="($event) => {
                                    form.clearErrors('role');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'role'
                                    );
                                }"
                                :class="{
                                    'is-invalid': form.errors.role,
                                }"
                                placeholder="Select Role">
                            </v-select> 
                            <div class="invalid-feedback">
                                {{ form.errors.role }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">License Number <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.license_number" @input="($event) => {
                                    form.clearErrors('license_number');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'license_number'
                                    );
                                }
                                " 
                            placeholder="Enter License Number" 
                            :class="{ 'is-invalid': form.errors.license_number, }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.license_number }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select License Type <span class="required">*</span></label>
                            <v-select 
                                :options="licenseTypeList" 
                                v-model="form.license_type"
                                label="name" 
                                @input="($event) => {
                                        form.clearErrors('license_type');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'license_type'
                                        );
                                    }"
                                :class="{
                                        'is-invalid': form.errors.license_type,
                                    }"
                                placeholder="Select License Type">
                            </v-select> 
                            <div class="invalid-feedback">
                                {{ form.errors.license_type }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Expiration Date <span class="required">*</span></label>
                           <input
                                type="date"
                                class="form-control dob-picker"
                                placeholder="YYYY-MM-DD"
                                v-model="form.expiration_date"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.expiration_date }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Blood Type</label>
                            <v-select 
                                v-select 
                                :options="blood" 
                                v-model="form.blood_type"
                                label="name" 
                                @input="($event) => {
                                        form.clearErrors('blood_type');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'blood_type'
                                        );
                                    }"
                                class="custom-select"
                                :class="{
                                        'is-invalid': form.errors.blood_type,
                                    }"
                                placeholder="Select Blood Type">
                            </v-select>  
                            <div class="invalid-feedback">
                                {{ form.errors.blood_type }}
                            </div>
                        </div>

                        <div class="form-group mb-4 dropzone-profile-photo">
                            <label for="name">License Front</label>
                            <dropzone
                                collection="license_front"
                                v-if="isLoadingComponents"
                                :url="route('api.media.upload')"
                                type="profile"
                                model="User"
                                :value="form.license_front"
                                @input="($event) => {
                                        form.license_front = $event;
                                        form.clearErrors('license_front');
                                    }
                                    "
                                message="Drop files here or click to upload profile photo"
                                acceptedFiles="image/jpeg,image/png"
                                @error="($event) => {
                                        if ($event && $event[0]) {
                                            form.setError('license_front', $event[0]);
                                        }
                                    }
                                    "
                            >
                            </dropzone>
                            <div v-else>
                                <div class="dropzone" ref="dropzone">
                                    <div class="dz-message needsclick">
                                        Please Wait
                                    </div>
                                </div>
                            </div>

                            <div
                                class="v-invalid-feedback"
                                v-if="form.errors.license_front"
                            >
                                {{ form.errors.license_front }}
                            </div>
                        </div>

                        <div class="form-group mb-4 dropzone-profile-photo">
                            <label for="name">License Back</label>
                            <dropzone
                                collection="license_back"
                                v-if="isLoadingComponents"
                                :url="route('api.media.upload')"
                                type="profile"
                                model="User"
                                :value="form.license_back"
                                @input="($event) => {
                                        form.license_back = $event;
                                        form.clearErrors('license_back');
                                    }
                                    "
                                message="Drop files here or click to upload profile photo"
                                acceptedFiles="image/jpeg,image/png"
                                @error="($event) => {
                                        if ($event && $event[0]) {
                                            form.setError('license_back', $event[0]);
                                        }
                                    }
                                    "
                            >
                            </dropzone>
                            <div v-else>
                                <div class="dropzone" ref="dropzone">
                                    <div class="dz-message needsclick">
                                        Please Wait
                                    </div>
                                </div>
                            </div>

                            <div
                                class="v-invalid-feedback"
                                v-if="form.errors.license_back"
                            >
                                {{ form.errors.license_back }}
                            </div>
                        </div>

                        <button class="btn btn-primary" @click="createPromise"
                            v-if="formState == 'create'">
                            <span v-if="form.processing" class="spinner-border me-1" role="status"
                                aria-hidden="true"></span>
                            Submit
                        </button>
                        <button class="btn btn-primary" @click="updatePromise"
                            v-if="formState == 'update'">
                            <span v-if="form.processing" class="spinner-border me-1" role="status"
                                aria-hidden="true"></span>
                            Submit changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row justify-content-between">
                <div class="col-3">
                    <div class="d-flex align-items-center gap-2">
                        <div class="w-auto">Show</div>
                        <div class="flex-1">
                            <select class="form-select" :value="serverQuery.perPage" @input="
                                handleServerQuery(
                                    'perPage',
                                    $event.target.value
                                )
                            ">
                                <option v-for="i in [5, 10, 25, 50, 100]" :value="String(i)" :key="i">
                                    {{ i }}
                                </option>
                            </select>
                        </div>
                        <div class="w-auto">entries</div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="d-flex gap-2 align-items-center">
                        <div class="w-auto">Filter by Type:</div>
                        <div class="form-group" style="width: 70%">
                            <select class="form-select" id="basic-default-country" :value="serverQuery.role" @input="handleServerQuery(
                                    'role',
                                    $event.target.value
                                )" >
                                <option value="">All</option>
                                <option value="Private Driver">Private Driver</option>
                                <option value="Company Driver">Company Driver</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="col-auto">
                    <div class="d-flex gap-2 align-items-center">
                        <div class="w-auto">Search:</div>
                        <div class="flex-1">
                            <input type="search" placeholder="Search" class="form-control" :value="serverQuery.query"
                                @input="
                                    handleServerQuery(
                                        'query',
                                        $event.target.value
                                    )
                                " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4" v-for="(driver, index) in data.data" :key="index.id">
                <div class="card mb-4 custom-card__hero">
                    <div class="dropdown btn-pinned">
                        <button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="ti ti-dots-vertical text-muted"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" @click="openModal(driver.id)">Drive Logs</a>
                            </li>
                            <li><a class="dropdown-item"  @click="openRepair(driver.id)">Repair Logs</a>
                            </li>
                            <li><a class="dropdown-item" @click="openRescue(driver.id)">Rescue Logs</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item text-danger"  @click="deletePromise(driver.id)">Delete</a></li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="user-avatar-section">
                        <div class="d-flex align-items-center flex-column">
                            <img
                            class="img-fluid rounded mb-3 pt-1 mt-4"
                            src="../../../../../public/assets/img/avatars/3.png"
                            height="100"
                            width="100"
                            alt="User avatar"
                            />
                            <div class="user-info text-center">
                            <h4 class="mb-2">{{driver.name}}</h4>
                            <span class="badge bg-label-secondary mt-1">{{driver.role}}</span>
                            </div>
                        </div>
                        </div>
                        <p class="mt-3 small text-uppercase text-muted">Details</p>
                        <div class="info-container">
                        <ul class="list-unstyled">
                            <li class="">
                                <span class="fw-semibold me-1 small-text">Email:</span>
                                <span class="small-text">{{driver.email}}</span>
                            </li>
                            <li class=" pt-1">
                                <span class="fw-semibold me-1 small-text">Gender:</span>
                                <span class="small-text">{{driver.gender ? driver.gender : 'No Data'}}</span>
                            </li>
                            <li class=" pt-1">
                                <span class="fw-semibold me-1 small-text">Status:</span>
                                <span class="badge bg-label-success small-text">Driving..</span>
                            </li>
                            <li class=" pt-1">
                                <span class="fw-semibold me-1 small-text">Contact:</span>
                                <span class="small-text">{{driver.mobile_number ? driver.mobile_number : 'No Data'}}</span>
                            </li>
                            <li class=" pt-1">
                                <span class="fw-semibold me-1 small-text">Address:</span>
                                <span class="small-text">{{ driver.province || driver.city ? `${driver.province || ''} ${driver.city || ''}` : 'No Data' }}</span>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-center">
                            <a 
                                href="javascript:;" 
                                class="btn btn-primary d-flex align-items-center me-3" 
                                @click="handleEdit(driver)"
                                v-if="driver.role == 'Company Driver'"
                                >
                                <i class="ti-xs me-1 ti ti-truck me-1"></i>Manage Driver
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        <div class="card-footer py-3" v-if="paginatedData && paginatedData.meta.links">
            <div class="row justify-content-between">
                <div class="col-auto">
                    <div class="table_info">
                        Showing {{ paginatedData.meta.from }} to
                        {{ paginatedData.meta.to }} of
                        {{ paginatedData.meta.total }} entries
                    </div>
                </div>
                <div class="col-auto">
                    <nav class="dataTables_paginate paging_simple_numbers" aria-label="Page navigation example">
                        <ul class="pagination mb-0">
                            <li class="page-item" v-for="link in paginatedData.meta.links" :key="link">
                                <component :is="link.url ? 'inertia-link' : 'button'" class="page-link" :class="{
                                    active: link.active,
                                }" :href="link.url" :only="['data', 'params']">
                                    <span v-html="link.label"></span>
                                </component>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.custom-container-card {
    background: unset !important;
    box-shadow: unset !important;
}



.hero-container {
    margin-top: -4.5rem !important;
}

.hero-profile {
    height: 68px !important;
    margin-left: 1rem !important;
}

.card-text {
    text-align: left;
}

.banner-custom-img {
    object-fit: contain !important;
    height: 90px !important;
}

.small-text {
    font-size: 12px;
    color: rgba(123, 121, 128, 0.87);
}
</style>