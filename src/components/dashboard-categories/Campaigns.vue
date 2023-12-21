<template>
    <div v-if="isAddCap && !isUpdateCap" class="form-add-campaign">
        <AddCampaign @formCancel="closeForm"></AddCampaign>
    </div>
    <div v-if="isUpdateCap" class="form-update-campaign">
        <UpdateCampaign @formCancel="closeForm" :campaign="campaign" :getCampaigns="getCampaigns"></UpdateCampaign>
    </div>
    <div class="container " v-if="!isAddCap && !isUpdateCap">
        <section>
            <h2>All Campaigns</h2>
            <p id="campaign-desc" class="text-center mt-5 mb-10">Here is all the campaigns that we list as a table and
                we can edit copy link and archive it.</p>
            <div class="create-campaign">
                <BaseButton type="primary-btn" class="text-white pt-2 pb-8 " @click="showForm">
                    <i class="material-symbols-outlined">
                        add
                    </i>
                    Add Campaigns
                </BaseButton>
            </div>
            <table class="all-campaigns">
                <thead>
                    <tr>
                        <th>Campaign Name</th>
                        <th>Background</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in campaigns" :key="item.id">
                        <td v-if="item.archive_campaign == false">{{ item.campaign_name }}</td>
                        <td v-if="item.archive_campaign == false"><img class="image-campaign" :src="item.campaign_image"
                                alt=""></td>
                        <td v-if="item.archive_campaign == false">{{ item.start_date.substring(0, 10) }}</td>
                        <td v-if="item.archive_campaign == false">{{ item.end_date.substring(0, 10) }}</td>
                        <td v-if="!item.archive_campaign && isExpired(item)">Expired</td>
                        <td v-if="!item.archive_campaign && isActive(item)">Active</td>
                        <td v-if="!item.archive_campaign && isUpcoming(item)">Upcoming</td>

                        <td v-if="item.archive_campaign == false" class="action-icon">
                            <div class="edit" @click="editCampaign(item.id)">


                                <!-- <AddCampaign "> -->
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                                <p>Edit</p>
                                <!-- </AddCampaign> -->
                            </div>

                            <div class="copy">
                                <span class="material-symbols-outlined">
                                    content_copy
                                </span>
                                <p>Copy</p>
                            </div>
                            <ArchiveCampaign :campaignId="item.id" :getCampaigns="getCampaigns"></ArchiveCampaign>
                            <!-- <div class="archive" @click="archiveCampaign(item.id)">
                                <span class="material-symbols-outlined">
                                    archive
                                </span>
                                <p>Archive</p>
                            </div> -->
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>
        <section>
            <h2 class="archieved" v-if="!isShowArchieved" @click="showArchieved">
                <span class="material-symbols-outlined">arrow_drop_down</span>
                Archived Campaigns
            </h2>
            <h2 v-else @click="closeArchieved" class="archieved">
                <span class="material-symbols-outlined">arrow_drop_up</span>Archived Campaigns
            </h2>
            <table :class="isShowArchieved == true ? 'archieved-campaign':'archieved-campaign archieved-none'">
                <thead>
                    <tr>
                        <th>Campaign Name</th>
                        <th>Background</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in campaigns" :key="item.id">
                        <td v-if="item.archive_campaign">{{ item.campaign_name }}</td>
                        <td v-if="item.archive_campaign"><img class="image-campaign" :src="item.campaign_image" alt="">
                        </td>
                        <td v-if="item.archive_campaign">{{ item.start_date.substring(0, 10) }}</td>
                        <td v-if="item.archive_campaign">{{ item.end_date.substring(0, 10) }}</td>
                        <td v-if="item.archive_campaign">{{ item.status }}</td>
                        <td v-if="item.archive_campaign" class="action-icon">

                            <UnArchiveCampaign :campaignId="item.id" :getCampaigns="getCampaigns"></UnArchiveCampaign>
                            <!-- <div class="restore" @click="unArchiveCampaign(item.id)">
                                <span class="material-symbols-outlined">
                                    unarchive
                                </span>
                                <p>Restore</p>
                            </div> -->
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>
    </div>
