<template>
    <TheTransition id="transition">
        <v-alert class="mr-5" v-model="alert" width="40%" type="error" title="Error Invalid !" v-if="errorCode == 404"
            :text=invalidMessage closable></v-alert>
    </TheTransition>
    <div class="login-page">
        <div class="login">
            <img src="../../assets/smart-logo2.png" alt="">
            <h1>Login</h1>
            <form @submit.prevent="login()" class="login-form">
                <input type="email" id="email" class="resize-none focus:outline-none" placeholder="Enter your email*"
                    v-model="email">
                <span
                    :class="pathName == 'email'? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span>
                <input type="password" id="password" class="resize-none focus:outline-none"
                    placeholder="Enter your password*" v-model="password">
                <span
                    :class="pathName == 'password' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span>
                <router-link class="mt-5" to="/reset-password">Reset Password</router-link>
                <BaseButton type="primary-btn" @click="login" class="btn-login">
                    LOGIN</BaseButton>
            </form>
        </div>

    </div>
</template>
<script setup>
    import axios from "axios";
    import {ref, onMounted} from "vue";
    import Cookies from "js-cookie";
    import {useRouter} from 'vue-router';
    import BaseButton from "../widget/BaseButton.vue";
    import TheTransition from "../widget/TheTransition.vue";
    import {validatePassword, validateEmail} from "../../validation";


    console.log(validatePassword);

    // const emailInvalid = ref('');
    // const alert = ref(false)
    const invalidMessage = ref('');
    const errorCode = ref('')
    const router = useRouter();
    const pathName = ref("");
    const password = ref("");
    const email = ref("");

    const login = () => {

        const errPassword = validatePassword(password.value);
        const errEmail = validateEmail(email.value);
        console.log("error password: ", errPassword);
        if (errPassword) {
            pathName.value = 'password';
            invalidMessage.value = errPassword;
            return;
        }if (errEmail){
            pathName.value = 'email';
            invalidMessage.value = errEmail;
            return;
        }

        axios.post('http://192.168.11.117:4545/router/login', {
            email: email.value, password: password.value,
        }, {withCredentials: true, validateStatus: () => true}).then(res => {
            // console.log(res.data);
            if (res.status == 200) {
                console.log(res.data);
                Cookies.set("first_name", res.data.data.first_name, {expires: 30});
                Cookies.set("last_name", res.data.data.last_name, {expires: 30});
                Cookies.set("email", res.data.data.email, {expires: 30});
                Cookies.set("role", res.data.data.role, {expires: 30});
                Cookies.set("profile", res.data.data.profile, {expires: 30});
                if (res.data.data.role == "admin") {
                    router.push('/');
                }


            }
            else {
                errorCode.value = res.data.code;
                console.log(errorCode.value);
                if (errorCode.value === 402) {
                    pathName.value = res.data.error.details[0].path[0];
                    invalidMessage.value = res.data.error.details[0].message;
                    console.log(pathName.value);
                    console.log(invalidMessage.value);
                }
                else if (errorCode.value === 404) {
                    invalidMessage.value = res.data.error;
                    console.log(invalidMessage.value);
                }
            }
        }).catch(err => {
            console.error(err);
            console.log(err.response.status)
        });
    };

    const getPrizes = () => {
        axios.get('http://192.168.11.117:4545/prize/getAllPrizes', {withCredentials: true, validateStatus: () => true})
            .then(res => {
                console.log(res.data.data);
            }).catch(err => {
                console.error(err.response.status)
            })
    }
    const getCampaigns = () => {
        axios.get('http://192.168.11.117:4545/campaign/getAllCampaigns', {withCredentials: true, validateStatus: () => true})
            .then(res => {
                console.log(res.data.data);
            }).catch(err => {
                console.error(err.response.status)
            })
    }
    const getUsers = () => {
        axios.get('http://192.168.11.117:4545/user/getAllUsers', {withCredentials: true, validateStatus: () => true})
            .then(res => {
                console.log(res.data.data);
            }).catch(err => {
                console.error(err.response.status)
            })
    }

    onMounted(() => {
        getPrizes();
    })
</script>

<style scoped>
    h1 {
        text-align: center;
        width: 800px;
        padding: 20px;
        font-size: 3rem;
        color: white;
        background: #009639;
        /* margin: 0 0 50px 0; */
        z-index: 10;

    }

    .login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #e4dfdf;
        align-items: center;
        margin-top: -50px;
        padding: 100px 100px 50px 100px;
    }

    .shap {
        width: 800px;
        margin-bottom: 50px;
    }

    #triangle-down {
        margin-top: 0;
        text-align: start;
        width: 0;
        height: 0;
        border-left: 0px solid transparent;
        border-right: 50px solid transparent;
        border-top: 50px solid #009639;
    }

    .login-page a {
        font-size: 1.5rem;
        color: black;
        transition: all 0.5s;

    }

    .login-page a:hover {
        color: #F1C400;
        transition: all 0.5s;
    }

    .login-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;

    }

    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;

    }

    .login-page input {
        width: 800px;
        margin-top: 20px;
        padding: 10px 0px 10px 10px;
        border: 2px solid #009639;
        font-size: 1.5rem;
        background: rgb(255, 255, 255);
    }

    .login-page .btn-login {
        width: 200px;
        height: 60px;
        margin-top: 60px;
        padding: 1rem;
        font-size: 1.5rem;
        color: white;
    }

    .btn:hover {
        background: #F1C400;
        color: #009639;
        transition: all 0.5s;
    }

    .login-page img {
        width: 300px;
        margin-bottom: 30px;
    }

    input::placeholder {
        color: rgba(0, 0, 0, 0.719);
        font-size: 1.3rem;
    }

    /* .valid{
       mt
   } */

    .validation-message {
        color: #B52555;
        opacity: 1;
    }

    .validation-message-none {
        opacity: 0;
    }

    #talkbubble {
        width: auto;
        padding: 10px;
        height: 50px;
        background: red;
        position: relative;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }

    #talkbubble:before {
        content: "";
        position: absolute;
        right: 100%;
        top: 12px;
        width: 0;
        height: 0;
        border-top: 13px solid transparent;
        border-right: 26px solid red;
        border-bottom: 13px solid transparent;
    }
</style>