<template>
    <!-- <div class="page-campaign"> -->
        <h1>Active Campaigns</h1>
        <hr> 
    <!-- </div> -->
        <div class="campaign-card">
            <div class="parent-card"></div>
            <div class="parent-card"></div>
            <div class="parent-card"></div>
            <div class="parent-card"></div>
        </div>
  
  
</template>
<style scoped>

    h1{
        margin-top: 30px;
        color: #04841C;
    }
    hr{
        color: #FDC400;
        border: none;
        border: 2px solid #FDC400;
        margin-right: 100px;
    }
    .campaign-card{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-left: -90px;
        margin-top: 30px;
    }
    .campaign-card .parent-card{
        background: #04841C;
        height: 300px;
        width: 20%;
    }

</style>