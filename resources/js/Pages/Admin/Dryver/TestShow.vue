<script setup>
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue'
// import { defineOptions } from "vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";

const props = usePage().props;

const params = computed(() => {
    return props.params;
})

const rescueLogs = computed(() => {
    return props.data['rescue_logs']
}) 

const driveLogs = computed(() => {
    return props.data['drive_logs']
}) 

const repairLogs = computed(() => {
    return props.data['repairs']
}) 


// defineOptions({ layout: AdminLayout });

</script>
<template>
    <div v-if="params.type == 'rescue_logs'">
        {{ rescueLogs }}
    </div>
    
    <div v-if="params.type == 'drive_logs'">
        {{ driveLogs }}
    </div>
    <div v-if="params.type == 'repairs'">
        {{ repairLogs }}
    </div>
</template>