<template>
    <div class="form" v-if="isvalid == true">
        <!-- <AddCompaign :form = isvalid ></AddCompaign> -->
        <AddCompaign v-model="isvalid"></AddCompaign>
    </div>
    <div class="list" v-else>
        <h1>Campaign Page</h1>
    <!-- <button>add</button> -->
    <div class="bnt-add d-flex justify-end mr-15 mb-5">
         <!-- <router-link to="/addCompaign">
            <v-btn class="bg-green">
           Add Compaign
        </v-btn>
    </router-link> -->
    <v-btn class="bg-green" @click="showForm">
           Add Compaign
        </v-btn>

    </div>

    <v-table density="compact mr-15">
        <thead>
            <tr class="bg-black">
                <th class=" text-white border text-center">
                    ID
                </th>
                <th class=" text-white border text-center">
                    Background
                </th>
                <th class=" text-white border text-center">
                    Start Date
                </th>
                <th class=" text-white border text-center">
                    End Date
                </th>
                <th class=" text-white border text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="item in compaingList" :key="item.id">
                <td class="text-center border">{{ item.id }}</td>
                <td class="text-center border"><img width="100" :src=item.background alt=""></td>
                <td class="text-center border">{{ item.startDate }}</td>
                <td class="text-center border">{{ item.endDate }}</td>

                <td class="border ">

                    <div class="d-flex align-center justify-center">
                        <v-icon class="mdi mdi-pencil-outline mr-1" size="small" color="blue-accent-4">
                            <v-tooltip activator="parent" location="top">Edit</v-tooltip>
                        </v-icon>
                        <v-icon class="mdi mdi-link-box" size="small" color="">
                            <v-tooltip activator="parent" location="top">Copy link</v-tooltip>
                        </v-icon>
                        <v-icon class="mdi mdi-eye-off ml-1" size="small" color="">
                            <v-tooltip activator="parent" location="top">View detial</v-tooltip>
                        </v-icon>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
    </div>
    
</template>

<script setup>
import {ref, defineProps} from "vue";
import AddCompaign from "../Form/AddCompaign.vue";

const isvalid = ref(false);
const showForm = ()=>{
    isvalid.value = true;
}
const props = defineProps({
    form: Boolean,
});




const compaingList = [
{
                    id: 'A01',
                    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
                    startDate: "11-11-2023",
                    endDate: "11-12-2023"
                },
                {
                    id: 'A02',
                    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
                    startDate: "11-11-2023",
                    endDate: "11-12-2023"
                },
                {
                    id: 'A03',
                    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
                    startDate: "11-11-2023",
                    endDate: "11-12-2023"
                },
]

// export default {
//     data() {
//         return {
//             compaingList: [
//                 {
//                     id: 'A01',
//                     background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
//                     startDate: "11-11-2023",
//                     endDate: "11-12-2023"
//                 },
//                 {
//                     id: 'A02',
//                     background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
//                     startDate: "11-11-2023",
//                     endDate: "11-12-2023"
//                 },
//                 {
//                     id: 'A03',
//                     background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
//                     startDate: "11-11-2023",
//                     endDate: "11-12-2023"
//                 },

//             ],
//         }
//     },
// }
</script>