</template>
<script setup>
    import {ref, onMounted, defineProps, computed,defineExpose} from "vue";
    import axios from 'axios';
    import AddCampaign from '../form/AddCampaign.vue';
    import UpdateCampaign from '../form/UpdateCampaign.vue';
    import ArchiveCampaign from "../dialog/ArchiveCampaign.vue";
    import UnArchiveCampaign from "../dialog/UnArchiveCampaign.vue";
    import BaseButton from "../widget/BaseButton.vue";
    import {useRouter} from "vue-router";

    const router = useRouter();


    const campaigns = ref('')
    const isAddCap = ref(false);
    const isUpdateCap = ref(false);
    const campaign_name = ref('');
    const campaign_image = ref('');
    const start_date = ref('');
    const end_date = ref('');
    const participant = ref('');
    const prize_id = ref('');
    const quantity = ref('');
    const participantsFile = ref('');


    const showForm = () => {
        isAddCap.value = true;
        // isUpdateCap.value = true;
    }

    const closeForm = () => {
        isAddCap.value = false;
        isUpdateCap.value = false;
    }

    const isShowArchieved = ref(false);

    const showArchieved = () => {
        isShowArchieved.value = true;
    }

    function closeArchieved() {
        isShowArchieved.value = false;
    }

    const campaign = ref('')
    const editCampaign = (campaignId) => {
        campaign.value = campaigns.value.find(item => item.id === campaignId);
        console.log(campaign.value);
        isUpdateCap.value = true;
        isAddCap.value = false;

        // axios.put(`http://192.168.11.117:4545/campaign/updateCampaign/${id}`,{archive_campaign:false} ,{withCredentials: true, validateStatus: () => true})
        // .then((res)=>{
        //     if (res.status == 200){
        //         console.log(res.data);
        //         getCampaigns();
        //     }
        // }).catch((err)=>{
        //     console.error(err);
        // })

    }


    const isExpired = (item) => {
        const today = new Date();
        const endDate = new Date(item.end_date);
        return today > endDate;
    };

    const isActive = (item) => {
        const today = new Date();
        const startDate = new Date(item.start_date);
        const endDate = new Date(item.end_date);
        return today >= startDate && today <= endDate;
    };

    const isUpcoming = (item) => {
        const today = new Date();
        const startDate = new Date(item.start_date);
        return today < startDate;
    };

    const getCampaigns = () => {
        axios.get('http://192.168.11.116:4545/campaign/getAllCampaigns', {withCredentials: true, validateStatus: () => true})
            .then(res => {
                console.log(res.data.data);
                campaigns.value = res.data.data.data
            }).catch(err => {
     
            })
    }

    onMounted(() => {
        getCampaigns(); 
        isAddCap.value = router.currentRoute.value.query.isAddCap === 'true';
        console.log(isActive.value);
    });
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .archieved {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .archieved .material-symbols-outlined {
        font-size: 2rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 0%;
        margin-top: 3%;
        font-size: 2rem;
        font-weight: 600;
    }

    .image-campaign {
        width: 100px;
    }

    .create-campaign {
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 10px;

    }

    #btn-add_campaign {
        background-color: green;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        padding: 0.5rem;


    }

    /* .all-campaigns{
        width: 500px;
    } */

    table {
        border-collapse: collapse;
        margin-top: 40px;
        margin-bottom: 50px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 3px;
    }

    th,
    td {
        border: 1px solid white;
    }

    thead th {
        width: 300px;
    }

    tr td:nth-child(2) img {
        margin: auto;
    }

    .all-campaigns thead th {
        background-color: rgb(18, 142, 18);
        color: white;
        padding: 10px;
    }

    .archieved-campaign thead th {
        background-color: gray;
        color: white;
        padding: 10px;
    }

    .archieved-campaign {
        opacity: 1;
        transition: all 0.1s;
    }

    .archieved-none {
        opacity: 0;
        transition: all 0.1s;
    }



    tbody td {
        padding: 10px;
    }

    .id {
        width: 5%;
    }

    tr:nth-child(even) {
        background-color: #ece9e9;
    }

    tr:nth-child(odd) {
        background-color: #d5dcda;
    }

    .action-icon {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 130px;
    }

    .action-icon div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        transition: all 0.5s;
    }

    .action-icon div:hover {
        background: #44404046;
        padding: 0.5rem;
        transition: all 0.5s;
        cursor: pointer;
    }

    @media (max-width:1080px) {

        th,
        td {
            font-size: 0.9rem;
            /* background: #000; */
        }

        td {
            height: 80px !important;
        }

        .image-campaign {
            width: 50px;
        }

    }
</style>