<template lang="">
    <div class="col-4 mb-4">
        <inertia-link href="/vehicles">
            <button class="btn btn-outline-primary waves-effect" type="button">
                <i class="ti ti-arrow-left ti-xs me-1"></i>
                Back to All Vehicles
            </button>
        </inertia-link>
    </div>
    <div class="card mb-4" v-if="data.repairs == ''">
        <div class="card-body d-flex align-items-center justify-content-center">
            <h5 class="pb-0 mb-0 d-flex ">No repairs activity</h5>
        </div>
    </div>
    <div class="card mb-4" v-else>
        <h4 class="card-header mb-2">Repairs Activity Timeline</h4>
        <div class="card-body pb-0">
            <ul class="timeline mb-0">
                <li 
                :class="getRandomTimelineItemClass(index)"
                v-for="(log, index) in data.repairs" 
                :key="index.id"
                >
                <span :class="getRandomTimelinePointClass(index)"></span>
                    <div class="timeline-event">
                        <div class="timeline-header border-bottom mb-3">
                            <!-- <h6 class="mb-0">{{log.vehicle.model}}, {{log.vehicle.brand.name}}, {{log.vehicle.type.name}}</h6> -->
                            <small class="text-muted">PHP {{log.total_amount}}</small>
                        </div>
                        <!-- <p class="mb-0">Plate Number: {{log.vehicle.plate_number}}</p>  -->
                        <!-- <p class="mb-0">Color: {{log.vehicle.color}} </p> -->
                        <!-- <p class="mb-3">Year: {{log.vehicle.year}} </p> -->
                        <div class="d-flex mt-3" style="margin-bottom: -13px">
                            <a href="javascript:void(0)" class="me-3">
                                <img
                                    src="../../../../../public/assets/img/icons8-user-60.png"
                                    alt="PDF image"
                                    width="15"
                                    class="me-2"
                                    style="width: 20px; height: 20px;"
                                />
                                <span class="fw-semibold text-heading">{{ log.mechanic_name}}</span>
                             </a>
                            <p class="badge bg-label-success">{{log.status}}</p>
                            <a 
                                @click="copyContactNumber" 
                                class="btn btn-label-secondary btn-icon"
                                style="height: 25px; width: 25px; margin-left: 10px" 
                            >
                                <i class="ti ti-phone ti-sm" style="font-size: 15px !important"></i >
                            </a>
                        </div>
                        <p class="mb-0 ml-5" style="margin-left: 25px">{{ log.mechanic_address}}</p>
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
            const contactNumber = this.data.mechanic_contact_number;
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
        }
    }
};
</script>
<style lang="">
    
</style>