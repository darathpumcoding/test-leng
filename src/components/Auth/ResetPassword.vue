<template>
    
    <div class="reset-password">
         <img src="../../assets/smart-logo2.png" alt="">
         <h1>Reset Password</h1>
         <div class="reset-password-form">
                <input type="password" id="password" class="resize-none focus:outline-none" placeholder="Enter new password*">
                <input type="password" id="password" class="resize-none focus:outline-none" placeholder="Confirm password*">
                <div class="btn-control">
                    <router-link to="/login">
                        <BaseButton
                        type="primary-btn"
                        :loading="loading"
                        @click="login"
                        class="btn-reset-password"
                        >
                       
                      Cancel</BaseButton></router-link>
                    <BaseButton
                    type="primary-btn"
                    :loading="loading"
                    @click="login"
                    class="btn-reset-password"
                     >
                     Submit</BaseButton>
                </div>
            </div>
        
    </div>
 </template>
 <script setup>
    import BaseButton from "../widget/BaseButton.vue";

 </script>
 <style scoped>
     h1{
         text-align: center;
         width: 800px;
         padding: 20px;
         font-size: 2.5rem;
         color: white;
         background: #04841C;
         z-index: 10;
 
     }
     .shap{
        width: 800px;
        margin-bottom: 50px;
    }
    .reset-password-form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 100px 100px 50px 100px;
        background: #e4dfdf;
        margin-top: -50px;
    }
    #triangle-down {
        margin-top: 0;
    text-align: start;
      width: 0;
      height: 0;
      border-left: 0px solid transparent;
      border-right: 50px solid transparent;
      border-top: 50px solid #04841C;
    }
     .reset-password a{
         font-size: 1.5rem;
         color: black;
     }
     .reset-password {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         height: 100vh;
     }
     .reset-password input{
         width: 800px;
         margin: 30px;
         padding: 10px 0px 10px 10px;
         border: 2px solid #04841C;
         font-size: 1.5rem;
     }
     .btn-control{
        width: 800px;
        gap: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 2rem;
     }
     .reset-password .btn-reset-password{
     
         width: 200px;
         height: 60px;
         margin-top: 40px;
         padding: 1rem;
         font-size: 1.5rem;
         color: white;
         font-weight: 400;

     }
     .btn:hover{
        background: #FDC400;
        color: #04841C;
        transition: all 0.5s;
     }
     .reset-password img{
         width: 300px;
         margin-bottom: 30px;
     }
     input::placeholder{
        color: rgba(0, 0, 0, 0.466);
    }
 </style>