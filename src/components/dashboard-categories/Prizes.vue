<template>
  <h2 class="text-header" style="text-align: center;">Prize</h2>
  <div style="text-align: center;">
    <p>This page for add prize, edit prize and delete prize. This page for add prize, edit prize and delete prize.</p>
  </div>
 
  <div class="container">
    <session>
      <div class="button-create">
        <button>Add Prize</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <span>Image</span>
            </th>
            <th>
              <span>Prize Name(English)</span>
            </th>
            <th>
              <span>Prize Name(Khmer)</span>
            </th>
            <th>
              <span>Action</span>
            </th>
          </tr>
        </thead>
        <tbody v-for="(prize, index) in prizes" :key="index">
          <tr>
            <td>
              <div class="img">
                <img :src="prize.image" alt="" />
              </div>
            </td>
            <td>{{ prize.englisName }}</td>
            <td>{{ prize.khmerName }}</td>
            <td>
              <div class="action-container">
                <div class="edit-action">
                <span class="material-symbols-outlined" id="edit"
                  >edit_square</span
                >
                <span class="edit-text">Edit</span>
              </div>
              <div class="edit-action">
                <span class="material-symbols-outlined" id="delete"
                  >delete</span
                >
                <span class="delete-text" >Delete</span>
              </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </session>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const prizes = ref([
  {
    image: "",
    englisName: "a",
    khmerName: "h",
  },
  {
    image: "",
    englisName: "z",
    khmerName: "a",
  },
  {
    image: "",
    englisName: "c",
    khmerName: "u",
  },
  {
    image: "",
    englisName: "d",
    khmerName: "s",
  },
  {
    image: "",
    englisName: "e",
    khmerName: "s",
  },
]);
</script>

<style scoped>
.container {
  justify-content: center;
  display: flex;
  margin-top: 50px;
}
table {
  border-collapse: collapse;
  margin-top: 6%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
th,
td {
  border: 2px solid white;
}
thead th {
  width: 300px;
}
td img {
  width: 100px;
}
.img {
  justify-content: center;
  display: flex;
  background-color: #fff;
  margin: 10px;
}
thead th {
  background-color: rgb(18, 142, 18);
  color: white;
  padding: 10px;
}
tbody td {
  padding: 10px;
}
.id {
  width: 70px;
}

tr:nth-child(odd) {
  background-color: #d5dcda;
}
tr:nth-child(even) {
  background-color: #ece9e9;
}
#edit {
  color: rgb(16, 171, 16);
  font-size: 30px;
}
#delete {
  font-size: 32px;
  color: rgb(224, 83, 83);
}
.button-create button {
  background-color: rgb(18, 142, 18);
  padding: 10px;
  color: white;
  border-radius: 5px;
}
.button-create {
  display: flex;
  justify-content: end;
  margin-bottom: -30px;
}
.action-container {
  display:flex;
  justify-content:center;
}
.edit-action{
  display:flex;
}
.edit-action{
  display:flex;
  align-items: center;
}
.edit-text, .delete-text {
  margin: 10px;
}

</style>
