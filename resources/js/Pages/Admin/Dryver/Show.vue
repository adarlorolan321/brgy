<template lang="">
    <div class="col-4 mb-4">
        <button class="btn btn-label-primary" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offCanvasForm" aria-controls="offCanvasForm">
            <i class="ti ti-arrow-left ti-xs me-1"></i>
            Back to All Drivers
        </button>
    </div>
    <div class="card mb-4">
        {{data}}
        <h5 class="card-header">Driver Activity Timeline</h5>
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
                    <img
                        src="../../../../../public/assets/img/avatars/1.png"
                        alt="PDF image"
                        width="15"
                        class="me-2"
                    />
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
                    <img src="../../../../../public/assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                    </div>
                    <div>
                    <h6 class="mb-0">Lester McCarthy (Client)</h6>
                    <small>CEO of Pixinvent</small>
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
                    <img src="../../../../../public/assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                    </div>
                    <div
                    class="avatar pull-up"
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Marrie Patty"
                    >
                    <img src="../../../../../public/assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                    </div>
                    <div
                    class="avatar pull-up"
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Jimmy Jackson"
                    >
                    <img src="../../../../../public/assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                    </div>
                    <div
                    class="avatar pull-up"
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Kristine Gill"
                    >
                    <img src="../../../../../public/assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                    </div>
                    <div
                    class="avatar pull-up"
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title="Nelson Wilson"
                    >
                    <img src="../../../../../public/assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
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
</template>
<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
export default {
    layout: AdminLayout,
    props: {
        data: Object,
    }
};
</script>
<style lang="">
    
</style>