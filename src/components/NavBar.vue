<template>
    <div class="nav-bar">
        <div class="nav-left">
            <h2>Dashboard</h2>
        </div>
        <div class="nav-center">
            <h2>Home</h2>
        </div>
        <div class="nav-right">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-account-circle-outline" class="btn"  v-bind="props"></v-btn>
                </template>
                <div class="dialog">
                    <p>fdjskaghudisaog</p>
                </div>
            </v-menu>
        </div>
    </div>
  
</template>
<script setup>
//   import Dashboard from "./Dashboard.vue"

</script>
<style scoped>

.nav-bar{

    
    display: flex;
    flex-direction: row;
    background: #04841C;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
       
}
h2{
    color: white;
}
.dialog{
background: #840484a4;

    height: 300px;
    width: 300px;
    border-radius: 10px;
    
}

</style>