<template>
    <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props }">
                <!-- <p >Logout Account</p> -->
                <div class="action-user" v-bind="props" @click="editUser(userId)">
                    <div class="edit">
                        <i class="material-symbols-outlined ">
                            edit
                        </i>
                        <span id="edit-user" style="font-size: 13px;">Edit</span>
                    </div>
                </div>
            </template>
            <template v-slot:default="{ isActive }">
                <form action="" ref="form">
                    <h1>UPDATE USER</h1>
                    <div id="user-name">
                        <div class="first-name flex flex-col">
                            <label for="">First Name:</label>
                            <input type="text" name="first_name" :value="user.first_name">
                        </div>
                        <div class="last-name flex flex-col">
                            <label for="">Last Name:</label>
                            <input type="text" name="last_name" :value="user.last_name">
                        </div>
                    </div>
                    <div id="email-role">
                        <div id="email">
                            <label for="">Email Address:</label>
                            <input type="email" name="email" :value="user.email" readonly>
                        </div>
                        <v-dialog transition="dialog-bottom-transition" width="auto">
                            <template v-slot:activator="{ props }">
                                <div class="w-6 m-auto icon-change"><span class="material-symbols-outlined"
                                        v-bind="props" @click="getLink">
                                        lock_reset
                                    </span>
                                    <p class="change">Change Password
                                    </p>
                                </div>
                            </template>
                            <template v-slot:default="{ isActive }">
                                <div class="copy-link">
                                    <div class="copy-header">
                                        <h1>Link Reset Password</h1>
                                        <i class="material-symbols-outlined "  @click="isActive.value = false">
                                            close
                                        </i>
                                    </div>
                                    <div >
                                        <input type="text"  v-model="link"
                                            :style="isCopy?'border:2px solid #F1C400':'border: 2px solid red'">
                                        <BaseButton type="primary-btn" class="mr-5 text-white" @click="getLink">Copy
                                        </BaseButton>
                                    </div>
                                </div>
                            </template>
                        </v-dialog>

                    </div>
                    <div>
                        <label for="">Role:</label>
                        <div class="select-dropdown">
                            <select :value="user.role" name="role">
                                <option value="">Choose User Role</option>
                                <option value="admin">admin</option>
                                <option value="standard">standard</option>
                                <option value="guest">guest</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-row justify-end gap-5">
                        <BaseButton type="secondary-btn" class="text-white font-bold mt-7 text-end"
                            @click="isActive.value = false">Cancel</BaseButton>
                        <BaseButton @click="updateUser(isActive)" type="primary-btn"
                            class="text-white font-bold mt-7 text-end" :loading="loading">Update</BaseButton>
                    </div>
                </form>

            </template>
        </v-dialog>
    </v-col>
</template>
<script setup>
    import axios from "axios";
    import {ref, defineProps} from "vue";
    import Cookies from "js-cookie";
    import BaseButton from "../widget/BaseButton.vue";
    import {useRouter} from "vue-router";

    const props = defineProps(["userId", "user", "getUsers", "editUser"]);
    const router = useRouter();
    const form = ref(null);
    const loading = ref(false);
    const isSuccess = ref(false);
    // const isActive = ref(true);
    const inputText = ref('');
    const isCopy = ref(false);
    const link = ref('');

    function updateUser(isActive) {
        var formData = new FormData(form.value);
        const first_name = formData.get('first_name');
        const last_name = formData.get('last_name');
        const role = formData.get('role');
        const email = formData.get('email');


        const data = {
            first_name,
            last_name,
            email,
            role,
        }
        console.log(data);
        console.log(props.user);
        loading.value = true;
        axios.put(`http://192.168.11.116:4545/user/updateUser`, data, {withCredentials: true, validateStatus: () => true})
            .then((res) => {
                console.log(res.data);
                if (res.status == 200) {
                    // alert('Success to update')
                    isActive.value = false
                    props.getUsers();
                    loading.value = false;
                }
            }).catch((err) => {
                console.error(err);
            });
    }
    // generateLink

    const getLink = () =>{
        var formData = new FormData(form.value);
        const email = formData.get('email');
        axios.post(`http://192.168.11.116:4545/router/generateLink`, {email:email}, {withCredentials: true, validateStatus: () => true})
        .then((res) => {
            if (res.status == 200) {
                link.value = res.data.data.link;
                console.log(link.value);
            }

        }).catch((err) => {
            console.error(err);
        })

    }
    const copyText = () => {
        if (link.value != '') {
            navigator.clipboard.writeText(link.value);
            isCopy.value = true;
        }else{
            isCopy.value = false;
        }

    };
</script>
<style scoped>
    form {
        width: 650px;
        height: 500px;
        background: #FFFF;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        padding: 0px 20px 20px 20px;
    }

    form h1 {
        width: 650px;
        font-size: 2rem;
        /* margin: 20px; */
        font-weight: 600;
        color: #ffff;
        padding: 20px;
        text-align: center;
        background: #009639;
        margin-bottom: 30px;
    }

    #user-name {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 500px;
        margin-bottom: 1rem;
    }

    textarea:focus,
    input:focus {
        outline: 1px solid #F1C400;
    }

    #user-name input {
        width: 240px;
        border: 2px solid #009639;
        padding: 0.4rem;

    }



    #email {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    label {
        padding-bottom: 0.2rem;
        font-weight: 600;
    }

    #email input {
        width: 500px;
        border: 2px solid #009639;
        padding: 0.4rem;

    }

    /* =========================================== */


    .icon-change {
        z-index: 100;
        cursor: pointer;
        margin-top: 20px;
    }

    .change {
        position: fixed;
        background: rgb(174, 168, 168);
        padding: 0.2rem;
        opacity: 0;
        visibility: hidden;
        transition: 0.1s;
        color: #ffff;
    }

    .icon-change:hover .change {
        opacity: 1;
        visibility: visible;
        transition: 0.1s;
        z-index: 100;
    }

    .icon-change span {
        font-size: 2rem;
    }

    /* =========================================== */
    .copy-link .copy-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #009639;
        padding: 5px 10px 10px 20px;
        color: #F1C400;
        font-weight: 500;
        font-size: 1.5rem;
    }
    .copy-header i{
        cursor: pointer;
        transition: all 0.1s linear;
    }
    .copy-header i:hover{
        background: #ffff;
        transition: all 0.1s linear;
        color: red;
        border-radius: 100px;
    }
    .copy-link div {
        background: #FFFF;
        width: 600px;
        /* height: 100px; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

    }

    .copy-link div input {
        margin: 20px;
        width: 500px;
        padding: 5px;
        border: 1px solid #009639;
    }

    textarea:focus,
    .copy-link div input:focus {
        outline: none;
    }

    /* ======================================== */

    .action-user {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;

    }

    .action-user div {

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem;
        transition: 0.5s;
        /* background: #000; */
    }

    .action-user div:hover {
        /* background: #00000065; */
        transition: 0.5s;
    }

    /* ========================================= */


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

        width: 500px;
    }

    .select-dropdown select {
        font-size: 1rem;
        font-weight: normal;
        width: 500px;
        padding: 6px 24px 6px 10px;
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
</style>