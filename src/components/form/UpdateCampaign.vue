<template>
    <div class="update-campaign">
        <h2>Update Campaign</h2>
        <p class="desc">This page we can see all informations about campaign that we can update somthing on it. </p>
        <h3>Campaign Details</h3>
        <form action="" ref="form">
            <div class="input-g1">
                <div>
                    <label for="">Campaign Name: <span class="text-red" v-if="pathName == 'campaign_name'">{{invalidMessage}}.</span></label>
                    <input type="text" id="campaign-name" class="resize-none focus:outline-none"  :style="pathName == 'campaign_name'? 'border:2px solid red':''"
                        placeholder="Campaign Name*" v-model="campaign_name">
                    <span v-if="pathName == 'fileCsv'">{{invalidMessage}}</span>
                    <label for="">Start Date: <span class="text-red" v-if="pathName == 'start_date'">{{invalidMessage}}.</span></label>
                    <input type="date" id="start-date" class="resize-none focus:outline-none" v-model="start_date" :style="pathName == 'start_date'? 'border:2px solid red':''">
                </div>
                <div>
                    <label for="">Participant:  <span class="text-red" v-if="pathName == 'participant'">{{invalidMessage}}.</span></label>
                    <!-- <input type="file" 
                        v-on:change="handleFileCampaignImage"> -->
                        <input name="participants" id="participants" class="resize-none focus:outline-none" type="file" :style="pathName == 'participant'? 'border:2px solid red':''"
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        @change="handleFileParticipants">
                        <label for="">End Date: <span class="text-red"  v-if="pathName == 'end_date'">{{invalidMessage}}.</span></label>
                        <input type="date" id="end-date" class="resize-none focus:outline-none" v-model="end_date" :style="pathName == 'end_date'? 'border:2px solid red':''">
                    </div>
                </div>
                <div class="input-g2">
                    <label for="">Background Campaign: <span class="text-red" v-if="pathName == 'campaign_image'">{{invalidMessage}}.</span></label>
                    <input v-if="closeImage" type="file" id="bg-campaign" v-on:change="handleFileCampaignImage">
                    <div v-if="closeImage" class="icon-selec-file" :style="pathName == 'campaign_image'? 'border:2px solid red':''">
                        <span class="material-symbols-outlined">
                            add_circle
                        </span>
                    </div>
                    <div @click="closeImg" v-if="closeImage == false" class="image-show">
                        <img :src="campaign_image" alt=""  class="p-5" width="200">
                    </div>
                </div>
        </form>
        <h3>Prizes Pool</h3>
        <table>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Used Quantity</th>
                <th>Action</th>
            </tr>
            <tr v-for="(prize, index) in prizeInCampaigns" :key="index">
                <td>
                    <select id="prizes" class="resize-none focus:outline-none" name="list of prizes"
                        v-model="prize.prize_id">
                        <option v-for="item in prizes" :key="item.id" :value="item.id">
                            {{item.english_name}}({{item.khmer_name}})</option>
                    </select>
                </td>
                <td><input id="number-prize" type="number" placeholder="15" v-model="prize.quantity"></td>
                <td>{{prize.used_quantity}}</td>
                <td >
                    <v-dialog transition="dialog-bottom-transition" width="auto">
                        <template v-slot:activator="{ props }">
                            <div id="action-prize" v-bind="props">
                                <span class="material-symbols-outlined">
                               delete
                           </span> <span>Delete</span>
                           </div>
                            
                        </template>
                        <template v-slot:default="{ isActive }">
                            <div class="delete-prize">
                                <img src="../../assets/smart-logo2.png" alt="">
                                <h1 class="dialog-title pb-10 pt-2 text-center">Do you want to delete this prize from campaign?</h1>
                                <div class="d-flex flex-row justify-between ml-20 mr-20">
                                    <BaseButton type="secondary-btn" class="btn-login text-white mr-5" @click="isActive.value = false">
                                        No</BaseButton>
                                    <BaseButton type="primary-btn"  @click="deletePrizeInCampaigns(campaign.id,prize.prize_id)" class="btn-login text-white ml-5" :loading="loading">
                                        Yes</BaseButton>
                                </div>
                            </div>
                            
                        </template>
                    </v-dialog>
                    
                    </td>
            </tr>
        </table>
        <button id="add-prize-row" @click="addColumn"><span class="material-symbols-outlined">
                add_circle
            </span></button>
        <div id="update-campaign-action">
            <BaseButton type="secondary-btn" class="btn-login text-white mr-5" @click="cancelAddCampaign">Cancel</BaseButton>
            <BaseButton  type="primary-btn" class="btn-login text-white ml-5" @click="updateCampaign" :loading="loading">Submit</BaseButton>
        </div>
    </div>
 
