<template>
    <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props }">
                <!-- <p >Logout Account</p> -->
                <div class="action-user" v-bind="props">
                    <div>
                        <i class="material-symbols-outlined mr-1 " >
                            unarchive
                        </i>
                        <span class="archived-user text-black" style="font-size: 13px;">Archive</span>
                    </div>
                </div>
            </template>
            <template v-slot:default="{ isActive }">
                <div class="delete-form p-5">
                    <img src="../../assets/smart-logo2.png" alt="">
                    <h1 class="dialog-title pb-6 text-center">Do you want to archived user?</h1>
                    <div class="d-flex flex-row justify-between ml-20 mr-20">
                        <BaseButton type="secondary-btn" class="btn-login text-white" @click="isActive.value = false">
                            No</BaseButton>
                        <BaseButton type="primary-btn"  @click="archiveUser" class="btn-login text-white" :loading="loading">
                            Yes</BaseButton>
                    </div>
                </div>
                
            </template>
        </v-dialog>
    </v-col>
</template>
<script setup>
    import axios from "axios";
    import {ref , defineProps} from "vue";
    import Cookies from "js-cookie";
    import BaseButton from "../widget/BaseButton.vue";
    import {useRouter} from "vue-router";
    
    const router = useRouter();

    const props = defineProps(["userId", "getUsers"]);
    const loading = ref(false)
    
    const archiveUser = () =>{
        loading.value = true;
        axios.put(`http://192.168.11.116:4545/user/updateArchiveUser/${props.userId}`,{user_archive:true},  {withCredentials: true, validateStatus: () => true})
        .then(res =>{
            console.log(res);
            if(res.status == 200) {
                loading.value = false;
                console.log('users archive loaded');
                props.getUsers();
            }
        }).catch(err => {
            console.error(err)
        })
    }

</script>
<style scoped>
input,textarea {
    border: 1px solid rgb(36, 90, 31);
    color: white;
    margin: 2%;
    padding: 2%;
}
h1{
    color: #ffff;
    font-size: 1.5rem;
    margin-bottom: 5%;
}
.delete span{
    font-family: sans-serif;
    font-size: 0.7rem;
    position: absolute;
    z-index: 1000;
    display: flex;
    color: #000000;
    margin: 0.1rem 1rem;
    opacity: 0;
    visibility: hidden;
    /* transform: translateX(2rem); */
    border-bottom: 1px solid #ffff;
    background-color: #ffffff;
    width:auto;
    transition: all .2s;
    padding: 1%;
    gap: 20px;
}
.delete:hover .span{
    opacity: 1;
    visibility: visible;
}

.delete-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffff;
    width: 400px;
    padding-bottom: 50px;
}
.delete-form img{
    width: 200px;
    margin: auto;
    padding: 0px 20px 20px 20px;
}
span{
    color: #ffff;
}
.dialog-title{
    color: #009639;
    font-weight: 600;
}
.action-user{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;

}.action-user div{

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    transition: 0.5s;
    /* background: #000; */
}
.action-user div:hover{
    /* background: #00000065; */
    transition: 0.5s;
}



.archived-user {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
}
.archived-user .material-symbols-outlined{
    font-size: 2.5rem;
    
}
@media (max-width: 768px) {
    .play{
        width: 100%;
        height: 200px;
    }
    img{
        width: 140px;
    }
    i{
        font-size: 10px;
    }
    .button p{
        font-size: 10px;
    }
    form{
        width: 90%;
    }
}
</style>