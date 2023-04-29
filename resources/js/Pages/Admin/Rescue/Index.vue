<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    props: {
        data: Object,
        services: Object,
        provinces: Object,
    },
    layout: AdminLayout,
    data() {
        return {
            happy: null,
            filteredCities: [],
        }
    },
    watch: {
        happy() {
            if (this.happy) {
                this.filteredCities = this.happy.cities;
            } else {
                this.filteredCities = [];
            }
        },
    },
    methods: {
        getCities() {
            form.city = null; // clear the selectedCity field
            const selectedProvinceId = this.happy.id;
            const selectedProvince = this.provinces.find(p => p.id === selectedProvinceId);
            this.filteredCities = selectedProvince.cities;
        },
    }
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { usePage, Head } from "@inertiajs/vue3";
const { props } = usePage();
const formObject = {
    type: null,
    name: null,
    contact_number: null,
    is_contact_number_verified: 0,
    email: null,
    messenger_link: null,
    latitude: null,
    longitude: null,
    province: null,
    city: null,
    gender: null,
    image: null,
    services: [],
};
const { validateForm } = useValidateForm();
const routeName = "rescuers";
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

const types = [
    {
        name: 'Business',
        value: 'Business'
    },
    {
        name: 'Individual',
        value: 'Individual'
    },
]

const status = [
    {
        name: 'Verified',
        value: 'verified'
    },
    {
        name: 'Unverified',
        value: 'unverified'
    },
]
</script>

