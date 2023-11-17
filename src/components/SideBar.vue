<template>
    <div class="grid-container">
        <div class="dashboard green sidebar-left">
            <router-link to="/"><img src="../assets/smart-logo.png" alt=""></router-link>
            <hr width="90%" style="margin: auto; margin-bottom: 10%;">
    
            <router-link class="manage-user active" to="/manage-user">
                <span class="material-symbols-outlined">
                    person
                </span>
             
                <p>Manage users</p>
            </router-link>
            <router-link class="campaigns active" to="/campaigns">
                <span class="material-symbols-outlined">
                    brand_awareness
                </span>
                <p>Campmaigns</p>

                <!-- <p>Campmaigns</p> -->
            </router-link>
            <router-link class="prizes active" to="/prizes">
                <span class="material-symbols-outlined">
                    rewarded_ads
                    </span>
                <!-- <p>Prizes</p> -->
                <p>Prizes</p>

            </router-link>
            <router-link class="reports active" to="/reports">
                <span class="material-symbols-outlined">
                    report
                    </span>
                <!-- <p>Reports</p> -->
                <p>Reports</p>

            </router-link>
        </div>
        <div class="nav green">
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
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

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
        z-index: 1;
        position: fixed;
        height: 100vh;
        width: 350px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    }
    
    .nav {
        z-index: 1;
        left: 355px;
        width: calc(100% - 355px);
        position: fixed;
        height: 100px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        /* The menu starts at the first column */
    }
    .nav p{
        color: white;
    }
    .active p {
        color: white;
        font-size: 1.7rem;
    }
    .router-link-active{
        background: #fdfdfd;
        text-decoration: none;
        color: #04841C;
    }
    .router-link-active p{
        color: #04841C;
    }
    .main {
        position: absolute;
        left: 400px;
        width: calc(100% - 355px);
        padding-top: 130px;
        grid-column: 2 / 7;
        grid-row: 2 / 100;

    }
/* ========================================================== */
 

    .dashboard img {
        margin: auto;
        display: flex;
        width: 60%;
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
    .dashboard .active .material-symbols-outlined{
        color: orange;
        font-weight: 600;
        font-size: 3rem;
        margin-right: 1rem;
        margin-left: 1rem;
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

</style>