<template>
    <div v-if="isAddCap" class="form-add-campaign">
        <AddCampaign @formCancel="closeForm"></AddCampaign>
    </div>
    <div class="container " v-if="!isAddCap">
        <session>
            <h2>All Campaigns</h2>
            <p id="campaign-desc" class="text-center mt-5 mb-10">Here is all the campaigns that we list as a table and
                we can edit copy link and archive it.</p>
            <div class="create-campaign">
                <button id="btn-add_campaign" @click="showForm">
                    <i class="material-symbols-outlined">
                        add
                    </i>
                    Add Campaigns</button>
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
                        <td>{{ item.campaign_name }}</td>
                        <td><img width="100" src="../../assets/user_icon.png" alt=""></td>
                        <td>{{ item.start_date }}</td>
                        <td>{{ item.end_date }}</td>
                        <td>{{ item.status }}</td>
                        <td class="action-icon">
                            <div class="edit">
                                <span class="material-symbols-outlined">
                                    edit
                                </span>
                                <p>Edit</p>
                            </div>
                            <div class="copy">
                                <span class="material-symbols-outlined">
                                    content_copy
                                </span>
                                <p>Copy</p>
                            </div>
                            <div class="archive">
                                <span class="material-symbols-outlined">
                                    archive
                                </span>
                                <p>Archive</p>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </session>
        <session>
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
                        <td>{{ item.campaign_name }}</td>
                        <td><img width="100" src="../../assets/user_icon.png" alt=""></td>
                        <td>{{ item.start_date }}</td>
                        <td>{{ item.end_date }}</td>
                        <td>{{ item.status }}</td>
                        <td class="action-icon">
                            <div class="restore">
                                <span class="material-symbols-outlined">
                                    unarchive
                                </span>
                                <p>Restore</p>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </session>
    </div>
</template>
<script setup>
    import {ref, onMounted, defineProps} from "vue";
    import axios from 'axios';
    import AddCampaign from '../form/AddCampaign.vue';
    const campaigns = ref('')
    const isAddCap = ref(false);
    const showForm = () => {
        isAddCap.value = true;
    }

    const closeForm = () => {
        isAddCap.value = false;
    }

    const isShowArchieved = ref(false);

    const showArchieved = () => {
        isShowArchieved.value = true;
    }

    function closeArchieved() {
        isShowArchieved.value = false;
    }




    const getCampaigns = ()=>{
    axios.get('http://192.168.11.117:4545/campaign/getAllCampaigns', {withCredentials: true, validateStatus: () => true})
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
        font-size: 2rem;
        font-weight: 600;
        margin-top: 3%;
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
</style>