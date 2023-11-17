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
                        <p>fdjskaghudisaog</p>
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
        background: #000;
    }
    
    .nav {
        z-index: 1;
        left: 355px;
        width: calc(100% - 355px);
        position: fixed;
        height: 100px;
        /* The menu starts at the first column */
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

    p {
        color: #FFFFFF;
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

    p a{
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
background: #840484a4;

height: 300px;
width: 300px;
border-radius: 10px;

}

</style>