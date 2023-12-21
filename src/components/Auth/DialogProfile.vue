<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <!-- <img  icon="mdi-account-circle-outline" class="btn" ></img> -->
            <img v-if="!dataSessions" class='user_icon btn' src="../../assets/user_icon.png" alt="" v-bind="props">
            <img v-else id="profile" :src="dataSessions.profile" alt="" v-bind="props">
        </template>
        <div class="dialog">
            <div v-if="dataSessions !=''" class="user-logouted">
                <div class="user-info">
                    <img :src="dataSessions.profile" alt="">
                    <p class="name">{{dataSessions.first_name}} {{dataSessions.last_name}}</p>
                    <p class="email">{{dataSessions.email}}</p>
                </div>
                <router-link class="manage-user" to="/manage-user">Manage Your Account</router-link>
                <div class="change-profile">
                    <input type="file" v-on:change="handleFileChange">
                    <BaseButton class="btn-change-profile" type="primary-btn">
                        <span class="material-symbols-outlined">
                            assignment_ind
                        </span>
                        <p>Edit Profile</p>
                    </BaseButton>
                </div>
                <Logout></Logout>

            </div>
            <div v-else class="user-loged">
                <div class="img-header">
                    <img src="../../assets/smart-logo2.png">
                </div>
                <router-link to="/login">
                    <BaseButton class="btn-login" type="primary-btn">
                        <span class="material-symbols-outlined">
                            how_to_reg
                        </span>
                        <p>Login Account</p>
                    </BaseButton>
                </router-link>
                <router-link to="/">
                    <BaseButton class="btn-register" type="primary-btn">
                        <span class="material-symbols-outlined">
                            how_to_reg
                        </span>
                        <p>Register Account</p>
                    </BaseButton>
                </router-link>
            </div>
        </div>
    </v-menu>
</template>
<script setup>
    import {ref, onMounted} from 'vue';
    import Cookies from "js-cookie";
    import axios from 'axios';
    import {useRouter} from 'vue-router';
    import BaseButton from '../widget/BaseButton.vue';
    import Logout from '../dialog/Logout.vue';

    const router = useRouter();

    const cookieEmail = ref(Cookies.get('email'));
    const cookieFirstName = ref(Cookies.get('first_name'));
    const cookieLastName = ref(Cookies.get('last_name'));
    const cookieProfile = ref(Cookies.get('profile'));
    const dataSessions = ref('');
    const newProfile = ref('');

    console.log(cookieEmail.value);
    const show = ref(false);
    const swhowSideBar = () => {
        show.value = true;
    }
    const blockSideBar = () => {
        show.value = false;
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
        newProfile.value = await getBase64(event.target.files[0]);
        // console.log(newProfile.value);
        await axios.put(`http://192.168.11.116:4545/user/updateUserImageProfile/${dataSessions.value.id}`,
            {profile: newProfile.value},
            {withCredentials: true, validateStatus: () => true})
            .then(res => {
                if (res.status == 200) {
                    getSessionData();
                }
            }).catch(err => {
                console.error(err)
            })
    }

    const getSessionData = () => {
        axios.get('http://192.168.11.116:4545/user/session', {withCredentials: true, validateStatus: () => true})
            .then((res) => {
                if (res.status == 200) {
                    dataSessions.value = res.data.data.session_data;
                }
            }).catch((err) => {
                console.error(err);
            })
    }
    onMounted(() => {
        getSessionData();
    })
</script>
<style scoped>
    .dialog {
        background: #fafcfa;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        height: 400px;
        width: 300px;
        border-radius: 10px;

    }

    .user_icon {
        width: 60px;
        text-align: end;
    }

    .dialog .manage-user {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        align-items: center;
        justify-content: center;
    }

    a {
        text-decoration: none;
    }

    #profile {
        width: 55px;
        height: 55px !important;
        border-radius: 100px;
    }

    .active p a {
        color: white;
        text-decoration: none;
    }

    .user-loged,
    .user-logouted {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .change-profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin: 0.5rem 0 1.5rem 0;
        cursor: pointer;
    }

    .change-profile input {
        position: absolute;
        padding: 0.5rem;
        opacity: 0;
        width: 250px;
        z-index: 100;
    }

    .change-profile .btn-change-profile {
        padding: 0.5rem;
        width: 250px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 0.5rem;
        color: #ffff;
        cursor: pointer;
    }


    .user-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .user-info img {
        margin: 1rem;
        height: 90px;
        width: 90px;
        border-radius: 100px;
    }

    .user-info .name {
        font-size: 1.5rem;
    }

    .user-info .email {
        font-size: 1rem;
    }

    .btn-register p,
    .btn-login p,
    .logout p,
    .btn-change-profile p {
        padding-left: 0.5rem;

    }

    .dialog .logout {
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



    .btn-login,
    .btn-register {
        display: flex;
        flex-direction: row;
        padding: 0.5rem;
        width: 250px;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        color: #ffff;
        margin-top: 1.5rem;
        cursor: pointer;
        transition: 0.5s;
        text-decoration: none;
        justify-content: flex-start;
    }

    .btn-register p,
    .btn-register .material-symbols-outlined {
        color: #ffffff !important;
    }

    .user-loged .img-header {
        width: 300px;
        text-align: center;

    }

    .img-header img {
        margin: auto;
        width: 150px;
    }

    .manage-user {
        padding: 1rem;
        font-size: 1.3rem;
        display: flex;
        transition: 0.5s;
        color: #04841C;
    }

    .manage-user:hover {
        color: #FDC400;
        transition: 0.5s;
    }
</style>