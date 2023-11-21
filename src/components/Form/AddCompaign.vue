
<template>
    <div class="form mr-12">
        <div class="header bg-green flex justify-center p-5 mr-10">
            <h1 class="text-2xl"> Add Campaign</h1>
        </div>
        <form class=" p-10 bg-gray-200 mr-10 ">
            <div class="w-full flex justify-center">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold" for="">
                        Id Campaing
                    </label>
                    <input
                        class="appearance-none block w-full  text-gray-700 border-solid mt-2 border-2 border-green-500 py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Id campaing">
                    <p class="text-red-500 text-xs italic"> Input id </p>
                </div>
                <div class="w-full md:w-1/2 px-3 ">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold " for="grid-last-name">
                        Number phone palyer
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 mt-2 text-gray-700 border-solid border-2 border-green-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="" type="file" placeholder="">
                    <p class="text-red-500 text-xs italic">Plase select file </p>
                </div>
            </div>
            <div class="flex mb-6 w-full justify-between">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Start Date
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-solid border-2 border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password" type="date">
                    <p class="text-red-500 text-xs italic">Select start date</p>
                </div>
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        End Date
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border-solid border-2 border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password" type="date" placeholder="******************">
                    <p class="text-red-500 text-xs italic">select end date</p>
                </div>
            </div>

            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs  font-bold mb-2" for="grid-zip">
                    Background
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border-solid border-2 border-green-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip" type="file" placeholder="90210">
                <p class="text-red-500 text-xs italic">select background</p>
            </div>
            <div class="w-full flex justify-center ">
                <!-- <router-link to="/campaigns"> -->
                <button type="button" class="p-2 w-24 bg-yellow-500 rounded-sm" @click="cancelAddCampaign">Cancel</button>
                <!-- </router-link> -->
                <button type="button" class="p-2 w-24 bg-green rounded-sm ml-5">Submit</button>
            </div>
        </form>

    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    form: Boolean,
});

const emit = defineEmits(['formCancel']);

const cancelAddCampaign = () => {
    emit('formCancel');
    props.form = false;
    console.log('love');
};
// import { defineProps } from 'vue';

// const props = defineProps({
//     form:Boolean,
// });
// console.log(props.form);

// const cacenlAddCampaign =()=>{
//     props.form=false;
//     console.log(props.form);
// }
</script>