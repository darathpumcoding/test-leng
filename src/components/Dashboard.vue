<template>
    <div class="grid-container">
        <div :class="show == true ? 'dashboard green sidebar-left':'dashboard green sidebar-left-dialog'">
            <span id="menu" v-if="!show" class="material-symbols-outlined text-white" @click="swhowSideBar">menu</span>
            <span v-else class="material-symbols-outlined w-100 text-start pl-5 close" @click="blockSideBar">close</span>
            <router-link to="/" v-if="show"><img src="../assets/smart-logo.png" alt=""></router-link>
            <hr width="90%" style="margin: auto; margin-bottom: 10%;">
            <router-link :class="show == true ? 'manage-user active':'active icon'" to="/manage-user">
                <span class="material-symbols-outlined">person</span>
                <p v-if="show">Manage users</p>
            </router-link>
            <router-link :class="show == true ? 'compaigns active':'active icon'" to="/campaigns">
                <span class="material-symbols-outlined">brand_awareness</span>
                <p v-if="show">Campmaigns</p>
            </router-link>
            <router-link :class="show == true ? 'prizes active':'active icon'" to="/prizes">
                <span class="material-symbols-outlined">rewarded_ads</span>
                <p v-if="show">Prizes</p>
            </router-link>
            <router-link :class="show == true ? 'reports active':'active icon'" to="/reports">
                <span class="material-symbols-outlined">report</span>
                <p v-if="show">Reports</p>
            </router-link>
        </div>
        <div class="nav green" :class="show == true ? 'nav green':'nav green nav-two'">
            <div class="nav-left">
                <p>Dashboard</p>
            </div>
            <div class="nav-center">
                <p>Home</p>
            </div>
            <div class="nav-right">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon="mdi-account-circle-outline" class="btn"  v-bind="props"></v-btn>
                    </template>
                    <div class="dialog">
                        <router-link to="/login">
                            <span class="material-symbols-outlined">
                                login
                                </span>
                            <p>Login Account</p>
                        </router-link>
                    </div>
                </v-menu>
            </div>
        </div>
        <div :class="show == true ? 'main' :'main two' ">
            <router-view></router-view>
        </div>

    </div>
</template>
<script setup>
    import {ref} from 'vue';
    const show = ref(false);
    const swhowSideBar = ()=>{
        show.value = true;
    }
    const blockSideBar = ()=>{
        show.value = false;
    }
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        /* Define 6 columns with equal width */
        grid-template-rows: auto auto auto;
        /* Define 3 rows with auto height */
        gap: 10px;
        /* padding: 10px; */
    }

    .grid-container>.green {
        background-color: #04841C;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
  

    .dashboard {
        background-color: #04841C;
        z-index: 1;
        position: fixed;
        height: 100vh;
        width: 350px;
        transition: all 0.5s;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    
    }
        .sidebar-left-dialog{
    width: 100px;
    }
    .sidebar-left-dialog .material-symbols-outlined{
        font-size: 2rem;
        cursor: pointer;
    }
    .close{
        font-size: 2rem;
        color: white;
        cursor: pointer;
    }
    .nav {
        z-index: 1;
        left: 355px;
        width: calc(100% - 355px);
        position: fixed;
        height: 100px;
        transition: all 0.5s;

        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        /* The menu starts at the first column */
    }
    
    .nav-two{
        left: 105px;
        width: calc(100% - 105px
        );
    }
    .nav p{
        color: rgb(255, 255, 255);

    }
    .icon .material-symbols-outlined{
        margin: 30px 0 30px 0;
    }
    .active p {
        color: white;
        font-size: 1.7rem;
        /* transition: 5s; */

    }
    .active .material-symbols-outlined{
        color: rgb(255, 255, 255);
        font-weight: 600;
        font-size: 3rem;
        margin-right: 1rem;
        /* transition: all 0.5s; */
        margin-left: 1rem;
    }
    .router-link-active{
        background: #fdfdfd;
        text-decoration: none;
        color: #04841C;
    }
    .router-link-active p, .router-link-active .material-symbols-outlined{
        color: #04841C;
    }
 

    .main {
        position: absolute;
        left: 400px;
        width: calc(100% - 355px);
        padding-top: 130px;
        grid-column: 2 / 7;
        grid-row: 2 / 100;
        transition: all 0.5s;

    }
    .two{
        left: 250px;
        width: calc(100% - 355px);
    }
/* ========================================================== */
 

    .dashboard img {
        margin-top: -50px;
        display: flex;
        text-align: center;
        margin-left: 80px;
        width: 200px;


    }

   

    .dashboard .active {
        margin-bottom: 10%;
        padding-left: 5%;
        padding: 5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;

    }
    
    .active p a{
        color: white;
        text-decoration: none;
    }

    /* =============================================================== */

    .nav{

    
        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;
        
    }
h2{
    color: white;
}
.nav-left{
    margin-left: 30px;
}
.nav-right{
    margin-right: 30px;
}
.dialog{
background: #04841C;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
height: 300px;
width: 300px;
border-radius: 10px;

}
.dialog a{
    padding:30px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    align-items: center;
}
.dialog a:hover{
    background: #000;
}
.dialog a span{
    margin-right: 20px;
    font-size: 2rem;
    color: white;
    
}
.dialog a p{
    font-size: 1.5rem;
    color: white;
    
}

#menu{
        font-size: 3rem;
        
    }
@media (max-width:1080px) {
        .dashboard{
            width: 250px;
        }
        .nav{
            left: 255px;
            width: calc(100% - 250px);
        }
        .main{
            left: 305px;
            width: calc(100% - 305px);
        }
        .active p{
            font-size: 1.2rem;
        }
        .nav p{
            font-size: 1.2rem;
            transition: 0.5s;
        }
    }
  
</style>