<template>
  
  <Dashboard v-if="$route.path !=='/login' && $route.path !=='/reset-password'  && $route.path !=='/addUser' "></Dashboard>
  <div class="main two" v-else>
    <router-view></router-view>
</div>



</template>

<script lang="ts" setup>
//
import Dashboard from "@/components/Dashboard.vue"
</script>
<style scoped>

</style>
