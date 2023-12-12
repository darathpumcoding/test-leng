<template>
    <v-btn :class="type" outlined rounded="md" class="">
        <slot></slot>
    </v-btn>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    type:String,
})

</script>

<style scoped>
.secondary-btn {
    background: #F1C400;
    transition: all 0.5s;
  margin-left: 2px;
}
.primary-btn {
    border-radius: 0px;
    background: #009639;
    transition: all 0.5s;
}
.primary-btn:hover{
    background: #F1C400;
    transition: all 0.5s;
}
.secondary-btn:hover{
    background: #009639;
    transition: all 0.5s;
}
</style>