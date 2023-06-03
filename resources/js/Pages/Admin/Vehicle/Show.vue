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
            <h5 class="pb-0 mb-0 d-flex ">No drivers' activity</h5>
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
                        <h6 class="mb-0" style=" font-weight:700">{{log.vehicle.model}}, {{log.vehicle.brand.name}}, {{log.vehicle.type.name}}, {{log.vehicle.year}}</h6>
                        <small class="text-muted">{{log.average_speed}}</small>
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
        brands: Array,
        types: Object,
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