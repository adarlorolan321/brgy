<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
    props: {
        data: Object,
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
    name: null,
    content: null,
};
const { validateForm } = useValidateForm();
const routeName = "tips";
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

const status = ['Pending', 'Confirmed'];
</script>

<template>
    <Head title="Tips"></Head>
    <div class="card card-action">
        <div class="card-header">
            <div class="card-action-title align-items-center">
                <h5 class="card-title">Tips</h5>
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
                    Add Tip
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offCanvasForm" data-bs-backdrop="static"
                    aria-labelledby="offCanvasFormLabel">
                    <div class="offcanvas-header">
                        <h5 id="offCanvasFormLabel" class="offcanvas-title">
                            {{ formState == "create" ? "Add" : "Update" }}
                            Tip
                        </h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                            v-if="!form.processing"></button>
                    </div>
                    <div class="offcanvas-body pt-0 mx-0 flex-grow-0">
                        <div class="form-group mb-3">
                            <label for=""
                                >Name <span class="required">*</span></label
                            >
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
                                placeholder="Enter name"
                                :class="{
                                        'is-invalid': form.errors.name,
                                    }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.name }}
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for=""
                                >Content <span class="required">*</span></label
                            >
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.content"
                                @input="($event) => {
                                        form.clearErrors('content');
                                        validateForm(
                                            ['required'],
                                            form,
                                            $event.target.value,
                                            'content'
                                        );
                                    }
                                    "
                                placeholder="Enter Content"
                                :class="{
                                        'is-invalid': form.errors.content,
                                    }"
                            />
                            <div class="invalid-feedback">
                                {{ form.errors.content }}
                            </div>
                        </div>
                        <button class="btn btn-primary" @click="createPromise" :disabled="form.processing || form.hasErrors"
                            v-if="formState == 'create'">
                            <span v-if="form.processing" class="spinner-border me-1" role="status"
                                aria-hidden="true"></span>
                            Save
                        </button>
                        <button class="btn btn-primary" @click="updatePromise" :disabled="form.processing || form.hasErrors"
                            v-if="formState == 'update'" style="margin-top: 20px">
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
                            <select class="form-select" :value="serverQuery.perPage" @input="handleServerQuery(
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
                                @input="handleServerQuery(
                                        'query',
                                        $event.target.value
                                    )
                                    " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <table-header style="width: 35%" @click="handleServerQuery('sort', 'name')"
                            :serverQuery="serverQuery" serverQueryKey="name">
                            Tip Name
                        </table-header>
                        <table-header style="width: 35%" @click="handleServerQuery('sort', 'content')"
                            :serverQuery="serverQuery" serverQueryKey="content">
                            Content
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
                    <tr v-for="tableData in paginatedData.data" :key="tableData">
                        <td>{{ tableData.name }}</td>
                        <td>{{ tableData.content }}</td>
                        <td>
                            <div class="d-flex gap-2">
                                <a class="btn btn-icon btn-label-primary waves-effect" @click="handleEdit(tableData)"
                                    href="javascript:void(0);"><i class="ti ti-pencil"></i>
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
        <div class="card-footer py-3 border-top" v-if="paginatedData && paginatedData.meta.links">
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
