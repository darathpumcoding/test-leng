<template>
  <div class="main-container">
    <div class="card">
      <div class="info">
        <p>20.5k</p>
        <p>Total Players</p>
      </div>
      <div class="icon-info">
        <span class="material-symbols-outlined">
          person
      </span>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <p>20.5k</p>
        <p>Total Campaigns</p>
      </div>
      <div class="icon-info">
        <span class="material-symbols-outlined">
          brand_awareness
      </span>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <p>200</p>
        <p>Total Prizes</p>
      </div>
      <div class="icon-info">
        <span class="material-symbols-outlined">
          rewarded_ads
      </span>
      </div>
    </div>
  </div>
  <CampaignCards></CampaignCards>
</template>
<script setup>
  import CampaignCards from "./CampaignCards.vue";
</script>
<style scoped>
  .main-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: -100px;
    margin-top: 20px;


  }
  .main-container .card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #ffffff;
    height: 300px;
    width: 28%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    padding: 3rem;
    align-items: center;
  }
  .material-symbols-outlined{
    font-size: 10rem;
    color: #04841C;
    font-weight: 1000;
  }
  .info p{
    padding-bottom: 2rem; 
    font-size: 2.5rem;
    font-weight: 900;
  }
  .info p:nth-child(1){
    color: #04841C;
  }
  .info p:nth-child(2){
    color: #FDC400;
  }

</style>