<template>

   <div class="login-page">
        <img src="../../assets/smart-logo2.png" alt="">
        <h1>Login</h1>
        <div class="shap">

            <div id="triangle-down"></div>
        </div>
        <!-- <div class="flex flex-row items-center"> -->
            
            <input type="email" id="email" class="resize-none focus:outline-none" placeholder="Enter your email*">
            <span class="-mt-3 text-red-600 ">Email did not validate.</span>

            <!-- <span id="talkbubble" class="flex flex-row items-center justify-center">fdegtarewqyr</span> -->
        <!-- </div> -->
        <!-- <div class="flex flex-row items-center"> -->
            <input type="password" id="password" class="resize-none focus:outline-none" placeholder="Enter your password*">
            <span class="-mt-3 text-red-600">Incorrect password.</span>
            <!-- <span id="talkbubble"></span> -->
        <!-- </div> -->
        <router-link to="/reset-password">Forgot password</router-link>
        <button class="btn btn-login">LOGIN</button>
   </div>
</template>
<script setup>

</script>

<style scoped>
    h1{
        text-align: center;
        width: 800px;
        padding: 20px;
        font-size: 3rem;
        color: white;
        background: #04841C;
        /* margin: 0 0 50px 0; */

    }
    .shap{
        width: 800px;
        margin-bottom: 50px;
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
  
    .login-page a{
        font-size: 1.5rem;
        color: black;
        transition: all 0.5s;
    }
    .login-page a:hover{
        color: #FDC400;
        transition: all 0.5s;
    }
    .login-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .login-page input{
        width: 800px;
        margin: 20px;
        padding: 10px 0px 10px 10px;
        border: 2px solid #04841C;
        font-size: 1.5rem;
    }
    .login-page .btn-login{
        width: 200px;
        margin-top: 60px;
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
    .login-page img{
        width: 300px;
        margin-bottom: 30px;
    }
    input::placeholder{
        color: black;
    }
    /* .valid{
        mt
    } */
    
    #talkbubble {
      width: auto;
      padding: 10px;
      height: 50px;
      background: red;
      position: relative;
      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    #talkbubble:before {
      content: "";
      position: absolute;
      right: 100%;
      top: 12px;
      width: 0;
      height: 0;
      border-top: 13px solid transparent;
      border-right: 26px solid red;
      border-bottom: 13px solid transparent;
    }
</style>