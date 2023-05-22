<template lang="">
    <div class="col-4 mb-4">
        <inertia-link href="/drivers">
            <button class="btn btn-outline-primary waves-effect" type="button">
                <i class="ti ti-arrow-left ti-xs me-1"></i>
                Back to All Drivers
            </button>
        </inertia-link>
    </div>
    <div class="card mb-4" v-if="data.drive_logs == ''">
        <div class="card-body d-flex align-items-center justify-content-center">
            <h5 class="pb-0 mb-0 d-flex ">No driver's activity</h5>
        </div>
    </div>
    <div class="card mb-4" v-else>
        <h4 class="card-header mb-2">Driver Activity Timeline</h4>
        <div class="card-body pb-0">
            <ul class="timeline mb-0">
            <li class="timeline-item timeline-item-transparent" v-for="(log, index) in data.drive_logs" :key="index.id">
                <span :class="getRandomTimelinePointClass(index)"></span>
                <div class="timeline-event">
                    <div class="timeline-header mb-1">
                        <h6 class="mb-0">{{log.vehicle.model}}, {{log.vehicle.vehicle_brand_id}}, {{log.vehicle.vehicle_type_id}}</h6>
                        <small class="text-muted">{{log.vehicle.year}}</small>
                    </div>
                    <p class="mb-0"><b>Start time: </b>{{ getFormattedTime(log.start_date, log.start_time) }}</p> 
                    <p class="mb-0"><b>End time: </b> {{ getFormattedTime(log.end_date, log.end_time) }}</p>
                    <p class="mb-2">{{ log.start_date}} to {{ log.end_date}}</p>
                    <div class="d-flex">
                        <a href="javascript:void(0)" class="me-3">
                        <img
                            src="../../../../../public/assets/img/icons8-licence-plate-50.png"
                            alt="PDF image"
                            width="15"
                            class="me-2"
                            style="width: 30px; height: 30px;"
                        />
                        <span class="fw-semibold text-heading">{{ log.vehicle.plate_number}}</span>
                        </a>
                    </div>
                </div>
            </li>
            <!-- <li class="timeline-item timeline-item-transparent">
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
            </li> -->
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
    },
    methods: {
        getFormattedTime(date, time) {
            const datetime = new Date(`${date} ${time}`);
            return this.formatTime(datetime);
        },
        formatTime(datetime) {
            const options = { hour: 'numeric', minute: 'numeric', hour12: true };
            return datetime.toLocaleString('en-US', options);
        },
        getRandomTimelinePointClass(index) {
            const classes = [
                'timeline-point-info',
                'timeline-point-warning',
                'timeline-point-success'
            ];
            const classIndex = index % classes.length;
            return `timeline-point ${classes[classIndex]}`;
        },
    }
};
</script>
<style lang="">
    
</style>