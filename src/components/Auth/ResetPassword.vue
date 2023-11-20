<template>
    
    <div class="reset-password">
         <img src="../../assets/smart-logo2.png" alt="">
         <h1>Reset password</h1>
         <input type="password" id="password" placeholder="Enter new password*">
         <input type="password" id="password" placeholder="Confirm password*">
         <div class="btn-control">
            <router-link to="/login"><button class="btn btn-reset-password">Cancel</button></router-link>
            <button class="btn btn-reset-password">Submit</button>
         </div>
        
    </div>
 </template>
 
 <style scoped>
     h1{
         text-align: center;
         width: 800px;
         padding: 20px;
         font-size: 2.5rem;
         color: white;
         background: #04841C;
         margin: 0 0 50px 0;
 
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
         margin: 20px;
         padding: 10px 0px 10px 10px;
         border: 2px solid #04841C;
         font-size: 1.5rem;
     }
     .btn-control{
        width: 800px;
        gap: 20px;
        display: flex;
        flex-direction: row;
        justify-content: end;
     }
     .reset-password .btn-reset-password{
         width: 200px;
         margin-top: 20px;
         padding: 10px;
         color: white;
         background: #04841C;
         font-size: 1.5rem;
        transition: all 0.5s;

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
        color: black;
    }
 </style>