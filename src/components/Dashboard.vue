<template>

        <div class="sidebar-left">
            <img src="../assets/smart-logo.png" alt="" width="70%">
            <hr width="90%" style="margin: auto; margin-bottom: 10%;">
    
            <div class="manage-user">
                <span class="material-symbols-outlined">
                    person
                </span>
                <router-link to="/manage-user">Manage users</router-link>
            </div>
            <div class="campaigns">
                <span class="material-symbols-outlined">
                    brand_awareness
                </span>
                <!-- <h2>Campmaigns</h2> -->
                <!-- <router-link to="/campmaign">Campmaigns</router-link> -->

            </div>
            <div class="prizes">
                <span class="material-symbols-outlined">
                    rewarded_ads
                    </span>
                <!-- <h2>Prizes</h2> -->
                <!-- <router-link to="/prize">Prizes</router-link> -->

            </div>
            <div class="reports">
                <span class="material-symbols-outlined">
                    report
                    </span>
                <!-- <h2>Reports</h2> -->
                <!-- <router-link to="/report">Reports</router-link>       -->
            </div>
        </div>
    
    
</template>

<script setup> </script>

<style scoped>
  
    .sidebar-left {
        /* position: absolute;
        top: 2;
        left: 0; */

        /* position: fixed; */
        background: #04841C;
        width: 400px;
        height: 100vh;
    }

    .sidebar-left img {
        margin: auto;
        display: flex;
    }

    h2 {
        color: #FFFFFF;
    }

    .sidebar-left div {
        margin-bottom: 10%;
        margin-left: 5%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .sidebar-left div .material-symbols-outlined{
        color: orange;
        font-weight: 600;
        font-size: 3rem;
        margin-right: 1rem;
    }
  
</style>