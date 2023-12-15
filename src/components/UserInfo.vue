<template>

    <div class="user-information">
        <div class="profile">
            <img :src="profile" alt="">
            <span class="material-symbols-outlined">
                photo_camera
            </span>
            <input type="file">
        </div>
        <div class="welcome">
            <h1>Welcome, {{first_name}} {{last_name}}</h1>
        </div>
        <div class="username">
            <div class="first-name">
                <div>
                    <span>First Name: {{first_name}}</span>
                    <span @click="showInputFirstName" class="material-symbols-outlined">edit</span>
                </div>
                <span :class="isInputFirstName == true ? 'input-first':'input-first-none'">: <input type="text"
                        v-model="first_name"> <span @click="closeInputFirst" class="material-symbols-outlined">
                        visibility_off
                    </span></span>
            </div>
            <div class="last-name">
                <div>
                    <span>Last Name: {{last_name}}</span>
                    <span @click="showInputLastName" class="material-symbols-outlined">edit</span>
                </div>
                <span :class="isInputLastName == true ? 'input-last':'input-last-none'">: <input type="text"
                        v-model="last_name"> <span @click="closeInputLast" class="material-symbols-outlined">
                        visibility_off
                    </span></span>
            </div>
            <div class="email-address">
                <span>Email Address: {{email}}</span>
            </div>
        </div>
        <div class="password">
            <h1>Change Password</h1>
            <div class="old-pass">
                <span>Old Password</span>
                <span class="input-old-pass">: <input type="password" v-model="old_pass"></span>
            </div>
            <div class="new-pass">
                <span>New Password</span>
                <span class="input-new-pass">: <input type="password" v-model="new_pass"></span>
            </div>
            <div class="confirm-pass">
                <span>Confirm Password</span>
                <span class="input-confirm-pass">: <input type="password" v-model="confirm_pass"></span>
            </div>
            <div class="confirm">
                <button class="btn-confirm" @click="userEditInfo">Confirm</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref} from "vue";
    import Cookies from "js-cookie";
    import axios from "axios";
    const isInputFirstName = ref(false);
    const isInputLastName = ref(false);

    const first_name = ref(Cookies.get("first_name"));
    const last_name = ref(Cookies.get("last_name"));
    const email = ref(Cookies.get("email"));
    const profile = ref(Cookies.get("profile"));
    const old_pass = ref('');
    const new_pass = ref('');
    const confirm_pass = ref('');


    const userEditInfo = () => {

        if (new_pass.value == confirm_pass.value) {
            let data = {
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                password: old_pass.value,
                new_password: new_pass.value,
            }
            console.log(data);
            axios.put(`http://192.168.11.117:4545/user/updateUserProfile`, data, {withCredentials: true, validateStatus: () => true})
                .then((res) => {
                    console.log(res.data);
                    if (res.status == 200) {
                        alert("User updated successfully")
                    }
                }).catch((err) => {
                    console.error(err);
                })
        }
    }

    const showInputFirstName = () => {
        isInputFirstName.value = true;
    }
    const showInputLastName = () => {
        isInputLastName.value = true;
    }

    const closeInputFirst = () => {
        isInputFirstName.value = false;
    }
    const closeInputLast = () => {
        isInputLastName.value = false;
    }


    // const cancelAddCampaign = () => {
    //     emit('formCancel');
    //     props.form = false;
    // };

</script>



<style scoped>
    .user-information {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgb(255, 255, 255);
        width: 50%;
        margin: auto;
        padding: 3rem;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }

    .profile span {
        position: absolute;
        margin-top: -50px;
        margin-left: 110px;
        background: #8f8888;
        border: 2px solid #ffff;
        border-radius: 100px;
        padding: 5px;
        text-align: end;
    }

    .profile {
        margin-bottom: 30px;
    }

    .profile input {
        position: absolute;
        margin-top: -50px;
        margin-left: 110px;
        background: #8f8888;
        width: 38px;
        height: 38px;
        border: 2px solid #ffff;
        border-radius: 100px;
        padding: 5px;
        text-align: end;
        opacity: 0;
    }

    .welcome h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .profile img {
        width: 150px;
        border-radius: 100px;
    }

    .username,
    .password {
        border: 2px solid green;
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 3rem;
    }

    .first-name div span:nth-child(1),
    .last-name div span:nth-child(1),
    .email-address {
        font-size: 1.1rem;
        font-weight: 600;
    }

    .first-name,
    .last-name {
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .input-first,
    .input-last {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }

    .first-name .input-first input {
        border: 1px solid green;
        padding-left: 0.5rem;
        /* opacity: 1; */
        margin-left: 10px;
    }

    .last-name .input-last input {
        border: 1px solid green;
        padding-left: 0.5rem;
        /* opacity: 1; */
        margin-left: 10px;

    }

    .input-first-none,
    .input-last-none {
        display: none;
        /* opacity: 0; */
    }

    .first-name .material-symbols-outlined,
    .last-name .material-symbols-outlined {
        padding-left: 1rem;
        cursor: pointer;
        color: #009639;
    }

    .first-name .material-symbols-outlined:hover,
    .last-name .material-symbols-outlined:hover {
        color: #F1C400;
    }

    .password h1 {
        margin: auto;
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .password div span:nth-child(1),
    .username div div span:nth-child(1),
    .email-address span {
        color: #494343;
    }

    .old-pass,
    .new-pass,
    .confirm-pass {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 60%;
        align-items: center;
    }

    .old-pass span:nth-child(1),
    .new-pass span:nth-child(1),
    .confirm-pass span:nth-child(1) {
        font-size: 1.1rem;
        font-weight: 600;
    }

    .input-old-pass input,
    .input-new-pass input,
    .input-confirm-pass input {
        padding-left: 0.5rem;
        border: 1px solid #009639;
    }

    .confirm {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: end;
        margin-top: 1rem;
    }

    .btn-confirm {
        background: #009639;
        padding: 10px 20px;
        color: #ffff;
        transition: all 0.5s;
    }

    .btn-confirm:hover {
        transition: all 0.5s;
        background: #F1C400;
    }

    @media (max-width:1080px) {
        .user-information {
            width: 90%;
            margin-top: 50px;
        }
    }
</style>