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
    name: null,
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
                                    form.clearErrors('name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'name'
                                    );
                                }
                            " placeholder="Enter Email" :class="{
                                'is-invalid': form.errors.name,
                            }" />
                            <div class="invalid-feedback">
                                {{ form.errors.name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">First Name <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.name" @input="
                                ($event) => {
                                    form.clearErrors('name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'name'
                                    );
                                }
                            " placeholder="Enter First Name" :class="{
                                'is-invalid': form.errors.name,
                            }" />
                            <div class="invalid-feedback">
                                {{ form.errors.name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Middle Name <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.name" @input="
                                ($event) => {
                                    form.clearErrors('name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'name'
                                    );
                                }
                            " placeholder="Enter Middle Name" :class="{
                                'is-invalid': form.errors.name,
                            }" />
                            <div class="invalid-feedback">
                                {{ form.errors.name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Last Name <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.name" @input="
                                ($event) => {
                                    form.clearErrors('name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'name'
                                    );
                                }
                            " placeholder="Enter Last Name" :class="{
                                'is-invalid': form.errors.name,
                            }" />
                            <div class="invalid-feedback">
                                {{ form.errors.name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Gender <span class="required">*</span></label>
                            <input type="text" class="form-control" v-model="form.name" @input="
                                ($event) => {
                                    form.clearErrors('name');
                                    validateForm(
                                        ['required'],
                                        form,
                                        $event.target.value,
                                        'name'
                                    );
                                }
                            " placeholder="Enter Gender" :class="{
                                'is-invalid': form.errors.name,
                            }" />
                            <div class="invalid-feedback">
                                {{ form.errors.name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select Province <span class="required">*</span></label>
                            <select class="form-select" id="basic-default-country" required>
                                <option value="">Select Province</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="france">France</option>
                                <option value="australia">Australia</option>
                                <option value="spain">Spain</option>
                            </select>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select City <span class="required">*</span></label>
                            <select class="form-select" id="basic-default-country" required>
                                <option value="">Select City</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="france">France</option>
                                <option value="australia">Australia</option>
                                <option value="spain">Spain</option>
                            </select>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Service <span class="required">*</span></label>
                            <select class="form-select" id="basic-default-country" required>
                                <option value="">Select Service</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="france">France</option>
                                <option value="australia">Australia</option>
                                <option value="spain">Spain</option>
                            </select>
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
                <div class="card custom-card__hero" >
                    <div class="user-profile-header-banner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124202.94479554158!2d121.12289103286562!3d13.391135706669152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce8d27f6f844d%3A0xf7cc1b1c943ab71b!2sCalapan%2C%20Oriental%20Mindoro!5e0!3m2!1sen!2sph!4v1681094441544!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                        <h4 class="mb-1 card-title card-text">Mark Gilbert</h4>
                        <h6 class="mb-0 card-text" style="font-weight: 400">Open in Maps</h6> 
                        <h6 class="mb-0 card-text" style="font-weight: 400">London UK</h6>
                        <h6 class="mb-0 card-text" style="font-weight: 400">email@email.com</h6>
                        <h6 class="pb-1 card-text">+63999132312312</h6>
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
</style>