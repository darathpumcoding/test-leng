<template>
    <div class="add-campaign">
        <h2>Add Campaign</h2>
        <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, mollitia. Possimus a ea,
            eveniet ipsum distinctio</p>
        <h3>Campaign Details</h3>
        <form action="">
            <div class="input-g1">
                <div>
                    <label for="">Campaign Name:</label>
                    <input type="text" id="campaign-name" class="resize-none focus:outline-none"
                        placeholder="Campaign Name*" v-model="campaign_name">
                    <label for="">Start Date:</label>
                    <input type="date" id="start-date" class="resize-none focus:outline-none" v-model="start_date">
                </div>
                <div>
                    <label for="">Participant:</label>
                    <input type="file" id="participants" class="resize-none focus:outline-none"
                        v-on:change="handleFileChange">
                    <label for="">End Date:</label>
                    <input type="date" id="end-date" class="resize-none focus:outline-none" v-model="end_date">
                </div>
            </div>
            <div class="input-g2">
                <label for="">Background Campaign:</label>
                <input type="file" id="bg-campaign" v-on:change="handleFileChange">
                <div class="icon-selec-file">
                    <span class="material-symbols-outlined">
                        add_circle
                    </span>
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
            <tr v-for="(i, index) in arrPrzes" :key="index">
                <td>
                    <select id="prizes" class="resize-none focus:outline-none" >
                        <option  v-for="item in prizes" :key="item.id" :value="item.english_name">
                            {{item.english_name}}({{item.khmer_name}})</option>
                    </select>
                </td>
                <td><input id="number-prize" type="number" placeholder="15"></td>
                <td>05</td>
                <td id="action-prize"><span class="material-symbols-outlined">
                        delete
                </span> <span>Delete</span> </td>
            </tr>
        </table>
        <button id="add-prize-row" @click="addColumn"><span class="material-symbols-outlined">
                add_circle
            </span></button>
        <div id="add-campaign-action">
            <button id="cancel" @click="cancelAddCampaign">Cancel</button>
            <button id="submit">Submit</button>
        </div>
    </div>
</template>
<script setup>
    import {defineProps, defineEmits, ref, onMounted} from 'vue';
    import axios from 'axios';

    let data = [
        
    ]
    const campaign_name = ref('');
    const campaign_image = ref('');
    const start_date = ref('');
    const end_date = ref('');
    const participant = ref('');


    const props = defineProps({
        form: Boolean,
    });

    const emit = defineEmits(['formCancel']);

    const cancelAddCampaign = () => {
        emit('formCancel');
        props.form = false;
    };
    const prizes = ref('');
 
    
    


    const getPrizes = () => {
        axios.get('http://192.168.11.117:4545/prize/getAllPrizes', {withCredentials: true, validateStatus: () => true})
            .then(res => {
                console.log(res.data.data.data);
                prizes.value = res.data.data.data
            }).catch(err => {
                console.error(err.response.status)
            })
    }
      onMounted(() => {
        getPrizes();
    })
    let arrPrzes = [prizes.value]

    const addColumn = ()=>{
        arrPrzes.push(prizes.value)
        console.log(arrPrzes);
        return;
    }
       

  

    async function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


    const handleFileChange = async (event) => {
        campaign_image.value = await getBase64(event.target.files[0]);
        console.log(campaign_image.value);
    }





</script>
<style scoped>
    .add-campaign {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .add-campaign h2 {
        font-size: 2rem;
        margin: 2rem;
        font-weight: 600;
        color: #04841C;
    }

    .add-campaign h3 {
        font-size: 1.5rem;
        margin-top: 3rem;
        font-weight: 600;
    }

    .add-campaign form {
        display: flex;
        flex-direction: column;
        /* background: #04841C; */
        width: 1200px;
        justify-content: center;
        align-items: center;
    }

    .add-campaign form .input-g1 {
        /* background: gray; */
        display: flex;
        flex-direction: row;
        gap: 100px;
    }

    .add-campaign form .input-g1 div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .add-campaign form .input-g1 div label {
        margin-top: 2rem;
        margin-bottom: 0.4rem;
        color: #000000b6;
        font-size: 1rem;
        font-weight: bold;
    }

    .add-campaign form .input-g1 div input {
        width: 500px;
        border: 2px solid #04841C;
        padding: 0.5rem;
    }


    .add-campaign form .input-g2 {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }

    .add-campaign form .input-g2 input {
        border: 2px solid #04841C;
        width: 1100px;
        padding: 1.5rem;
        z-index: 5;
        opacity: 0;
    }

    .add-campaign form .input-g2 label {
        margin-bottom: 0.4rem;
        color: #000000b6;
        font-size: 1rem;
        font-weight: bold;
    }

    .add-campaign .icon-selec-file {
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

    .add-campaign .icon-selec-file span {
        background: #FDC400;
        border-radius: 100px;
        color: #FFFF;
        font-size: 2rem;

    }

    table {
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

    td {
        background-color: #6467684b;
        padding: 1.5rem;
        border: 2px solid #ffffff93;
        text-align: center;

    }

    #prizes {
        width: 80%;
        border: 1px solid black;
    }

    #number-prize {
        border: 1px solid black;
        width: auto;

    }

    #add-prize-row {
        background: #6467684b;
        width: 1100px;
        padding: 0.5rem;
        transition: 0.5s;
        border: 2px solid #ffffff93;

    }

    #add-prize-row:hover {
        background: #FDC400;
        transition: 0.5s;
        color: #ffff;
    }

    #action-prize {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
    }

    #add-campaign-action {
        width: 1100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
    }

    #add-campaign-action #cancel {
        background: #FDC400;
        width: 100px;
        padding: 0.5rem;
        color: #ffff;
        transition: 0.5s;
        font-weight: 700;
    }

    #add-campaign-action #submit {
        background: #04841C;
        padding: 0.5rem;
        width: 100px;
        color: #ffff;
        transition: 0.5s;
        font-weight: 700;
    }

    #add-campaign-action #submit:hover,
    #add-campaign-action #cancel:hover {
        transition: 0.5s;
        background: #8d918e;
    }
</style>