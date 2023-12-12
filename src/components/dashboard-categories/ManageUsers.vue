
<template>
    <div class="container">
        <session>
            <h2>All Users</h2>
            <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, rem? Laudantium nobis quod rem aut commodi dolor ab! Dignissimos ad voluptates sapiente nobis! Ex tenetur placeat ad officiis omnis molestias.</p>
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
                        <th class="id">User Id</th>
                        <th>Profile</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in users" :key="item.id" >
                        <td v-if="item.user_archive == false">{{ item.id }}</td>
                        <td v-if="item.user_archive == false"><img class="profile" :src="item.profile" alt=""></td>
                        <td v-if="item.user_archive == false">{{ item.first_name }} {{item.last_name}}</td>
                        <td v-if="item.user_archive == false">{{ item.role }}</td>
                        <td v-if="item.user_archive == false">
                            <div class="action-user">

                            
                                <div class="edit  ">
                                    <i class="material-symbols-outlined ">
                                        edit
                                    </i>
                                    <span id="edit-user" style="font-size: 13px;">Edit</span>
                                </div>
                                <div class="lock-user">
                                    <i class="material-symbols-outlined ">
                                        lock
                                    </i>
                                    <span id="lock-user" style="font-size: 13px;">Lock user</span>

                                </div>
                                <div class="archived">
                                    <i class="material-symbols-outlined ">
                                        archive
                                    </i>
                                    <span class="archived-user" style="font-size: 13px;">
                                        Archived</span>

                                </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </session>

        <session>
            <h2 v-if="!showArchived" @click="showUserArchived" class="archived-user">
                <span class="material-symbols-outlined" >
                    expand_more
                </span>Archived Users
            </h2>
            <h2 v-else="showArchived" @click="closeUserArchived" class="archived-user">
                <span class="material-symbols-outlined ">
                    expand_less
                </span>
                Archived Users
            </h2>

            <table  :class="showArchived == true ? 'tb-user-archived ':'tb-user-archived archieved-none'">
                <thead>
                    <tr class="harder-archived ">
                        <th class="id">User Id</th>
                        <th>Profile</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <!-- v-if="item.user_archive == true" -->
                <tbody>
                    <tr v-for="item in users" :key="item.id" >
                        <td v-if="item.user_archive == true">{{ item.id }}</td>
                        <td v-if="item.user_archive == true"><img class="profile" :src="item.profile" alt=""></td>
                        <td v-if="item.user_archive == true">{{ item.first_name }} {{item.last_name}}</td>
                        <td v-if="item.user_archive == true">{{ item.role }}</td>

                        <td v-if="item.user_archive == true">
                                 <div class="action-user">
                                    <div>

                                        <i class="material-symbols-outlined mr-1 ">
                                            unarchive
                                        </i>
                                        <span class="archived-user" style="font-size: 13px;">Unarchived</span>
                                    </div>
                                </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </session>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';
const users = ref('')

const getUsers = ()=>{
  axios.get('http://192.168.11.117:4545/user/getAllUsers', {withCredentials: true, validateStatus: () => true})
  .then(res => {
      console.log(res.data.data);
      users.value = res.data.data
  }).catch(err => {
      console.error(err)
  })
}

onMounted(()=>{
    getUsers();
})

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
}
.profile{
    margin: auto;
    width: 60px;
    border-radius: 100px;
}
.all-user th ,.all-user td{
    border: 2px solid rgb(192, 177, 177);
    padding: 1rem;
    text-align: center;
    width: 500px;
}
th:nth-child(5),td:nth-child(5) {
    width: 300px;
}
th:nth-child(1),td:nth-child(1) {
    width:200px;
}
.all-user th{
    background: green;
    color: #ffff;
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
    margin-bottom:2rem;
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
#btn-add-user i{   
    font-weight: 500;
    font-size: 1.5rem;
}
/* .all-user{
   margin: auto;
   width: 1450px;
   margin-bottom: 30px;
} */
/* table {
    border-collapse: collapse;
    margin-top: 1.5rem;
    margin-bottom:2rem;

    font-family: Arial, Helvetica, sans-serif;
} */

/* th,
td {
    border: 1px solid white;
} */

/* thead th {
    width: 300px;
} */

/* .all-user thead th {
    background-color: rgb(18, 142, 18);
    color: white;
    padding: 10px;
} */

.tb-user-archived thead th {
    background-color: gray;
    color: white;
    padding:1rem;
}

.tb-user-archived {
    transition: all 0.1s;
    opacity:1;
    margin-top: 60px;
}

/* .tb-user-archived th:nth-child(5), .tb-user-archived td:nth-child(5){
    width: 450px;
} */
.archieved-none{
    opacity: 0;
}
.tb-user-archived th, .tb-user-archived td{
    border: 2px solid rgb(192, 177, 177);
    padding: 1rem;
    text-align: center;
    width: 500px;
}

/* tbody td {
    padding: 10px;
} */

/* .id {
    width: 150px;
} */

tr:nth-child(even) {
    background-color: #ece9e9;
}

tr:nth-child(odd) {
    background-color: #d5dcda;
}

/* .action-icon {
    display: flex;
    justify-content: space-between;
    border-collapse: collapse;
} */

/* .edit,
.lock-user,
.archived {
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
} */

.action-user div:hover{
    background: #00000065;
    transition: 0.5s;
}

/* .lock-user:hover {
    background-color: rgb(121, 126, 126);
    color: white;
    border-radius: 2px;
} */

/* .archived:hover {
    background-color: rgb(121, 126, 126);
    color: white;
    border-radius: 2px;
} */

/* i {
    font-size: 1.2rem;
} */

/* .harder-archived {
    background-color: red;
} */

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
</style>
