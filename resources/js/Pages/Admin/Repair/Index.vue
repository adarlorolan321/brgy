<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
    props: {
        vehicles: Object,
    },
    computed: {
    }
};
</script>

<script setup>
import { useCrud } from "@/Composables/Crud.js";
import { useValidateForm } from "@/Composables/Validate.js";
import { usePage, Head } from "@inertiajs/vue3";
const { props } = usePage();
const formObject = {
    mechanic_name: null,
    mechanic_contact_number: null,
    mechanic_address: null,
    vehicle_id: null,
    item: null,
    total_amount: null,
    status: null,
    // image: null,
};
const { validateForm } = useValidateForm();
const routeName = "repair";
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
    <Head title="Repairs"></Head>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">Repairs</h5>
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
                    Add Repair
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
                            Repair
                        </h5>
                        <button
                            type="button"
                            class="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            v-if="!form.processing"
                        ></button>
                    </div>
                    <div class="offcanvas-body pt-0 mx-0 flex-grow-0">
                        <div class="form-group mb-3">
                            <label for=""
                                >Mechanic Name <span class="required">*</span></label
                            >
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.mechanic_name"
                                @input="
                                    ($event) => {
                                        form.clearErrors('mechanic_name');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'mechanic_name'
                                        );
                                    }
                                "
                                placeholder="Enter Mechanic Name"
                                :class="{
                                    'is-invalid': form.errors.mechanic_name,
                                }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.mechanic_name }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for=""
                                >Mechanic Contact Number <span class="required">*</span></label
                            >
                            <input
                                type="number"
                                class="form-control"
                                v-model="form.mechanic_contact_number"
                                @input="($event) => {
                                        form.clearErrors('mechanic_contact_number');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'mechanic_contact_number'
                                        );
                                    }
                                    "
                                placeholder="Enter Mechanic Contact Number"
                                :class="{
                                    'is-invalid': form.errors.mechanic_contact_number,
                                }"
                                min="0"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.mechanic_contact_number }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for=""
                                >Mechanic Address <span class="required">*</span></label
                            >
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.mechanic_address"
                                @input="($event) => {
                                        form.clearErrors('mechanic_address');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'mechanic_address'
                                        );
                                    }
                                    "
                                placeholder="Enter Mechanic Address"
                                :class="{
                                        'is-invalid': form.errors.mechanic_address,
                                    }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.mechanic_address }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="">Vehicle <span class="required">*</span></label>
                            <v-select 
                                :options="vehicles" 
                                v-model="form.vehicle_id"
                                :reduce="(vehicle_id) => vehicle_id.id"
                                label="model" 
                                @input="($event) => {
                                        form.clearErrors('vehicle_id');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'vehicle_id'
                                        );
                                    }"
                                placeholder="Select Vehicle" 
                            >
                            </v-select> 
                            <div class="invalid-feedback">
                                {{ form.errors.vehicle_id }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for=""
                                >Item <span class="required">*</span></label
                            >
                            <input
                                class="form-control"
                                v-model="form.item"
                                @input="($event) => {
                                        form.clearErrors('item');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'item'
                                        );
                                    }
                                    "
                                placeholder="Enter Item"
                                :class="{
                                        'is-invalid': form.errors.item,
                                    }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.item }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for=""
                                >Total Amount <span class="required">*</span></label
                            >
                            <input
                                type="number"
                                class="form-control"
                                v-model="form.total_amount"
                                @input="($event) => {
                                        form.clearErrors('total_amount');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'total_amount'
                                        );
                                    }
                                    "
                                placeholder="Enter Total Amount"
                                :class="{
                                        'is-invalid': form.errors.total_amount,
                                    }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.total_amount }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for=""
                                >Status</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.status"
                                @input="($event) => {
                                        form.clearErrors('status');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'status'
                                        );
                                    }
                                    "
                                placeholder="Enter Status"
                                :class="{
                                        'is-invalid': form.errors.status,
                                    }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.status }}
                            </div>
                        </div>

                        <!-- <div class="form-group mb-4 dropzone-profile-photo">
                            <label for="name">Upload Photo</label>
                            <dropzone
                                collection="image"
                                v-if="isLoadingComponents"
                                :url="route('api.media.upload')"
                                type="profile"
                                model="Repair\Repair"
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
                                            form.setError(
                                                'image',
                                                $event[0]
                                            );
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
                        </div> -->
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
                        <!-- <th></th> -->
                        <table-header
                            style="width: 35%"
                            @click="handleServerQuery('sort', 'mechanic_name')"
                            :serverQuery="serverQuery"
                            serverQueryKey="mechanic_name"
                        >
                            Mechanic Name
                        </table-header>
                        <table-header
                            style="width: 20%"
                            @click="handleServerQuery('sort', 'mechanic_contact_number')"
                            :serverQuery="serverQuery"
                            serverQueryKey="mechanic_contact_number"
                        >
                            Contact Number
                        </table-header>
                        <table-header
                            style="width: 20%"
                            @click="handleServerQuery('sort', 'mechanic_address')"
                            :serverQuery="serverQuery"
                            serverQueryKey="mechanic_address"
                        >
                            Address
                        </table-header>
                        <th >Actions</th>
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
                        <!-- <td>
                            <div class="avatar avatar-lg">
                                <img
                                    style="object-fit: cover"
                                    :src="tableData.images_url"
                                    alt="Avatar"
                                    class="rounded-circle"
                                />
                            </div>
                        </td> -->
                        <td style="width: 35%">{{ tableData.mechanic_name }}</td>
                        <td style="width: 20%">{{ tableData.mechanic_contact_number }}</td>
                        <td style="width: 30%">{{ tableData.mechanic_address }}</td>
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
