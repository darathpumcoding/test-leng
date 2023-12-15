<template>
    <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props }">
                <BaseButton class="logout" type="primary-btn" v-bind="props">
                    <span class="material-symbols-outlined">
                        logout
                    </span>
                    <p >Logout Account</p>
                    
                </BaseButton>
            </template>
            <template v-slot:default="{ isActive }">
                <div class="delete-form p-5">
                    <img src="../../assets/smart-logo2.png" alt="">
                    <h1 class="dialog-title pb-6 text-center">Do you want to signout?</h1>
                    <div class="d-flex flex-row justify-between ml-20 mr-20">
                        <!-- <button type="submit" class="bg-green-600 mt-3 rounded-2xl p-3" @click="isActive.value = false">
                            <span>No</span>
                        </button>
                        <button type="submit" class="bg-green-600 mt-3 rounded-2xl p-3" @click="isActive.value = false">
                            <span>Yes</span>
                        </button> -->
                        <BaseButton type="secondary-btn" class="btn-login text-white" @click="isActive.value = false">
                            No</BaseButton>
                        <BaseButton type="primary-btn"  @click="logout" class="btn-login text-white" :loading="loading">
                            Yes</BaseButton>
                    </div>
                </div>
                
            </template>
        </v-dialog>
    </v-col>
</template>
<script setup>
    import axios from "axios";
    import {ref} from "vue";
    import Cookies from "js-cookie";
    import BaseButton from "../widget/BaseButton.vue";
    import {useRouter} from "vue-router";
    
    const router = useRouter();

    const loading = ref(false)

const logout = () => {
        loading.value = true;
        axios.post('http://192.168.11.117:4545/router/logout', {}, {withCredentials: true, validateStatus: () => true}).then((res) => {
            if (res.status == 200) {
                Cookies.remove("email");
                Cookies.remove("first_name");
                Cookies.remove("last_name");
                Cookies.remove("role");
                Cookies.remove("profile");
                setTimeout(()=>{
                    window.location.reload('/')
                },2000)
            }
        }).catch((error) => {
            console.error(error);
        });
    };
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

    .logout p{
        padding-left: 0.5rem;

    }

   .logout {
        /* background: #9a9e9b; */
        padding: 0.5rem;
        width: 250px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 0.5rem;
        color: #ffff;
        cursor: pointer;
        transition: 0.5s;
    }

    .logout p,
    .logout .material-symbols-outlined {
        color: #ffffff;
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