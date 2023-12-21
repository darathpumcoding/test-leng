<template>
    <TheTransition id="transition">
        <v-alert class="mr-5" v-model="alert" width="40%" type="error" title="Error Invalid !" v-if="alertError"
            :text=invalidMessage></v-alert>
    </TheTransition>
    <TheTransition id="transition">
        <v-alert class="mr-5" v-model="alert" width="40%" type="success" title="Success !" v-if="alertSucess"
            :text=alertMessage></v-alert>
    </TheTransition>
    <div class="register-form">
        <form action="" class="register" @submit.prevent="register()">
            <img src="../../assets/smart-logo2.png" alt="">
            <h1>Register</h1>
            <div class="add-user-form">
                <div class="user-name">
                    <div>
                        <label for="" class="ml-5">First Name: <span
                                :class="pathName == 'first_name' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span></label>
                        <input type="text" v-model="first_name"
                            :style="pathName=='first_name'? 'border:2px solid red':''">


                        <!-- <span>fjioeruwtyor</span> -->
                    </div>
                    <div>
                        <label for="" class="ml-5">Last Name: <span
                                :class="pathName == 'last_name' ? '-mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span></label>
                        <input type="text" v-model="last_name"
                            :style="pathName=='last_name'? 'border:2px solid red':''">

                    </div>
                </div>
                <div class="email-role">
                    <div class="email-address">
                        <label for="" class=" mt-4">Email Address: <span
                                :class="pathName == 'email' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span></label>
                        <input type="email" id="email" class="resize-none focus:outline-none" v-model="email"
                            :style="pathName=='email'? 'border:2px solid red':''">
                    </div>

                    <div class="flex flex-col mt-4">
                        <label for="">Role: <span
                                :class="pathName == 'role' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span></label>
                        <div class="select-dropdown">
                            <select name="role" id="" v-model="role"
                                :style="pathName=='role'? 'border:2px solid red':''">
                                <option value="">Choose Role</option>
                                <option value="admin">admin</option>
                                <option value="standard">standard</option>
                                <option value="guest">guest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <!-- <div class="flex flex-col mt-4">
                    <label for="">Role: <span
                            :class="pathName == 'role' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span></label>
                    <div class="select-dropdown">
                        <select name="role" id="" v-model="role" :style="pathName=='role'? 'border:2px solid red':''">
                            <option value="">Choose Role</option>
                            <option value="admin">admin</option>
                            <option value="standard">standard</option>
                            <option value="guest">guest</option>
                        </select>
                    </div>
                </div> -->
                <div class="pass">
                    <div>
                        <label for="" class="ml-5  mt-4">Password: <span
                                :class="pathName == 'password' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span>
                        </label>
                        <input type="password" id="password" class="resize-none focus:outline-none" v-model="password"
                            :style="pathName=='password'? 'border:2px solid red':''">
                    </div>
                </div>
                <div class="pass">
                    <div>
                        <label for="" class="ml-5  mt-4">Confirm Password: <span class="passConfirm mt-3"
                                v-if="passConfirm">Confirm password is not correct.</span></label>
                        <input type="password" id="password" class="resize-none focus:outline-none"
                            v-model="confirm_password" :style="passConfirm? 'border:2px solid red':''">
                    </div>
                </div>

                <BaseButton type="primary-btn" class=" btn-register" @click="register">Submit</BaseButton>
            </div>
        </form>

    </div>
</template>
<script setup>
    import {ref} from 'vue';
    import axios from 'axios';
    import {useRouter} from 'vue-router';
    import {validatePassword, validateEmail, validFirstName, validLastName, validateRole} from "../../validation";
    import TheTransition from "../widget/TheTransition.vue";
    import BaseButton from "../widget/BaseButton.vue";



    const router = useRouter();

    const first_name = ref('');
    const last_name = ref('');
    const email = ref('');
    const password = ref('');
    const confirm_password = ref('');
    const role = ref('');
    const alertMessage = ref('');
    const alertSucess = ref(false);
    const alertError = ref(false);
    const errorCode = ref('');
    const invalidMessage = ref('');
    const pathName = ref('');
    const passConfirm = ref(false);

    const register = () => {
        const errEmail = validateEmail(email.value);
        const errPassword = validatePassword(password.value);
        const errFirstName = validFirstName(first_name.value);
        const errLastName = validLastName(last_name.value);
        const errRole = validateRole(role.value);
        if (errFirstName) {
            pathName.value = 'first_name';
            invalidMessage.value = errFirstName;
            return;
        } if (errLastName) {
            pathName.value = 'last_name';
            invalidMessage.value = errLastName;
            return;
        } if (errEmail) {
            pathName.value = 'email';
            invalidMessage.value = errEmail;
            return;
        }
        if (errPassword) {
            pathName.value = 'password';
            invalidMessage.value = errPassword;
            return;
        } if (errRole) {
            pathName.value = 'role';
            invalidMessage.value = errRole;
            return;
        } else {
            pathName.value = '';
        }

        let data = {
            'first_name': first_name.value,
            'last_name': last_name.value,
            'email': email.value,
            'password': password.value,
            'role': role.value
        }
        if (password.value == confirm_password.value) {
            axios.post('http://192.168.11.116:4545/user/register', data, {withCredentials: true, validateStatus: () => true})
                .then((res) => {
                    console.log(res.status);
                    if (res.status == 200) {
                        alertSucess.value = true;
                        alertMessage.value = res.data.data.message;
                        setTimeout(() => {
                            alertSucess.value = false;
                            router.push('/manage-user')
                        }, 3000)
                    }
                    else {
                        errorCode.value = res.data.code;
                        if (errorCode.value == 400) {
                            alertError.value = true;
                            invalidMessage.value = res.data.error;
                            setTimeout(() => {
                                alertError.value = false;
                            }, 3000)
                        }

                    }
                }).catch(err => {
                    console.error(err);
                })
        } else {
            passConfirm.value = true
        }

    }
