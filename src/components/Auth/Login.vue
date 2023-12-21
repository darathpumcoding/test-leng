<template>
    <TheTransition id="transition">
        <v-alert class="mr-5" v-model="alert" width="40%" type="error" title="Error Invalid !" v-if="errLog"
            :text=invalidMessage></v-alert>
    </TheTransition>
    <TheTransition id="transition">
        <v-alert class="mr-5" v-model="alert" width="40%" type="success" title="Login Success !" v-if="isLogin"
             >You login success.</v-alert>
    </TheTransition>
    <div class="login-page">
        <div class="login">
            <img src="../../assets/smart-logo2.png" alt="">
            <h1>Login</h1>
            <form @submit.prevent="login()" class="login-form">
                <input type="email" id="email" class="resize-none focus:outline-none" placeholder="Enter your email*"
                    v-model="email">
                <span
                    :class="pathName == 'email'? 'mt-2 validation-message':'mt-2 validation-message-none'">{{invalidMessage}}.</span>
                <input type="password" id="password" class="resize-none focus:outline-none"
                    placeholder="Enter your password*" v-model="password">
                <span
                    :class="pathName == 'password' ? 'mt-2 mb-3 validation-message':'mt-2 validation-message-none'">{{invalidMessage}}.</span>
                <router-link class="btn-rest" to="/reset-password">Reset Password</router-link>
                <BaseButton type="primary-btn" @click="login" class="btn-login" :loading="loading">
                    LOGIN</BaseButton>
                <span id="route-register">Don't have an account? <router-link to="/register">Register</router-link></span>
            </form>
        </div>

    </div>
</template>
<script setup>
    import axios from "axios";
    import {ref, onMounted} from "vue";
    // import Cookies from "js-cookie";
    import {useRouter} from 'vue-router';
    import BaseButton from "../widget/BaseButton.vue";
    import TheTransition from "../widget/TheTransition.vue";
    import {validatePassword, validateEmail} from "../../validation";
    
    // const emailInvalid = ref('');
    // const alert = ref(false)
    const invalidMessage = ref('');
    const errorCode = ref('')
    const router = useRouter();
    const pathName = ref("");
    const password = ref("");
    const email = ref("");
    const loading = ref(false);
    const isLogin = ref(false);
    const errLog = ref(false);
    const dataSessions = ref('');
    
    
    
    const login = () => {
        const errPassword = validatePassword(password.value);
        const errEmail = validateEmail(email.value);
        if (errEmail) {
            pathName.value = 'email';
            invalidMessage.value = errEmail;
            return;
        }
        if (errPassword) {
            pathName.value = 'password';
            invalidMessage.value = errPassword;
            return;
        }
        loading.value = true;
        axios.post('http://192.168.11.116:4545/router/login', {
            email: email.value, password: password.value,
        }, {withCredentials: true, validateStatus: () => true}).then(res => {
            console.log(res.data);
            if (res.status == 200) {
                    isLogin.value = true;
                    setTimeout(()=>{
                        isLogin.value = false;
                        router.push('/');
                    },2000)
                // }
                


            }
            else {
                errorCode.value = res.data.code;
               if (errorCode.value === 404) {
                    invalidMessage.value = res.data.error;
                    // console.log(invalidMessage.value);
                    loading.value = false
                    errLog.value = true
                    setTimeout(()=>{
                        errLog.value = false;
                        // router.push('/');
                    },2000)
                }
                if (errorCode.value === 400){
                    invalidMessage.value = res.data.error;
                    console.log(invalidMessage.value);
                    loading.value = false
                    errLog.value = true
                    setTimeout(()=>{
                        errLog.value = false;
                        // router.push('/');
                    },2000)
                }
            }
        }).catch(err => {
            console.error(err);
            console.log(err.response.status)
            loading.value = false
        });
    };

    const getSessionData =()=>{
        axios.get('http://192.168.11.117:4545/user/session', {withCredentials: true, validateStatus: () => true})
        .then((res)=>{
            if (res.status == 200){
                console.log(res.data);
                // cookieFirstName.value = res.data.data.session_data.first_name;
            }
        }).catch((err)=>{
            console.error(err);
        })
    }
    onMounted(()=>{
        getSessionData();
    })
</script>

<style scoped>
    h1 {
        text-align: center;
        width: 500px;
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
        padding: 100px 50px 50px 50px;
    }

    /* .shap {
        width: 800px;
        margin-bottom: 50px;
    } */


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
        margin-top: 40px;
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
    #route-register{
        font-size: 1rem;
        color: #000000;
        padding-top: 20px;
    }
    #route-register a{
        font-size: 1rem;
        color: #009639;
    }
    @media (max-width:1080px) {
        
    .login-page img {
        width: 250px;
        margin-bottom: 30px;
    }
        h1 {
        text-align: center;
        width: 350px;
        padding: 15px;
        font-size: 2rem;
  
        }
        .login-page input {
            width: 400px;
            margin-top: 15px;
            padding: 8px 0px 8px 8px;
            font-size: 1rem;
   
        }
    
    input::placeholder {
        font-size: 1rem;
    }
    .btn-rest.btn-rest{
        font-size: 1rem;
        /* margin-top: 0px; */
    }
    .login-page .btn-login {
        width: 100px;
        height: 40px;
        margin-top: 30px;
        padding: 0.5rem;
        font-size: 1rem;
        color: white;
    }

    }
</style>