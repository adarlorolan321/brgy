<template lang="">
    <div class="col-4 mb-4">
        <inertia-link href="/drivers">
            <button class="btn btn-outline-primary waves-effect" type="button">
                <i class="ti ti-arrow-left ti-xs me-1"></i>
                Back to All Drivers
            </button>
        </inertia-link>
    </div>
    <div class="card mb-4" v-if="data == ''">
        <div class="card-body d-flex align-items-center justify-content-center">
            <h5 class="pb-0 mb-0 d-flex ">No rescue activity</h5>
        </div>
    </div>
    <div class="card mb-4" v-else>
        <h4 class="card-header mb-2">Driver Activity Timeline</h4>
        <div class="card-body pb-0">
            <ul class="timeline mb-0">
            <li class="timeline-item timeline-item-transparent" v-for="(log, index) in data.rescue_logs" :key="index.id">
                <span :class="getRandomTimelinePointClass(index)"></span>
                <div class="timeline-event">
                    <div class="timeline-header mb-1">
                        <h6 class="mb-0">{{log.vehicle.model}}, {{log.vehicle.brand.name}}, {{log.vehicle.type.name}}</h6>
                        <small class="text-muted">{{log.vehicle.year}}</small>
                    </div>
                    <p class="mb-0"><b>Latitude: </b>{{log.rescuer.latitude}}</p> 
                    <p class="mb-3"><b>Longtitude: </b>{{log.rescuer.longitude}} </p>
                    <!-- <p class="mb-2">{{data.created_at}}</p> -->
                    <div class="d-flex">
                        <a href="javascript:void(0)" class="me-3">
                        <img
                            src="../../../../../public/assets/img/icons8-user-60.png"
                            alt="PDF image"
                            width="15"
                            class="me-2"
                            style="width: 20px; height: 20px;"
                        />
                        <span class="fw-semibold text-heading">{{ log.rescuer.name}}</span>
                        </a>
                        <a :href="log.rescuer.messenger_link" target="_blank" class="btn btn-label-secondary btn-icon" style="height: 25px; width: 25px; margin-right: 10px" >
                            <i class="ti ti-mail ti-sm" style="font-size: 15px !important"></i>
                        </a>
                        <a @click="copyContactNumber" class="btn btn-label-secondary btn-icon"
                        style="height: 25px; width: 25px;" ><i class="ti ti-phone ti-sm" style="font-size: 15px !important"></i
                        ></a>
                    </div>
                    <p class="mb-2">{{log.rescuer.type}}</p>
                </div>
            </li>
            </ul>
        </div>
    </div>
</template>
<script>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import toastr from "toastr";

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
        rescuerFormattedDate() {
            const datetime = new Date(this.data.created_at);
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            return datetime.toLocaleDateString('en-US', dateOptions);
        },
        rescuerFormattedTime() {
            const datetime = new Date(this.data.created_at);
            const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            return datetime.toLocaleTimeString('en-US', timeOptions);
        },
        copyContactNumber() {
            const contactNumber = this.log?.rescuer.contact_number;
            navigator.clipboard.writeText(contactNumber)
                .then(() => {
                    toastr.success("Contact number copied!");
                })
                .catch((error) => {
                    console.error('Failed to copy contact number:', error);
                });
        },
    }
};
</script>
<style lang="">
    
</style>