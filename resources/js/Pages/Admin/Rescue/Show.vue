<template lang="">
    <div class="col-4 mb-4">
        <inertia-link href="/rescuers">
            <button class="btn btn-outline-primary waves-effect" type="button">
                <i class="ti ti-arrow-left ti-xs me-1"></i>
                Back to All Rescuers
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
            <li v-for="(log, index) in data" :key="index.id" :class="getRandomTimelineItemClass(index)">
                <span :class="getRandomTimelinePointClass(index)"></span>
                <div class="timeline-event">
                    <div class="timeline-header border-bottom mb-3">
                        <h6 class="mb-0">{{data.vehicle.model}}, {{data.vehicle.brand.name}}, {{data.vehicle.type.name}}</h6>
                        <small class="text-muted">{{data.vehicle.year}}</small>
                    </div>
                    <p class="mb-0"><b>Latitude: </b>{{data.lat}}</p> 
                    <p class="mb-3"><b>Longtitude: </b>{{data.lng}} </p>
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
                        <span class="fw-semibold text-heading">{{ data.rescuer.name}}</span>
                        </a>
                        <a :href="data.rescuer.messenger_link" target="_blank" class="btn btn-label-secondary btn-icon" style="height: 25px; width: 25px; margin-right: 10px" >
                            <i class="ti ti-mail ti-sm" style="font-size: 15px !important"></i>
                        </a>
                        <a @click="copyContactNumber" class="btn btn-label-secondary btn-icon"
                        style="height: 25px; width: 25px;" ><i class="ti ti-phone ti-sm" style="font-size: 15px !important"></i
                        ></a>
                    </div>
                    <p class="mb-2">{{data.rescuer.type}}</p>
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
            const contactNumber = this.data.rescuer.contact_number;
            navigator.clipboard.writeText(contactNumber)
                .then(() => {
                    toastr.success("Contact number copied!");
                })
                .catch((error) => {
                    console.error('Failed to copy contact number:', error);
                });
        },
        getRandomTimelineItemClass(index) {
            const classes = [
                'timeline-item timeline-item-primary pb-4 border-left-dashed',
                'timeline-item timeline-item-success pb-4 border-left-dashed',
                'timeline-item timeline-item-danger pb-4 border-left-dashed',
                'timeline-item timeline-item-info pb-4 border-left-dashed',
                'timeline-item timeline-item-secondary pb-4 border-left-dashed'
            ];

            // Generate a random index within the range of the classes array
            const randomIndex = Math.floor(Math.random() * classes.length);

            // Return the class at the randomly generated index
            return classes[randomIndex];
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