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
            selectedProvince: null,
            filteredCities: [],
        }
    },
    watch: {
        selectedProvince() {
            if (this.selectedProvince) {
                this.filteredCities = this.selectedProvince.cities;
            } else {
                this.filteredCities = [];
            }
        },
    },
    methods: {
        getCities() {
            this.selectedCity = null; // clear the selectedCity field
            const selectedProvinceId = this.selectedProvince.id;
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
    email: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    gender: null,
    province: null,
    city: null,
    service: [],
};
const { validateForm } = useValidateForm();
const routeName = "rescuers";
let {
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
                            <label for="">Email <span class="required">*</span></label>
                            <input type="email" class="form-control" v-model="form.name" @input="
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
                            <input type="text" class="form-control" v-model="form.middle_name" @input="
                                ($event) => {
                                    form.clearErrors('middle_name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'middle_name'
                                    );
                                }
                            " placeholder="Enter Middle Name" :class="{
                                'is-invalid': form.errors.middle_name,
                            }" />
                            <div class="invalid-feedback">
                                {{ form.errors.middle_name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Last Name <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.last_name" @input="
                                ($event) => {
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
                            <v-select v-select :options="gender" label="name" placeholder="Select Gender"></v-select> 
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select Province <span class="required">*</span></label>
                            <v-select v-select 
                                :options="provinces" 
                                v-model="selectedProvince"
                                label="name" 
                                @change="getCities()"
                                placeholder="Select Province" 
                                >
                            </v-select>  
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select City <span class="required">*</span></label>
                            <v-select 
                                :options="filteredCities" 
                                label="name" 
                                v-model="selectedCity" placeholder="Select City"
                            >
                            </v-select>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Service <span class="required">*</span></label>
                            <v-select v-select 
                                :options="services" 
                                v-model="form.service"
                                label="name" 
                                multiple
                                @input="
                                    ($event) => {
                                        form.clearErrors('service');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'service'
                                        );
                                    }"
                                placeholder="Select Service" 
                                >
                            </v-select>  
                        </div>

                        <button class="btn btn-primary" @click="createPromise" :disabled="form.processing || form.hasErrors"
                            v-if="formState == 'create'">
                            <span v-if="form.processing" class="spinner-border me-1" role="status"
                                aria-hidden="true"></span>
                            Submit
                        </button>
                        <button class="btn btn-primary" @click="updatePromise" :disabled="form.processing || form.hasErrors"
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
            <div class="col-xl-4 col-lg-4 col-md-4 col-12" v-for="n in 3" :key="n">
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
                            <li><a class="dropdown-item text-danger" href="javascript:void(0);">Delete</a></li>
                        </ul>
                        </div>
                        <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto hero-container">
                            <img src="../../../../../public/assets/img/avatars/4.png" alt="Avatar Image" class="d-block  ms-0 rounded-circle user-profile-img hero-profile" />
                        </div>
                        <h4 class="mb-1 card-title card-text">Jane Doe</h4>
                        <h6 class="mb-0 card-text small-text" style="font-weight: 400"><a href="https://www.google.com/maps/" target="_blank">Open in Maps</a></h6> 
                        <h6 class="mb-0 card-text small-text" style="font-weight: 400">London UK</h6>
                        <h6 class="mb-0 card-text small-text" style="font-weight: 400">email@email.com</h6>
                        <h6 class="pb-1 card-text small-text">+63999132312312</h6>
                        <div class="d-flex align-items-center justify-content-center my-3 gap-2">
                        </div>
    
                        <div class="d-flex align-items-center justify-content-center">
                        <a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3"
                            ><i class="ti-xs me-1 ti ti-truck me-1"></i>Manage Rescuer</a
                        >
                        <a href="javascript:;" class="btn btn-label-secondary btn-icon"
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