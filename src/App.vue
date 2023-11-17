<template>
  
        <SideBar v-if="$route.path !=='/login' && $route.path !=='/reset-password' "></SideBar>
        <div class="main" v-else>
          <router-view></router-view>
      </div>
  
 

</template>

<script lang="ts" setup>
  //
  import NavBar from "@/components/NavBar.vue"
  import SideBar from "@/components/SideBar.vue"
</script>
<style scoped>
.side-bar{
  display: flex;
  flex-direction: row;
  
}
</style>
