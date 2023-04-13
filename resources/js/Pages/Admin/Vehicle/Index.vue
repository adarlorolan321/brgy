<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { usePage, Head } from "@inertiajs/vue3";
const { props } = usePage();
const formObject = {
    vehicle_brand_id: null,
    model: null,
    vehicle_type_id: null,
    color: null,
    year: null,
    assigned_to: null,
    plate_number: null,
};
const { validateForm } = useValidateForm();
const routeName = "vehicles";
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
</script>

<template>
    <Head title="Vehicle"></Head>
    <div class="card card-action custom-container-card">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">Vehicle</h5>
            </div>
            <div class="card-action-element">
                <button class="btn btn-primary" type="button" @click="handleCreate" data-bs-toggle="offcanvas"
                    data-bs-target="#offCanvasForm" aria-controls="offCanvasForm">
                    <i class="ti ti-plus ti-xs me-1"></i>
                    Add Vehicle
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offCanvasForm" data-bs-backdrop="static"
                    aria-labelledby="offCanvasFormLabel">
                    <div class="offcanvas-header">
                        <h5 id="offCanvasFormLabel" class="offcanvas-title">
                            {{ formState == "create" ? "Add" : "Update" }}
                            Vehicle
                        </h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                            v-if="!form.processing"></button>
                    </div>
                    <div class="offcanvas-body mx-0 flex-grow-0 pt-0">
                        <div class="form-group mb-3">
                            <label for="">Car Brand <span class="required">*</span></label>
                            <input 
                                type="text"     
                                class="form-control" 
                                v-model="form.vehicle_brand_id" 
                                @input="
                                ($event) => {
                                    form.clearErrors('vehicle_brand_id');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'vehicle_brand_id'
                                    );
                                }" 
                                placeholder="Enter Car Brand" 
                                :class="{'is-invalid': form.errors.vehicle_brand_id,}" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.vehicle_brand_id }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Car Model <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.model" 
                                @input="
                                ($event) => {
                                    form.clearErrors('model');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'model'
                                    );
                                }" 
                                placeholder="Enter Car Model" 
                                :class="{'is-invalid': form.errors.model,}" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.model }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Car Type <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.vehicle_type_id" 
                                @input="
                                ($event) => {
                                    form.clearErrors('vehicle_type_id');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'vehicle_type_id'
                                    );
                                }" 
                                placeholder="Enter Car Type" 
                                :class="{'is-invalid': form.errors.vehicle_type_id,}" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.vehicle_type_id }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Color <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.color" 
                                @input="
                                ($event) => {
                                    form.clearErrors('color');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'color'
                                    );
                                }" 
                                placeholder="Enter Color" 
                                :class="{'is-invalid': form.errors.color,}" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.color }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Year Model <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.year" 
                                @input="
                                ($event) => {
                                    form.clearErrors('year');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'year'
                                    );
                                }" 
                                placeholder="Enter Year Model" 
                                :class="{
                                'is-invalid': form.errors.year,}" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.year }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Plate Number <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.plate_number" 
                                @input="
                                ($event) => {
                                    form.clearErrors('plate_number');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'plate_number'
                                    );
                                }" 
                                placeholder="Enter Plate Number" 
                                :class="{'is-invalid': form.errors.plate_number,}" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.plate_number }}
                            </div>
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
                <div class="col-auto">
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
            <div class="col-xl-4 col-lg-4 col-md-4" v-for="n in 3" :key="n">
                <div class="card custom-card__hero">
                    <div class="user-profile-header-banner">
                        <img class="banner-custom-img"
                            src="../../../../../public/assets/img/pages/auth-car4-login-illustration-black.png" alt="">
                    </div>
                    <div class="card-body text-center">
                        <div class="dropdown btn-pinned">
                            <button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="ti ti-dots-vertical text-muted"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                        data-bs-target="#editUser">Activity Logs</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item text-danger" href="javascript:void(0);">Delete</a></li>
                            </ul>
                        </div>
                        <h4 class="mb-1 card-title card-text">Toyota</h4>
                        <h6 class="mb-0 card-text small-text">Ascent Sport</h6>
                        <h6 class="mb-0 card-text small-text"> Toyota Hybrid System and auto CVT</h6>
                        <h6 class="mb-0 card-text small-text">SUNSTONE ORANGE</h6>
                        <h6 class="pb-0 mb-0 card-text small-text">2018 </h6>
                        <h6 class="pb-0 mb-0 card-text small-text">A3 B129 </h6>
                        <!-- <span class="badge rounded-pill bg-label-warning pb-2" style="float:left">Driving..</span> -->
                        <div class="d-flex align-items-center justify-content-center my-3 gap-2">
                        </div>

                        <div class="d-flex align-items-center justify-content-center">
                            <a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3"><i
                                    class="ti-xs me-1 ti ti-truck me-1"></i>Manage Vehicle</a>
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
.user-profile-header-banner img {
    height: 180px !important;
}
.small-text {
    font-size: 12px;
    color: rgba(123, 121, 128, 0.87);
}
</style>