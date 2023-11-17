<template>
  
        <SideBar></SideBar>
        <!-- <div class="side-bar">
          <Dashboard></Dashboard>
          <div style="width: 100%;">
            <NavBar></NavBar>

            <router-view></router-view>
          </div>

        </div> -->
    
  
 

</template>

<script lang="ts" setup>
  //
  import NavBar from "@/components/NavBar.vue"
  import Dashboard from "@/components/Dashboard.vue"
  import SideBar from "@/components/SideBar.vue"
</script>
<style scoped>
.side-bar{
  display: flex;
  flex-direction: row;
  
}
</style>
