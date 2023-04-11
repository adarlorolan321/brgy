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
const routeName = "dryver";
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
    <Head title="Driver"></Head>
    <div class="card card-action custom-container-card">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">Driver</h5>
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
                            <label for="">Select Gender <span class="required">*</span></label>
                            <select class="form-select" id="basic-default-country" required>
                                <option value="" hidden>Select Gender</option>
                                <option value="usa">Male</option>
                                <option value="uk">Female</option>
                                <option value="france">Prefer not to say</option>
                            </select>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Select Province <span class="required">*</span></label>
                            <select class="form-select" id="basic-default-country" required>
                                <option value="" hidden>Select Province</option>
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
                                <option value="" hidden>Select City</option>
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
                            <select class="form-select" id="basic-default-country" required>
                                <option value="" hidden>Select Driver Type</option>
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
                        <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto hero-container">
                            <img src="../../../../../public/assets/img/avatars/3.png" alt="Avatar Image"
                                class="d-block  ms-0 rounded-circle user-profile-img hero-profile" />
                        </div>
                        <h4 class="mb-1 card-title card-text">Mark Gilbert</h4>
                        <h6 class="mb-0 card-text small-text">Open in Maps</h6>
                        <h6 class="mb-0 card-text small-text">London UK</h6>
                        <h6 class="mb-0 card-text small-text">email@email.com</h6>
                        <h6 class="pb-0 mb-0 card-text small-text">+63999132312312</h6>
                        <!-- <span class="badge rounded-pill bg-label-warning pb-2" style="float:left">Driving..</span> -->
                        <div class="d-flex align-items-center justify-content-center my-3 gap-2">
                        </div>

                        <div class="d-flex align-items-center justify-content-center">
                            <a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3"><i
                                    class="ti-xs me-1 ti ti-truck me-1"></i>Manage Driver</a>
                            <a href="javascript:;" class="btn btn-label-secondary btn-icon"><i
                                    class="ti ti-mail ti-sm"></i></a>
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
        <div class="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-simple modal-edit-user">
                <div class="modal-content p-1 p-md-2">
                    <div class="modal-body">
                        <h5 class="card-header">Driver's Activity Timeline</h5>
                        <div class="card-body pb-0">
                          <ul class="timeline mb-0">
                            <li class="timeline-item timeline-item-transparent">
                              <span class="timeline-point timeline-point-primary"></span>
                              <div class="timeline-event">
                                <div class="timeline-header mb-1">
                                  <h6 class="mb-0">12 Invoices have been paid</h6>
                                  <small class="text-muted">12 min ago</small>
                                </div>
                                <p class="mb-2">Invoices have been paid to the company</p>
                                <div class="d-flex">
                                  <a href="javascript:void(0)" class="me-3">
                                    <!-- <img
                                      src="../../assets/img/icons/misc/pdf.png"
                                      alt="PDF image"
                                      width="15"
                                      class="me-2"
                                    /> -->
                                    <span class="fw-semibold text-heading">invoices.pdf</span>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent">
                              <span class="timeline-point timeline-point-warning"></span>
                              <div class="timeline-event">
                                <div class="timeline-header mb-1">
                                  <h6 class="mb-0">Client Meeting</h6>
                                  <small class="text-muted">45 min ago</small>
                                </div>
                                <p class="mb-2">Project meeting with john @10:15am</p>
                                <div class="d-flex flex-wrap">
                                  <div class="avatar me-3">
                                    <!-- <img src="../../assets/img/avatars/3.png" alt="Avatar" class="rounded-circle" /> -->
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent">
                              <span class="timeline-point timeline-point-info"></span>
                              <div class="timeline-event">
                                <div class="timeline-header mb-1">
                                  <h6 class="mb-0">Create a new project for client</h6>
                                  <small class="text-muted">2 Day Ago</small>
                                </div>
                                <p class="mb-2">5 team members in a project</p>
                                <div class="d-flex align-items-center avatar-group">
                                  <div
                                    class="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title="Vinnie Mostowy"
                                  >
                                    <!-- <img src="../../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" /> -->
                                  </div>
                                  <div
                                    class="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title="Marrie Patty"
                                  >
                                    <!-- <img src="../../assets/img/avatars/12.png" alt="Avatar" class="rounded-circle" /> -->
                                  </div>
                                  <div
                                    class="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title="Jimmy Jackson"
                                  >
                                    <!-- <img src="../../assets/img/avatars/9.png" alt="Avatar" class="rounded-circle" /> -->
                                  </div>
                                  <div
                                    class="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title="Kristine Gill"
                                  >
                                    <!-- <img src="../../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" /> -->
                                  </div>
                                  <div
                                    class="avatar pull-up"
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    title="Nelson Wilson"
                                  >
                                    <!-- <img src="../../assets/img/avatars/4.png" alt="Avatar" class="rounded-circle" /> -->
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="timeline-item timeline-item-transparent border-0">
                              <span class="timeline-point timeline-point-success"></span>
                              <div class="timeline-event">
                                <div class="timeline-header mb-1">
                                  <h6 class="mb-0">Design Review</h6>
                                  <small class="text-muted">5 days Ago</small>
                                </div>
                                <p class="mb-0">Weekly review of freshly prepared design for our new app.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                    </div>
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

.banner-custom-img {
    object-fit: contain !important;
    height: 270px !important;
}

.small-text {
    font-size: 12px;
}
</style>