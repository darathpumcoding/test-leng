<template>
  
        <Dashboard v-if="$route.path !=='/login' && $route.path !=='/reset-password' "></Dashboard>
        <div class="main" v-else>
          <router-view></router-view>
      </div>
  
 

</template>

<script lang="ts" setup>
  //
  import NavBar from "@/components/NavBar.vue"
  import Dashboard from "@/components/Dashboard.vue"
</script>
<style scoped>
.side-bar{
  display: flex;
  flex-direction: row;
  
}
</style>