<template>
    <Head title="Rescuer"></Head>
    <div class="card card-action custom-container-card">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">Rescuer</h5>
            </div>
            <div class="card-action-element">
                <button class="btn btn-primary" type="button" @click="handleCreate" data-bs-toggle="offcanvas"
                    data-bs-target="#offCanvasForm" aria-controls="offCanvasForm">
                    <i class="ti ti-plus ti-xs me-1"></i>
                    Add Rescuer
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offCanvasForm" data-bs-backdrop="static"
                    aria-labelledby="offCanvasFormLabel">
                    <div class="offcanvas-header">
                        <h5 id="offCanvasFormLabel" class="offcanvas-title">
                            {{ formState == "create" ? "Add" : "Update" }}
                            Rescuer
                        </h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                            v-if="!form.processing"></button>
                    </div>
                    <div class="offcanvas-body mx-0 flex-grow-0 pt-0">
                        <div class="form-group mb-3">
                            <label for="">Rescuer Type <span class="required">*</span></label>
                            <v-select 
                                :options="types" 
                                v-model="form.type"
                                :reduce="(type) => type.value"
                                label="name" 
                                @input="($event) => {
                                    form.clearErrors('type');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'type'
                                    );
                                }"
                                placeholder="Select Rescuer Type">
                            </v-select> 
                            <div class="invalid-feedback">
                                {{ form.errors.type }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Rescuer Name <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.name"         
                                @input="($event) => {
                                    form.clearErrors('name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'name'
                                    );
                                }
                                " 
                                placeholder="Enter First Name" 
                                :class="{
                                    'is-invalid': form.errors.name,
                                }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Rescuer Contact Number <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.contact_number"         
                                @input="($event) => {
                                        form.clearErrors('contact_number');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'contact_number'
                                        );
                                    }
                                    " 
                                placeholder="Enter Rescuer Contact Number" 
                                :class="{
                                        'is-invalid': form.errors.contact_number,
                                    }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.contact_number }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Rescuer Contact Number Status <span class="required">*</span></label>
                            <br>
                            <label class="radio radio-primary mr-3">
                                <input
                                    type="radio"
                                    :value="1"
                                    v-model="form.is_contact_number_verified"
                                />
                                <span>Verified</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio radio-primary mr-3">
                                <input
                                    type="radio"
                                    :value="0"
                                    v-model="form.is_contact_number_verified"
                                    checked
                                />
                                <span>Unverified</span>
                                <span class="checkmark"></span>
                            </label>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Rescuer Email <span class="required">*</span></label>
                            <input type="email" class="form-control" v-model="form.email" @input="
                                ($event) => {
                                    form.clearErrors('email');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'email'
                                    );
                                }
                            " placeholder="Enter Email" :class="{
                                'is-invalid': form.errors.email,
                            }" />
                            <div class="invalid-feedback">
                                {{ form.errors.email }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Rescuer Messenger Link <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.messenger_link"         
                                @input="($event) => {
                                        form.clearErrors('messenger_link');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'messenger_link'
                                        );
                                    }
                                    " 
                                placeholder="Enter Messenger Link" 
                                :class="{
                                        'is-invalid': form.errors.messenger_link,
                                    }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.messenger_link }}
                            </div>
                        </div>

                        <div class="form-group mb-4 dropzone-profile-photo">
                            <label for="name">Upload Photo</label>
                            <dropzone
                                collection="image"
                                v-if="isLoadingComponents"
                                :url="route('api.media.upload')"
                                type="profile"
                                model="Rescue\Rescuer"
                                :value="form.image"
                                @input="
                                    ($event) => {
                                        form.image = $event;
                                        form.clearErrors('image');
                                    }
                                "
                                message="Drop files here or click to upload profile photo"
                                acceptedFiles="image/jpeg,image/png"
                                @error="
                                    ($event) => {
                                        if ($event && $event[0]) {
                                            form.setError('image', $event[0]);
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
                                v-if="form.errors.image"
                            >
                                {{ form.errors.image }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Rescue Services <span class="required">*</span></label>
                            <v-select v-select 
                                :options="services" 
                                v-model="form.services"
                                :reduce="(services) => services.id"
                                label="name" 
                                multiple
                                @input="
                                    ($event) => {
                                        form.clearErrors('services');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'services'
                                        );
                                    }"
                                placeholder="Select Services" 
                                >
                            </v-select>  
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Latitude <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.latitude"         
                                @input="($event) => {
                                        form.clearErrors('latitude');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'latitude'
                                        );
                                    }
                                    " 
                                placeholder="Enter Latitude" 
                                :class="{
                                        'is-invalid': form.errors.latitude,
                                    }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.latitude }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Longtitude <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.longitude"         
                                @input="($event) => {
                                        form.clearErrors('longitude');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'longitude'
                                        );
                                    }
                                    " 
                                placeholder="Enter Longitude" 
                                :class="{
                                        'is-invalid': form.errors.longitude,
                                    }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.longitude }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Gender <span class="required">*</span></label>
                            <v-select 
                                v-select 
                                :options="gender" 
                                v-model="form.gender"
                                :reduce="(type) => type.value"
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
                        </div>

                        <button class="btn btn-primary" @click="createPromise" :disabled="form.processing || form.hasErrors"
                            v-if="formState == 'create'">
                            <span v-if="form.processing" class="spinner-border me-1" role="status"
                                aria-hidden="true"></span>
                            Save
                        </button>
                        <button class="btn btn-primary" @click="updatePromise" :disabled="form.processing || form.hasErrors"
                            v-if="formState == 'update'">
                            <span v-if="form.processing" class="spinner-border me-1" role="status"
                                aria-hidden="true"></span>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row justify-content-between">
                <div class="col-3 pr-0">
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
                <div class="col-5 pl-0">
                    <div class="d-flex gap-2 align-items-center">
                        <div class="w-auto">Filter by Address:</div>
                        <div class="form-group" style="width: 65%">
                            <select class="form-select" id="basic-default-country" required>
                                <option value="" hidden>Select Address</option>
                                <option value="usa">Private</option>
                                <option value="uk">Public</option>
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
            <div class="col-xl-4 col-lg-4 col-md-4 col-12" v-for="(rescuer, index) in data.data" :key="index">
                <div class="card custom-card__hero" >
                    <div class="user-profile-header-banner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124202.94479554158!2d121.12289103286562!3d13.391135706669152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce8d27f6f844d%3A0xf7cc1b1c943ab71b!2sCalapan%2C%20Oriental%20Mindoro!5e0!3m2!1sen!2sph!4v1681094441544!5m2!1sen!2sph" width="100%" height="250" style="border:0; border-top-left-radius: 5px; border-top-right-radius: 5px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="card-body text-center">
                        <div class="dropdown btn-pinned">
                        <button
                            type="button"
                            class="btn dropdown-toggle hide-arrow p-0"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i class="ti ti-dots-vertical text-muted"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="javascript:void(0);">Share connection</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Block connection</a></li>
                            <li>
                            <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item text-danger" href="javascript:void(0);" @click="deletePromise(rescuer.id)">Delete</a></li>
                        </ul>
                        </div>
                        <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto hero-container">
                            <img :src="rescuer.image_url" alt="Avatar Image" class="d-block  ms-0 rounded-circle user-profile-img hero-profile" />
                        </div>
                        <h4 class="mb-1 card-title card-text">{{rescuer.name}}</h4>
                        <h6 class="mb-0 card-text small-text" style="font-weight: 400"><a href="https://www.google.com/maps/" target="_blank">Open in Maps</a></h6> 
                        <h6 class="mb-0 card-text small-text" style="font-weight: 400">{{rescuer.type}}</h6>
                        <h6 class="mb-0 card-text small-text" style="font-weight: 400">{{rescuer.contact_number}}</h6>
                        <h6 class="mb-0 card-text small-text">{{ rescuer.email }}</h6>
                        <h6 class="mb-0 card-text small-text"><b> Latitude: </b> {{ rescuer.latitude }}</h6>
                        <h6 class="mb-0 card-text small-text"><b>Longitude:</b> {{ rescuer.longitude }}</h6>
                        <div class="d-flex align-items-center justify-content-center my-3 gap-2">
                        </div>
    
                        <div class="d-flex align-items-center justify-content-center">
                        <a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3" @click="handleEdit(rescuer)"
                            ><i class="ti-xs me-1 ti ti-truck me-1"></i>Edit Rescuer</a
                        >
                        <a :href="rescuer.messenger_link" target="_blank" class="btn btn-label-secondary btn-icon"
                            ><i class="ti ti-mail ti-sm"></i
                        ></a>
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
<style>
.custom-container-card {
    background: unset !important;
    box-shadow: unset !important;
}
.custom-card__hero {
    margin: 10px;
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
.small-text {
    font-size: 12px;
    color: rgba(123, 121, 128, 0.87);
}
</style>