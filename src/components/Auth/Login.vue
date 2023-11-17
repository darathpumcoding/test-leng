<template>

   <div class="login-page">
        <img src="../../assets/smart-logo2.png" alt="">
        <h1>Login</h1>
        <input type="email" id="email" placeholder="Enter your email*">
        <input type="password" id="password" placeholder="Enter your password*">
        <router-link to="/reset-password">Forgot password</router-link>
        <button class="btn btn-login">LOGIN</button>
   </div>
</template>

<style scoped>
    h1{
        text-align: center;
        width: 800px;
        padding: 20px;
        font-size: 3rem;
        color: white;
        background: #04841C;
        margin: 0 0 50px 0;

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
        border: 3px solid #04841C;
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
</style>