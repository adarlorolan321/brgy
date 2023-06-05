<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
    props: {
        data: Object,
        brands: Array,
        types: Object,
    },
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { usePage, Head } from "@inertiajs/vue3";
const { props } = usePage();
const formObject = {
    car_brand_id: null,
    car_type_id: null,
    model: null,
    year: null,
    color: null,
    image: null,
    full_name: null,
};
const { validateForm } = useValidateForm();
const routeName = "vehicle_model_feature";
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
</script>

<template>
    <Head title="Vehicle Model"></Head>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">Vehicle Model</h5>
            </div>
            <div class="card-action-element">
                <button
                    class="btn btn-primary"
                    type="button"
                    @click="handleCreate"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offCanvasForm"
                    aria-controls="offCanvasForm"
                >
                    <i class="ti ti-plus ti-xs me-1"></i>
                    Add Vehicle Model
                </button>
                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offCanvasForm"
                    data-bs-backdrop="static"
                    aria-labelledby="offCanvasFormLabel"
                >
                    <div class="offcanvas-header">
                        <h5 id="offCanvasFormLabel" class="offcanvas-title">
                            {{ formState == "create" ? "Add" : "Update" }}
                            Vehicle Model
                        </h5>
                        <button
                            type="button"
                            class="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            v-if="!form.processing"
                        ></button>
                    </div>
                    <div class="offcanvas-body pt-0">
                        <div class="form-group mb-3">
                            <label for="">Car Brand <span class="required">*</span></label>
                            <v-select 
                                :options="brands" 
                                v-model="form.car_brand_id"
                                :reduce="(car_brand_id) => car_brand_id.id"
                                label="name" 
                                @update:modelValue="form.clearErrors('car_brand_id')"
                                placeholder="Select Brand" 
                                :class="{ 'is-invalid': form.errors.car_brand_id }"
                            >
                            </v-select> 
                            <div class="invalid-feedback">
                                {{ form.errors.car_brand_id }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Car Type <span class="required">*</span></label>
                            <v-select
                                :options="types" 
                                v-model="form.car_type_id"
                                :reduce="(car_type_id) => car_type_id.id"
                                label="name" 
                                @update:modelValue="form.clearErrors('car_type_id')"
                                placeholder="Select Type" 
                                :class="{ 'is-invalid': form.errors.car_type_id }"
                            >
                            </v-select> 
                            <div class="invalid-feedback">
                                {{ form.errors.car_type_id }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Car Model <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.model" 
                                @input="($event) => {
                                        form.clearErrors('model');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'model'
                                        );
                                    }" 
                                placeholder="Enter Car Model" 
                                :class="{ 'is-invalid': form.errors.model, }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.model }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Year Model <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.year" 
                                @input="($event) => {
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
                                        'is-invalid': form.errors.year,
                                    }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.year }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Color <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.color" 
                                @input="($event) => {
                                        form.clearErrors('color');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'color'
                                        );
                                    }" 
                                placeholder="Enter Color" 
                                :class="{ 'is-invalid': form.errors.color, }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.color }}
                            </div>
                        </div>

                        <div class="form-group mb-4 dropzone-profile-photo">
                            <label for="name">Upload Photo</label>
                            <dropzone
                                collection="image"
                                v-if="isLoadingComponents"
                                :url="route('api.media.upload')"
                                type="profile"
                                model="Vehiclemodelfeature\VehicleModelFeature"
                                :value="form.image"
                                @input="($event) => {
                                        form.image = $event;
                                        form.clearErrors('image');
                                    }
                                    "
                                message="Drop files here or click to upload profile photo"
                                acceptedFiles="image/jpeg,image/png"
                                @error="($event) => {
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
                            <label for="">Full Name <span class="required">*</span></label>
                            <input 
                                type="text" 
                                class="form-control" 
                                v-model="form.full_name" 
                                @input="($event) => {
                                        form.clearErrors('full_name');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'full_name'
                                        );
                                    }" 
                                placeholder="Enter Full Name" 
                                :class="{ 'is-invalid': form.errors.full_name, }" 
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.full_name }}
                            </div>
                        </div>

                        <button
                            class="btn btn-primary"
                            @click="createPromise"
                            :disabled="form.processing || form.hasErrors"
                            v-if="formState == 'create'"
                        >
                            <span
                                v-if="form.processing"
                                class="spinner-border me-1"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Save
                        </button>
                        <button
                            class="btn btn-primary"
                            @click="updatePromise"
                            :disabled="form.processing || form.hasErrors"
                            v-if="formState == 'update'"
                        >
                            <span
                                v-if="form.processing"
                                class="spinner-border me-1"
                                role="status"
                                aria-hidden="true"
                            ></span>
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
                            <select
                                class="form-select"
                                :value="serverQuery.perPage"
                                @input="
                                    handleServerQuery(
                                        'perPage',
                                        $event.target.value
                                    )
                                "
                            >
                                <option
                                    v-for="i in [5, 10, 25, 50, 100]"
                                    :value="String(i)"
                                    :key="i"
                                >
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
                            <input
                                type="search"
                                placeholder="Search"
                                class="form-control"
                                :value="serverQuery.query"
                                @input="
                                    handleServerQuery(
                                        'query',
                                        $event.target.value
                                    )
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th></th>
                        <table-header
                            style="width: 60%"
                            @click="handleServerQuery('sort', 'full_name')"
                            :serverQuery="serverQuery"
                            serverQueryKey="full_name"
                        >
                            Model Full Name
                        </table-header>
                        <!-- <table-header
                            style="width: 60%"
                            @click="handleServerQuery('sort', 'car_brand_id')"
                            :serverQuery="serverQuery"
                            serverQueryKey="car_brand_id"
                        >
                             Brand
                        </table-header>
                        <table-header
                            style="width: 60%"
                            @click="handleServerQuery('sort', 'car_type_id')"
                            :serverQuery="serverQuery"
                            serverQueryKey="car_type_id"
                        >
                                Type
                        </table-header> -->
                        <table-header
                            style="width: 60%"
                            @click="handleServerQuery('sort', 'model')"
                            :serverQuery="serverQuery"
                            serverQueryKey="model"
                        >
                            Model Name
                        </table-header>
                        <table-header
                            style="width: 60%"
                            @click="handleServerQuery('sort', 'year')"
                            :serverQuery="serverQuery"
                            serverQueryKey="year"
                        >
                            Year
                        </table-header>
                        <table-header
                            style="width: 60%"
                            @click="handleServerQuery('sort', 'color')"
                            :serverQuery="serverQuery"
                            serverQueryKey="color"
                        >
                            Color
                        </table-header>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr v-if="paginatedData.data.length <= 0">
                        <td colspan="999999" class="text-center">
                            No item found
                        </td>
                    </tr>
                    <tr
                        v-for="tableData in paginatedData.data"
                        :key="tableData"
                    >
                        <td>
                            <div class="avatar avatar-lg">
                                <img
                                    style="object-fit: cover"
                                    :src="tableData.image_url"
                                    alt="Avatar"
                                    class="rounded-circle"
                                />
                            </div>
                        </td>
                        {{ tableData.brands}}
                        <td style="width: 60%">{{ tableData.full_name }}</td>
                        <!-- <td style="width: 60%">{{ tableData.brand }}</td> -->
                        <!-- <td style="width: 60%">{{ tableData.car_type_id }}</td> -->
                        <td style="width: 60%">{{ tableData.model }}</td>
                        <td style="width: 60%">{{ tableData.year }}</td>
                        <td style="width: 60%">{{ tableData.color }}</td>
                        <td>
                            <div class="d-flex gap-2">
                                <a
                                    class="btn btn-icon btn-label-primary waves-effect"
                                    @click="handleEdit(tableData)"
                                    href="javascript:void(0);"
                                    ><i class="ti ti-pencil"></i>
                                </a>
                                <a
                                    class="btn btn-icon btn-label-danger waves-effect"
                                    href="javascript:void(0);"
                                    @click="deletePromise(tableData.id)"
                                    ><i class="ti ti-trash"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div
            class="card-footer py-3 border-top"
            v-if="paginatedData && paginatedData.meta.links"
        >
            <div class="row justify-content-between">
                <div class="col-auto">
                    <div class="table_info">
                        Showing {{ paginatedData.meta.from }} to
                        {{ paginatedData.meta.to }} of
                        {{ paginatedData.meta.total }} entries
                    </div>
                </div>
                <div class="col-auto">
                    <nav
                        class="dataTables_paginate paging_simple_numbers"
                        aria-label="Page navigation example"
                    >
                        <ul class="pagination mb-0">
                            <li
                                class="page-item"
                                v-for="link in paginatedData.meta.links"
                                :key="link"
                            >
                                <component
                                    :is="link.url ? 'inertia-link' : 'button'"
                                    class="page-link"
                                    :class="{
                                        active: link.active,
                                    }"
                                    :href="link.url"
                                    :only="['data', 'params']"
                                >
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
