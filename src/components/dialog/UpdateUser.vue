<template>
    <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props }">
                <!-- <p >Logout Account</p> -->
                <div class="action-user" v-bind="props">
                    <div class="edit" @click="editUser(userId)">
                        <i class="material-symbols-outlined ">
                            edit
                        </i>
                        <span id="edit-user" style="font-size: 13px;">Edit</span>
                    </div>
                </div>
            </template>
            <template v-slot:default="{ isActive }">
                <div class="update-form p-5">
                    <!-- <img src="../../assets/smart-logo2.png" alt=""> -->
                    <h1 class="m-10">Update User</h1>
                    <table class="table-update-user">
                        <thead>
                            <tr>
                                <!-- <th>Profile</th> -->
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <!-- <td>
                                    <img :src="profile" alt="" class="profile">
                                </td> -->
                                <td>
                                    <input type="text" v-model="user.first_name">
                                </td>
                                <td>
                                <input type="text" v-model="user.last_name">
                                </td>
                                <td>{{user.email}}</td>
                                <td id="pass"><div class="w-6 m-auto icon-change"><span class="material-symbols-outlined">
                                    lock_reset
                                    </span> <p class="change">Change Password
                                    </p></div></td>
                                <td>
                                    <select name="role" id="" v-model="user.role">
                                        <option value="">Chose Role</option>
                                        <option value="admin">admin</option>
                                        <option value="standard">standard</option>
                                        <option value="guest">guest</option>
                                    </select>
                                </td>
                            </tr>
        
                        </tbody>
                    </table>
                    <div class="w-full flex flex-row justify-end gap-5">

                        <BaseButton type="secondary-btn" class="text-white font-bold mt-10 text-end" @click="isActive.value = false">Cancel</BaseButton>
                        <BaseButton type="primary-btn" class="text-white font-bold mt-10 text-end">Update</BaseButton>
                    </div>
                </div>
            </template>
        </v-dialog>
    </v-col>
</template>
<script setup>
    import axios from "axios";
    import {ref,defineProps} from "vue";
    import Cookies from "js-cookie";
    import BaseButton from "../widget/BaseButton.vue";
    import {useRouter} from "vue-router";

    const props = defineProps(["userId","user","editUser"]);
    const first_name = ref(Cookies.get("first_name"));
    const last_name = ref(Cookies.get("last_name"));
    const email = ref(Cookies.get("email"));
    const profile = ref(Cookies.get("profile"));
    const role = ref(Cookies.get("role"));
    const router = useRouter();
</script>
<style scoped>

    .update-form{
        background: #ffffff;
        padding: 50px 50px 100px 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    /* .update-form img{
        margin-top: -20px;
        width: 300px;
        padding-bottom: 20px;
    } */
    .update-form h1{
        font-size: 3rem;
        font-weight: 600;
        color: #009639;
    }
    .profile {
        margin: auto;
        width: 60px;
        border-radius: 100px;
    }







    .table-update-user thead th {
        background-color: #009639;
        color: white;
        padding: 1rem;
    }

    .icon-change{
        z-index: 100;
        cursor: pointer;
    }
     .change{
        position: fixed;
        background: rgb(174, 168, 168);
        padding: 0.2rem;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
        color: #ffff;
    }
    .icon-change:hover .change{
        opacity: 1;
        visibility: visible;
        transition: 0.5s;
    }
    .icon-change span{
        font-size: 2rem;
    }
    .text-pass{
        font-size: 2rem;
    }
    .table-update-user th,
    .table-update-user td {
        border: 2px solid rgb(192, 177, 177);
        padding: 1rem;
        text-align: center;
        width: 300px;
    }
    .action-user {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;

    }
    input{
        /* background: #009639; */
        border: 2px solid #009639;
        padding-left: 0.2rem;
        cursor: pointer;
    }
    .action-user div {

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem;
        transition: 0.5s;
        /* background: #000; */
        cursor: pointer;
    }
    td:nth-child(5) select{
        border: 2px solid #009639;
        padding-left: 0.2rem;
        cursor: pointer;
    }
    h2 {
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 3%;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .create-user {
        display: flex;
        justify-content: end;
        align-items: center;
        margin-bottom: 2rem;
    }

    #btn-add-user {
        margin-top: 3rem;
        background-color: green;
        color: white;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 500;
    }

    #btn-add-user i {
        font-weight: 500;
        font-size: 1.5rem;
    }

</style>