<template>
  <div class="main-container">
    <div class="card">
      <div class="icon-info">
        <span class="material-symbols-outlined">
          person
        </span>
      </div>
      <div class="info">
        <p>20.5k</p>
        <p>Total Players</p>
      </div>
      
    </div>
    <div class="card">
      <div class="icon-info">
        <span class="material-symbols-outlined">
          brand_awareness
        </span>
      </div>
      <div class="info">
        <p>20.5k</p>
        <p>Total Campaigns</p>
      </div>
      
    </div>
    <div class="card">
      <div class="icon-info">
        <span class="material-symbols-outlined">
          rewarded_ads
        </span>
      </div>
      <div class="info">
        <p>200</p>
        <p>Total Prizes</p>
      </div>
      
    </div>
  </div>
  <CampaignCards></CampaignCards>
</template>
<script setup>
  import CampaignCards from "./CampaignCards.vue";
</script>
<style scoped>
  .main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: -100px;
    margin-top: 40px;


  }

  .main-container .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #ffffff;

    height: 170px;
    width: 26%;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    padding: 2rem;
    align-items: center;
  }

  .material-symbols-outlined {
    font-size: 7rem;
    color: #04841C;
    /* font-weight: 1000; */
  }
  .info {
    text-align: center;
  }
  .info p {
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 900;
  }

  .info p:nth-child(1) {
    color: #04841C;
  }

  .info p:nth-child(2) {
    color: #FDC400;
  }

  @media (max-width:1080px) {
    .main-container{
      margin-left:-50px;
    }
    .main-container .card {
      height: 130px;
      width: 28%;
      padding: 0.5rem;
      
      justify-content: space-around;
    }

    .info p {
      padding-bottom: 1rem;
      font-size: 1rem;
      font-weight: 900;
    }

    .material-symbols-outlined {
      font-size: 3rem;
      color: #04841C;
      /* font-weight: 1000; */
    }
  }
</style>