<template>
    <div class="grid-container">
        <div :class="show == true ? 'dashboard green sidebar-left':'dashboard green sidebar-left-dialog'">
            <span id="menu" v-if="!show" class="material-symbols-outlined text-white" @click="swhowSideBar">menu</span>
            <span v-else class="material-symbols-outlined w-100 text-start pl-5 close"
                @click="blockSideBar">close</span>
            <router-link to="/" v-if="show"><img src="../assets/smart-logo.png" alt=""></router-link>
            <hr width="90%" style="margin: auto; margin-top: 18px; border: 2px solid white; width: 100%;">
            <router-link :class="show == true ? 'manage-user active mt-16':'active icon'" to="/manage-user">
                <span class="material-symbols-outlined dashboard-categorires-icon">person</span>
                <p v-if="show">Manage users</p>
            </router-link>
            <router-link :class="show == true ? 'compaigns active':'active icon'" to="/campaigns">
                <span class="material-symbols-outlined">brand_awareness</span>
                <p v-if="show">Campaigns</p>
            </router-link>
            <router-link :class="show == true ? 'prizes active':'active icon'" to="/prizes">
                <span class="material-symbols-outlined dashboard-categorires-icon">rewarded_ads</span>
                <p v-if="show">Prizes</p>
            </router-link>
            <router-link :class="show == true ? 'reports active':'active icon'" to="/reports">
                <span class="material-symbols-outlined dashboard-categorires-icon">report</span>
                <p v-if="show">Reports</p>
            </router-link>
        </div>
        <div class="nav green" :class="show == true ? 'nav green':'nav green nav-two'">
            <div class="nav-left">
                <router-link to="/" v-if="show== false"><img src="../assets/smart-logo.png" alt=""></router-link>
            </div>
            <div class="nav-center">
                <p>Smart Lucky Draw</p>
            </div>
            <div class="nav-right">
                <span class="user-name">{{cookieFirstName}}</span>
                <DialogProfile></DialogProfile>
              
            </div>
        </div>
        <div :class="show == true ? 'main-expand' :'main-collapse' ">
            <router-view></router-view>
        </div>

    </div>
</template>
<script setup>
    import {ref} from 'vue';
    import Cookies from "js-cookie";
    import DialogProfile from './auth/DialogProfile.vue';

    const cookieFirstName = ref(Cookies.get('first_name'));
    const show = ref(false);
    const swhowSideBar = () => {
        show.value = true;
    }
    const blockSideBar = () => {
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
        background-color: 	#00953A;
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }


    .dashboard {
        background-color: 	#00953A;
        z-index: 1;
        position: fixed;
        height: 100vh;
        width: 320px;
        transition: all 0.5s;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .sidebar-left-dialog {
        width: 100px;
    }

    .sidebar-left-dialog .material-symbols-outlined {
        font-size: 2rem;
        cursor: pointer;
    }

    .close {
        font-size: 2rem;
        color: white;
        cursor: pointer;
    }

    .nav {
        z-index: 1;
        left: 325px;
        width: calc(100% - 325px);
        position: fixed;
        height: 100px;
        transition: all 0.5s;
        display: flex;
        justify-content: space-between;

        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        /* The menu starts at the first column */
    }
    .nav-left{
        width: 10%;
    }
    .nav-left img {
        width: 90%;
    }

    .nav-two {
        left: 105px;
        width: calc(100% - 105px);
    }

    .nav p {
        color: rgb(255, 255, 255);

    }

    .icon .material-symbols-outlined {
        margin: 30px 0 30px 0;
    }

    .active  {
        color: white;
        text-align: start;
        font-size: 1.7rem;
        white-space: nowrap; 
        width: 180px; 
        overflow: hidden;
        text-overflow: ellipsis; 
        transition: 0.5s;
        /* background: #000; */
}



    .active .material-symbols-outlined {
        color: white;
        font-weight: 600;
        font-size: 3rem;
        margin-right: 1rem;
        transition: all 0.5s;
        margin-left: 1rem;
    }
    .active:hover p,
    .active:hover .material-symbols-outlined {
        color: #F4C300;
    }

    .router-link-active p,
    .router-link-active .material-symbols-outlined {
        color: #F4C300;
    }

    .main-expand {
        position: absolute;
        left: 370px;
        width: calc(100% - 420px);
        padding-top: 130px;
        transition: all 0.5s;
        height: 100vh;


    }

    .main-collapse {
        position: absolute;
        left: 150px;
        width: calc(100% - 200px);
        padding-top: 130px;
        transition: all 0.5s;
        height: 100vh;

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
        transform: 0.5s;
        width: 350px;
    }

    .active p a {
        color: white;
        text-decoration: none;
    }
    .dashboard .icon{
        width: 100px;

    }
    /* =============================================================== */

    .nav {


        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;

    }

    h2 {
        color: white;
    }

    .nav-left {
        margin-left: 30px;
    }

    .nav-right {
        width: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        /* background: #000; */
        margin-right: 30px;
    }
    .user-name{
        margin-right: 1rem;
        color:#ffff;
        font-size: 1.5rem;
        opacity: 1;
    }
    .dialog {
        background: 	#00953A;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        height: 300px;
        width: 300px;
        border-radius: 10px;
    }
    .dialog a {
        padding: 30px;
        display: flex;
        flex-direction: row;
        text-decoration: none;
        align-items: center;
    }

    .dialog a:hover {
        background: #000;
    }

    .dialog a span {
        margin-right: 20px;
        font-size: 2rem;
        color: white;

    }

    .dialog a p {
        font-size: 1.5rem;
        color: white;

    }

    #menu {
        font-size: 3rem;

    }

    @media (max-width:1080px) {
        .active p {
            font-size: 1.2rem;
        }
        .nav p {
            font-size: 1.2rem;
            transition: 0.5s;
        }
    }
</style>