<template>
    <div class="page-campaign mb-10">
        <div class="mt-20 ">
            <!-- <div class="campaign-active" >
                <div class="line"></div> -->
            <h2>Active Campaigns</h2>
            <!-- <div class="line"></div>
            </div> -->
        </div>
        <div class="campaign-card">
            <div class="parent-card" v-for="item in campaigns" :key="item.id">
                <div class="name-campaign">
                    <h3>{{item.campaign_name}}</h3>

                </div>
                <div class="card-image">
                    <img :src="item.campaign_image" alt="">
                </div>
                <div class="card-action-info">
                    <div class="name-date">
                        <p>Start Date: {{ item.start_date.substring(0, 10) }}</p>
                        <p>End Date: {{ item.end_date.substring(0, 10) }}</p>
                    </div>
                    <div class="action flex flex-row items-center">
                        <span class="material-symbols-outlined">
                            visibility
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <router-link to="/campaigns">
            <div class="see-more">
                <p>View All</p>
            </div>
        </router-link>
    </div>

</template>
<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';

    const campaigns = ref('')

    const getCampaigns = () => {
        axios.get('http://192.168.11.116:4545/campaign/getAllCampaigns', {withCredentials: true, validateStatus: () => true})
            .then(res => {
                console.log(res.data.data);
                campaigns.value = res.data.data.data
            }).catch(err => {
                console.error(err.response.status)
            })
    }

    onMounted(() => {
        getCampaigns();
    })
</script>
<style scoped>
    h2 {
        margin: auto;
        color: #00953A;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 20%;
        padding: 1rem;
        font-size: 1.7rem;
        font-weight: bold;
        margin-top: 50px;
    }

    .campaign-card {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 40px;
    }

    .campaign-active {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        align-items: center;
    }

    .campaign-card .parent-card {

        flex-wrap: wrap;
        height: 330px;
        width: 300px !important;
        margin: 15px;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        border: 2px solid #ffffff00;
        margin-bottom: 60px;
        margin-right: 40px;
    }

    .campaign-card:hover .parent-card:hover {
        background: #F4C300;
    }

    .name-campaign {
        background: #00953A;
        color: #fffffe;
        padding: 0.5rem;
        font-size: 1.5rem;
        text-align: center;
    }

    .card-image {
        display: flex;
        flex-direction: row;
        justify-content: center;

    }

    .card-image img {
        height: 200px;
        width: 100%;
    }

    .card-action-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        background: #00953A;
        width: 100%;
    }

    .action .material-symbols-outlined {
        font-size: 1.6rem;
        color: #ffffff;
        transition: all 0.5s;

    }

    .action .material-symbols-outlined {
        color: #ffffff;
        margin-right: 0.5rem;
        font-size: 3.5rem;
    }

    .action .material-symbols-outlined:hover {
        cursor: pointer;
        color: #F4C300;
        transition: all 0.5s;

    }

    .name-date p {
        font-size: 1rem;
        margin-bottom: 5px;
        color: #fffffe;
    }

    .name-date h3 {
        font-size: 1.5rem;
        margin-bottom: 5px;
        color: #fffffe;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .see-more {
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* margin-right: 45px; */
    }

    .line {
        border: 1px solid #000000;
        height: 2px;
        width: 45%;
    }

    .see-more p {
        background: #F4C300;
        width: 150px;
        text-align: center;
        font-size: 1rem;
        font-weight: bold;
        color: #00953A;
        transition: all 1s;
        padding: 0.5rem;
    }

    .see-more p:hover {
        background: #00953A;
        color: #fffffe;
        transition: all 1s;
    }

    .page-campaign a {
        text-decoration: none;
    }

    @media (max-width:1080px) {
        h2 {
            font-size: 1rem;
            width: 30%;
            margin-left: 10px;

        }

        hr {
            margin-left: 10px;
        }

        .campaign-card .parent-card {
            height: 258px;
            width: 245px !important;
            margin-top: 0px;
            margin-bottom: 55px;
        }

        .card-image img {
            height: 150px;
            width: 100%;
        }

        .name-campaign h3 {
            font-size: 1rem;
        }

        .card-action-info .name-date p {
            font-size: 0.8rem !important;
            width: 140px;
        }

        .action .material-symbols-outlined {
            font-size: 2rem;
        }

        h2 {
            margin-top: -40px;
            font-size: 1.5rem;
        }
    }
</style>