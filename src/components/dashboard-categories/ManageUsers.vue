<template>

    <div class="container">
        <section>
            <h2 class="header">All Users</h2>
            <p class="desc">Display a list of users with relevant information such as username, email, role, and status. </p>
            <div class="create-user">
                <router-link to="/addUser">
                    <button id="btn-add-user">
                        <i class="material-symbols-outlined">
                            add
                        </i>
                        Add New User</button></router-link>
            </div>
            <table class="all-user">
                <thead>
                    <tr>
                        <th class="id">No.</th>
                        <th>Profile</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in users" :key="item.id">
                        <td v-if="item.user_archive == false">{{ index + 1}}</td>
                        <td v-if="item.user_archive == false"><img class="profile" :src="item.profile" alt=""></td>
                        <td v-if="item.user_archive == false">{{ item.first_name }} {{item.last_name}}</td>
                        <td v-if="item.user_archive == false">{{ item.role }}</td>
                        <td v-if="item.user_archive == false">
                            <div class="action-user pl-2 pr-2" v-if="item.user_lock == false ">
                                <UpdateUser :userId="item.id" :user="user" :editUser="editUser"></UpdateUser>
                                <UserLock :userId="item.id" :getUsers="getUsers"></UserLock>

                                <UserArchive :userId="item.id" :getUsers="getUsers">

                                </UserArchive>

                            </div>
                            <div class="action-user" v-else>
                                <UnLockUser :userId="item.id" :getUsers="getUsers"></UnLockUser>

                                <!-- <div class="lock-user">
                                    <i class="material-symbols-outlined ">
                                        <span class="material-symbols-outlined">
                                            lock_clock
                                        </span>
                                    </i>
                                    <span id="lock-user" style="font-size: 13px;">This user have been locked.</span>

                                </div> -->

                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>

        <section>
            <h2 v-if="!showArchived" @click="showUserArchived" class="archived-user header">
                <span class="material-symbols-outlined">
                    expand_more
                </span>Archived Users
            </h2>
            <h2 v-else="showArchived" @click="closeUserArchived" class="archived-user header">
                <span class="material-symbols-outlined ">
                    expand_less
                </span>
                Archived Users
            </h2>

            <table :class="showArchived == true ? 'tb-user-archived ':'tb-user-archived archieved-none'">
                <thead>
                    <tr class="harder-archived ">
                        <th class="id">No.</th>
                        <th>Profile</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in users" :key="item.id">
                        <td v-if="item.user_archive == true">{{ index + 1 }}</td>
                        <td v-if="item.user_archive == true"><img class="profile" :src="item.profile" alt=""></td>
                        <td v-if="item.user_archive == true">{{ item.first_name }} {{item.last_name}}</td>
                        <td v-if="item.user_archive == true">{{ item.role }}</td>

                        <td v-if="item.user_archive == true">

                            <UserUnArchive :userId="item.id" :getUsers="getUsers">

                            </UserUnArchive>

                        </td>
                    </tr>

                </tbody>
            </table>
        </section>
    </div>
</template>
<script setup>
    import {ref, onMounted} from "vue";
    import axios from 'axios';
    import Cookies from 'js-cookie';
    import UserInfo from '../UserInfo.vue';
    import UserArchive from '../dialog/UserArchive.vue';
    import UserUnArchive from '../dialog/UserUnArchive .vue';
    import UpdateUser from '../dialog/UpdateUser.vue';
    import UserLock from '../dialog/UserLock.vue';
    import UnLockUser  from '../dialog/UnLockUser.vue';

    const users = ref('')
    const role = ref(Cookies.get('role'));
    const getUsers = () => {
        axios.get('http://192.168.11.116:4545/user/getAllUsers', {withCredentials: true, validateStatus: () => true})
            .then(res => {
                console.log(res.data.data);
                users.value = res.data.data
            }).catch(err => {
                console.error(err)
            })
    }

    onMounted(() => {
        getUsers();
    })
    const user = ref('')
    const editUser = (userId) => {
        user.value = users.value.find(item => item.id === userId);
        console.log(user.value);

    }



    const showArchived = ref(false);
    const showUserArchived = () => {
        showArchived.value = true
    }
    const closeUserArchived = () => {
        showArchived.value = false
    }

</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: auto;
        padding-bottom: 100px;
    }
    .header{
        font-size: 2rem;
    }

    .profile {
        margin: auto;
        width: 60px;
        border-radius: 100px;
    }

    .all-user th,
    .all-user td {
        border: 2px solid rgb(192, 177, 177);
        padding: 1rem;
        text-align: center;
        width: 500px;
    }

    th:nth-child(5),
    td:nth-child(5) {
        width: 300px;
    }

    th:nth-child(1),
    td:nth-child(1) {
        width: 200px;
    }

    .all-user th {
        background: green;
        color: #ffff;
    }

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

    .tb-user-archived thead th {
        background-color: gray;
        color: white;
        padding: 1rem;
    }

    .tb-user-archived {
        transition: all 0.1s;
        opacity: 1;
        margin-top: 60px;
    }

    .archieved-none {
        opacity: 0;
    }

    .tb-user-archived th,
    .tb-user-archived td {
        border: 2px solid rgb(192, 177, 177);
        padding: 1rem;
        text-align: center;
        width: 500px;
    }

    tr:nth-child(even) {
        background-color: #ece9e9;
    }

    tr:nth-child(odd) {
        background-color: #d5dcda;
    }


    .action-user div:hover {
        background: #00000065;
        transition: 0.5s;
    }



    .archived-user {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s;
    }

    .archived-user .material-symbols-outlined {
        font-size: 2.5rem;

    }
</style>