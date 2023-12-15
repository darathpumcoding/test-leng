<template>
  <div class="main-container">
    <div class="card">
      <div class="icon-info flex flex-row">
        <span class="material-symbols-outlined ">
          person
        </span>
        <span class="material-symbols-outlined plus" >
          add
          </span>
      </div>
      <div class="info">
        <p>Add Campaign</p>    
      </div>
      
    </div>
    <div class="card">
      <div class="icon-info flex flex-row ">
        <span class="material-symbols-outlined">
          brand_awareness
        </span>
        <span class="material-symbols-outlined plus" >
          add
          </span>
      </div>
      <div class="info">
        <p>Add Prizes</p>
      </div>
      
    </div>
    <div class="card">
      <div class="icon-info">
        <span class="material-symbols-outlined">
          rewarded_ads
        </span>
      </div>
      <div class="info">
        <p>Reports</p>
      </div>
      
    </div>
  </div>
  <CampaignCards></CampaignCards>
</template>
<script setup>
  import CampaignCards from "./CampaignCards.vue";
  // import LoginDialog from "./Dialog/LoginDialog.vue";
</script>
<style scoped>
  .main-container {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 50px;

  }

  .main-container .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    cursor: pointer;
    height: 250px;
    width: 300px !important;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    /* padding: 2rem; */
    align-items: center;
  }

  .material-symbols-outlined {
    font-size: 7rem;
    margin-top: 40px;
    color: 	#00953A;
    /* font-weight: 1000; */
  }
  .info {
    color: #ffff;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: end;

  }
  .icon-info{
    display: flex;
    flex-direction: column;
  }
  .info p {
    padding: 1.5rem;
    font-size: 1.5rem;
    font-weight: 900;
    background: 	#00953A;
    color: #ffff;
    transition: all 1s;
    text-align: center;
   
  }
  .main-container .card:hover p{
    background: #F4C300;
    cursor: pointer;
    color: 	#00953A;
    transition: all 1s;
  }
.plus{
  font-size: 3rem;
  font-weight: bold;
  margin-left: -15px;
}


  @media (max-width:1080px) {
    .main-container .card {
      height: 200px;
      width: 300px;
      
    }

    .info p {
      padding-bottom: 1.5rem;
      font-size: 1rem;
      font-weight: 900;
    }

    .icon-info .material-symbols-outlined:nth-child(1) {
      margin-top: 20px;
      margin-right: -20px;
      font-size: 5rem;


    }
    .icon-info .material-symbols-outlined:nth-child(2) {
      margin-top: 20px;
      margin-left: 5px;
      font-size: 2rem;


    }
    
  }
</style>