</template>
<script setup>
    import {defineProps, defineEmits, ref,inject, onMounted} from 'vue';
    import axios from 'axios';
    import {useRouter} from 'vue-router';
    import BaseButton from "../widget/BaseButton.vue";

    import {validateCampaignName, validateFile, validateDate,validateImage} from "../../validation";

    const router = useRouter();
    const form = ref('form');
    const invalidMessage = ref('');
    const pathName = ref('');
    const loading = ref(false);

    const props = defineProps(["form","campaign","getCampaigns"]);
    const emit = defineEmits(['formCancel']);

    const campaign_name = ref(props.campaign.campaign_name);
    const campaign_image = ref(props.campaign.campaign_image);
    const start_date = ref(props.campaign.start_date.substring(0, 10));
    const end_date = ref(props.campaign.end_date.substring(0,10));
    const participant = ref('');
    const prize_id = ref('');
    const quantity = ref('');
    const participantsFile = ref('');
    const prizeInCampaigns = ref([]);


    const closeImage = ref(false);



    const cancelAddCampaign = () => {
        emit('formCancel');
        props.form = false;
    };

    const showImg = () => {
        closeImage.value = false;
    }
    
    const closeImg = () => {
        closeImage.value = true;
    }
  


    async function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


    const handleFileCampaignImage = async (event) => {
        const file = (event.target.files[0]);
        campaign_image.value = file;
        const errImage = validateImage(campaign_image.value);
        if (errImage) {
            pathName.value = 'campaign_image';
            invalidMessage.value = errImage;
        }else{
            campaign_image.value = await getBase64(campaign_image.value);
            pathName.value = '';
            closeImage.value = false;
        }
    }

    const handleFileParticipants = (event) => {
        const file = event.target.files[0];
        participantsFile.value = file;
    };

    const prizes = ref('');

    // getPrzes
    const getPrizes = () => {
        axios.get('http://192.168.11.116:4545/prize/getAllPrizes', {withCredentials: true, validateStatus: () => true})
            .then(res => {
                // console.log(res.data.data.data);
                prizes.value = res.data.data.data
            }).catch(err => {
                console.error(err.response.status)
            })
    }
    const getDetailsOfCampaigns = () =>{
        console.log({campaign_id:props.campaign.id});
        axios.get(`http://192.168.11.116:4545/campaign/getDetailsOfCampaigns/${props.campaign.id}`,{withCredentials: true, validateStatus: () => true})
        .then(res=>{
            if ( res.status == 200){
                prizeInCampaigns.value = res.data.data.data.campaignPrize;
            }
        }).catch(err=>{
            console.error(err);
        })
    }

    onMounted(() => {
        getPrizes();
        getDetailsOfCampaigns()
    })
    const updateCampaign = async () => {
        const errCampaignName = validateCampaignName(campaign_name.value);
        const errParticipant = validateFile(participantsFile.value);
        const errStartDate = validateDate(start_date.value);
        const errEndDate = validateDate(end_date.value);
        if (errCampaignName) {
            pathName.value = 'campaign_name';
            invalidMessage.value = errCampaignName;
            return;
        }if (errParticipant) {
            pathName.value = 'participant';
            invalidMessage.value = errParticipant;
            return;
        }if (errStartDate) {
            pathName.value = 'start_date';
            invalidMessage.value = errStartDate;
            return;
        }if (errEndDate) {
            pathName.value = 'end_date';
            invalidMessage.value = errEndDate;
            return;
        } 

        const formData = new FormData();
        formData.set('campaign_name', campaign_name.value);
        formData.set('campaign_image', campaign_image.value);
        formData.set('start_date', start_date.value);
        formData.set('end_date', end_date.value);
        formData.set('participants', participantsFile.value);
        formData.set('prizes',JSON.stringify(prizeInCampaigns.value))

        // console.log(formData);
        loading.value = true;
        axios.put(`http://192.168.11.116:4545/campaign/updateCampaign/${props.campaign.id}`,formData, {withCredentials: true, validateStatus: () => true})
        .then((res) =>{
            if (res.status == 200){
                props.getCampaigns();
                cancelAddCampaign();
                loading.value = false;
            }else{
                loading.value = false;
            }

        }).catch((err) =>{
            loading.value = false;
            console.error(err);
        });

    }
  
    const addColumn = () => {
        prizeInCampaigns.value.push({prize_id: prizes.value[0].id, quantity: 0});
        // // arrPrzes.value = [...arrPrzes.value, {prize_id: prizes.value[0].id, quantity: 0}];
        // console.log(prizeInCampaigns);
        return;
    }

    const deletePrizeInCampaigns = (campaignId,prizeId) =>{
        axios.delete(`http://192.168.11.116:4545/campaign/deleteCampaignPrize/${campaignId}/${prizeId}`, {withCredentials: true, validateStatus: () => true})
        .then((res) =>{
            if (res.status == 200){
                getDetailsOfCampaigns();
            }else{
                alert(res.data.error);
            }
        }).catch((err) =>{
            console.error(err);
        })
        
    }






