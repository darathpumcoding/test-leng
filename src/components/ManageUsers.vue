<template>
    <h1>Users</h1>
    <v-button></v-button>
    <v-table density="compact mr-15">
        <thead>
            <tr class="bg-green">
                <th class=" text-white border text-center">
                    ID
                </th>
                <th class=" text-white border text-center">
                    Profile
                </th>
                <th class=" text-white border text-center">
                    Username
                </th>
                <th class=" text-white border text-center">
                    Role
                </th>
                <th class=" text-white border text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in compaingList" :key="item.id">
                <td class="text-center border">{{ item.id }}</td>
                <td class="text-center border"><span class="material-symbols-outlined">
                        person
                    </span></td>
                <td class="text-center border">{{ item.startDate }}</td>
                <td class="text-center border">{{ item.endDate }}</td>

                <td class="border ">

                    <div class="d-flex align-center justify-center">
                        <v-icon class="mdi mdi-pencil-outline mr-1" size="small" color="blue-accent-4">
                            <v-tooltip activator="parent" location="top">Edit</v-tooltip>
                        </v-icon>
                        <v-icon class="mdi mdi-lock m-1" size="small" color="">
                            <v-tooltip activator="parent" location="top">Lock user</v-tooltip>
                        </v-icon>
                        <v-icon class="mdi mdi-archive-arrow-down ml-1" size="small" color="red">
                            <v-tooltip activator="parent" location="top">archive User</v-tooltip>
                        </v-icon>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
    <h1 class="mt-15">User Archived</h1>
    <v-table density="compact mr-15">
        <thead>
            <tr class="bg-red">
                <th class=" text-white border text-center">
                    ID
                </th>
                <th class=" text-white border text-center">
                    Profile
                </th>
                <th class=" text-white border text-center">
                    Username
                </th>
                <th class=" text-white border text-center">
                    Role
                </th>
                <th class=" text-white border text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in compaingList" :key="item.id">
                <td class="text-center border">{{ item.id }}</td>
                <td class="text-center border"><span class="material-symbols-outlined">
                        person
                    </span></td>
                <td class="text-center border">{{ item.startDate }}</td>
                <td class="text-center border">{{ item.endDate }}</td>

                <td class="border ">

                    <div class="d-flex align-center justify-center">
                        <v-icon class="mdi mdi-package-up" size="small" color="blue-accent-4">
                            <v-tooltip activator="parent" location="top">Unarchive User</v-tooltip>
                        </v-icon>

                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script>
export default {
    data() {
        return {
            compaingList: [
                {
                    id: '001',
                    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
                    startDate: "Sreyyoer",
                    endDate: "User"
                },
                {
                    id: '002',
                    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
                    startDate: "Darath pum",
                    endDate: "Admin"
                },
                {
                    id: '003',
                    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeUFSFa_rWOt8RowifS6arzsr_zuNDyhBNjlV-ZqAtm3k-oELkxKGRrElg0yXX-WQegI&usqp=CAU",
                    startDate: "Duour Dite",
                    endDate: "User"
                },

            ],
        }
    },
}
</script>