<template>
    <th
        class="sortable"
    >
    
        <slot></slot>
        <i
        class="ti ti-arrow-up"
        v-if="sortUp"
        ></i>
        <i
        class="ti ti-arrow-down"
        v-if="sortDown"
        ></i>
    </th>
</template>
<script>
    export default {
        props: ["serverQuery", "serverQueryKey"],
        computed: {
            sortUp: function(){
                return this.serverQuery.sort == this.serverQueryKey && this.serverQuery.order == 'desc'
            },
            sortDown: function(){
                return this.serverQuery.sort == this.serverQueryKey && this.serverQuery.order == 'asc'
            }
        }
    }
</script>