</script>
<style scoped>

    .update-campaign{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .image-show{
        border: 2px solid #04841C;
        width:1100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .update-campaign h2{
        font-size: 2rem;
        margin: 2rem;
        font-weight: 600;
        color: #04841C;
    }
    .update-campaign h3{
        font-size: 1.5rem;
        margin-top: 3rem;
        font-weight: 600;
    }
    .update-campaign form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
    }
    .update-campaign form .input-g1{
        /* background: gray; */
        display: flex;
        flex-direction: row;
        gap: 100px;
    }
    .update-campaign form .input-g1 div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .update-campaign form .input-g1 div label{
       margin-top: 2rem;
       margin-bottom: 0.4rem;
       color: #000000b6;
       font-size: 1rem;
       font-weight: bold;
    }
    .update-campaign form .input-g1 div input{
        width: 500px;
        border: 2px solid #04841C;
        padding:0.5rem;
    }
    
    
    .update-campaign form .input-g2{
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }
    .update-campaign form .input-g2 input{
        border: 2px solid #04841C;
        width: 1100px;
        padding: 1.5rem;
        z-index: 5;
        opacity: 0;
    }
    .update-campaign form .input-g2 label{
        margin-bottom: 0.4rem;
        color: #000000b6;
       font-size: 1rem;
       font-weight: bold;
    }
    .update-campaign .icon-selec-file{
        position: absolute;
        border: 2px solid #04841C;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1.5rem;
        width: 1100px;
        margin-top: 30px;
        z-index: 0;
    }
    .update-campaign .icon-selec-file span{
        background:#FDC400;
        border-radius: 100px;
        color: #FFFF;
        font-size: 2rem;

    }

    table{
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 1100px;
        margin-top: 1rem;
    }

    tr th {
        background: #04841C;
        border: 2px solid #bdb5b593;
        text-align: left;
        padding: 1rem;
        color: white;
        text-align: center;
    }
    
    td{
        background-color: #6467684b;
        padding: 1.5rem;
        border: 2px solid #ffffff93;
        text-align: center;

    }
    #prizes{
        width: 80%;
        border: 1px solid black;
    }
    #number-prize{
        border: 1px solid black;
        width:auto;

    }
    #add-prize-row{
        background: #6467684b;
        width: 1100px;
        padding: 0.5rem;
        transition: 0.5s;
        border: 2px solid #ffffff93;

    }
    #add-prize-row:hover{
        background: #FDC400;
        transition: 0.5s;
        color: #ffff;
    }
    #action-prize{
        display: flex;
        flex-direction: row;
        align-items:flex-end;
        justify-content: center;
        padding: 0.5rem;
        transition: all 0.5s;
    }
    #action-prize:hover{
        background: grey;
        transition: all 0.5s;
        cursor: pointer;
    }
    #update-campaign-action{
        width: 1100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
    }
    #update-campaign-action #cancel{
        background: #FDC400;
        width: 100px;
        padding: 0.5rem;
        color: #ffff;
        transition: 0.5s;
        font-weight: 700;
    }
    #update-campaign-action #submit{
        background: #04841C;
        padding: 0.5rem;
        width: 100px;
        color: #ffff;
        transition: 0.5s;
        font-weight: 700;
    }
    #update-campaign-action #submit:hover , #update-campaign-action #cancel:hover{
        transition: 0.5s;
        background: #8d918e;
    }



    /* ====================================== */
    .delete-prize{
        background: #fff;
        padding: 1rem 2rem 2rem 2rem;
    }
    .delete-prize img{
        margin: auto;
        width: 150px;
    }

    @media (max-width: 1080px) {
        .update-campaign form .input-g1 div input{
            width: 300px;
        }
        .update-campaign form .input-g2 input{
            width: 700px;

    }
    .update-campaign .icon-selec-file{
        width: 700px;
   
    }
    table{
        width: 700px;
    }
    #add-prize-row{
        width: 700px;
    }
    label, input, input::placeholder,select, th{
            font-size: 0.8rem !important;
        }
    }
    .image-show{
        width: 700px;
    }
</style>