</script>

<style scoped>
    h1 {
        text-align: center;
        width: 500px;
        padding: 20px;
        font-size: 2.5rem;
        color: white;
        background: #009639;
        z-index: 10;
    }

    .add-user-form {
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

    .register-form a {
        font-size: 1.5rem;
        color: black;
        transition: all 0.5s;

    }

    .register-form a:hover {
        color: #FDC400;
        transition: all 0.5s;
    }

    .register-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    textarea:focus,
    input:focus {
        outline: none;
    }

    .register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;

    }

    .user-name,
    .pass {
        width: 700px;
        display: flex;
        flex-direction: row;
    }

    .email-role {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* background: #000; */
        width: 660px;
    }

    .email-address {
        width: 310px;
    }

    .user-name div:nth-child(1),
    .user-name div:nth-child(2) {
        display: flex;
        flex-direction: column;
        width: 700px;
    }

    .email-address input{
    /* margin: 0px 20px 0px 0px; */
    padding: 5px 0px 5px 5px;
    border: 2px solid #009639;
    font-size: 1.5rem;
    background: #fff;
}
    .user-name input {
        margin: 0px 20px 0px 20px;
        padding: 5px 0px 5px 5px;
        border: 2px solid #009639;
        font-size: 1.5rem;
        background: #fff;
    }

    .email-address {
        display: flex;
        flex-direction: column;
    }

    span {
        color: #ff0000;
        margin: auto;
    }

    .pass input {
        margin: 0px 20px 0px 20px;
        padding: 5px 0px 5px 5px;
        border: 2px solid #009639;
        background: #fff;
        font-size: 1.5rem;
    }

    label {
        font-weight: 600;
        padding-bottom: 0.2rem;
    }

    label span {
        font-weight: 400;
    }

    .register-form img {
        width: 250px;
        margin-bottom: 30px;
    }

    input::placeholder {
        color: rgba(0, 0, 0, 0.466);
    }

    .pass div:nth-child(1),
    .pass div:nth-child(2) {
        display: flex;
        flex-direction: column;
        width: 900px;
    }

    .validation-message {
        color: red;
        opacity: 1;
    }

    .passConfirm {
        color: red;
    }

    .validation-message-none {
        opacity: 0;
    }

    /* ======================================= */


    .select-dropdown,
    .select-dropdown * {
        margin: 0;
        padding: 0;
        position: relative;
        box-sizing: border-box;
    }

    .select-dropdown {
        position: relative;
        border: 2px solid #009639;
        /* background-color: #E6E6E6; */
        background: #fff;
        width: 310px;
    }

    .select-dropdown select {
        font-size: 1rem;
        font-weight: normal;
        width: 360px;
        padding: 11px 11px 11px 11px;
        border: none;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;


    }

    .select-dropdown select:active,
    .select-dropdown select:focus {
        outline: none;
        box-shadow: none;
    }

    .btn-register {
        width: 200px;
        height: 60px;
        margin-top: 40px;
        padding: 7px 7px 7px 7px;
        font-size: 1.5rem;
        color: white;
    }

    .select-dropdown:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 8px;
        width: 0;
        height: 0;
        margin-top: -2px;
        border-top: 5px solid #009639;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
    }

    @media (max-width:1080px) {
        .register-form img {
            width: 200px;
            margin-bottom: 30px;
        }

        h1 {
            width: 300px;
            font-size: 2rem;
        }

        .add-user-form {
            width: 600px;
        }
        .email-role{
            width: 460px;
        }
        .user-name,
        .pass {
            width: 500px;
        }

        input {
            font-size: 0.8rem !important;
            padding: 8px !important;
        }

        .user-name div:nth-child(1),
        .user-name div:nth-child(2) {
            display: flex;
            flex-direction: column;
            width: 250px;
        }

        label {

            font-size: 0.8rem !important;
            font-weight: 600;
        }
        .email-address{
            width: 210px;
        }

        .select-dropdown {
            width: 210px;
        }
        
        .select-dropdown select {
            font-size: 0.8rem;
            padding: 8px;
            width: 210px;
        }

        .btn-register {
            width: 150px;
            height: 45px;
            margin-top: 40px;
            padding: 4px 4px 4px 4px;
            font-size: 1rem;
            color: white;
        }
    }
</style>