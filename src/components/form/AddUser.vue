<template>
    <div class="register-form">
        <form action="" class="register" @submit.prevent="register()">
            <img src="../assets/smart-logo2.png" alt="">
            <h1>Register</h1>
            <div class="add-user-form">
                <div class="user-name">
                    <div>
                        <input type="text" placeholder="First Name*"  v-model="first_name">
                        <span :class="pathName == 'first_name' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span>
                        
                        <!-- <span>fjioeruwtyor</span> -->
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name*" v-model="last_name">
                        <span :class="pathName == 'last_name' ? '-mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span>
                    </div>
                </div>
                <div class="email-address">
                    <input type="email" id="email" class="resize-none focus:outline-none" placeholder="Enter your email*" v-model="email">
                    <span :class="pathName == 'email' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span>
                </div>
                <div class="pass">
                    <div>
                        <input  type="password" id="password" class="resize-none focus:outline-none" placeholder="Enter your password*" v-model="password">
                        <span :class="pathName == 'password' ? 'mt-3 validation-message':'mt-3 validation-message-none'">{{invalidMessage}}.</span>
                    </div>
                    <div>
                        <input type="password" id="password" class="resize-none focus:outline-none" placeholder="Confirm Password*" v-model="confirm_password">
                        <span class="passConfirm mt-3" v-if="passConfirm">Confirm password is not correct.</span>
                    </div>
                </div>
                <div class="role">
                    <select name="role" id="" v-model="role">
                        <option value="admin">admin</option>
                        <option value="standard">standard</option>
                        <option value="guest">guest</option>
                    </select>
                </div>
                <button class="btn btn-register" @click="register">Submit</button>
            </div>
        </form>
         
    </div>
 </template>
 <script setup>
 import {ref } from 'vue';
 import axios from 'axios';
 import {useRouter} from 'vue-router';

 const router = useRouter();

 const first_name = ref('');
 const last_name = ref('');
 const email = ref('');
 const password = ref('');
 const confirm_password = ref('');
 const role = ref('');
 const alertMessage = ref('');
 const alert  = ref(false);
 const errorCode = ref('');
 const invalidMessage = ref('');
const pathName = ref('');
const passConfirm = ref(false);

 const register = ()=>{ 
      let data = {
         'first_name':first_name.value,
         'last_name':last_name.value,
         'email':email.value,
         'password':password.value,
         'role':role.value
     }
     if(password.value == confirm_password.value){
        axios.post('http://192.168.11.117:4545/user/register',data , {withCredentials: true, validateStatus: () => true})
        .then((res) => {
            console.log(res.status);
        if (res.status == 200) {
            alert.value = true;
            alertMessage.value = res.data.data.message;
            router.push('/manage-user')
        }
        else {
              errorCode.value = res.data.code;
              console.log(errorCode.value);
              if (errorCode.value === 400) { 
                
                  pathName.value = res.data.error.details[0].path[0];
                  invalidMessage.value = res.data.error.details[0].message;
                  console.log( pathName.value);
                  console.log(invalidMessage.value);
                  alert('')
              }
          }
        }).catch(err=>{
            console.error(err);
        })
     }else{
        passConfirm.value = true
}
    
 }
 </script>
 
 <style scoped>
     h1{
         text-align: center;
         width: 800px;
         padding: 20px;
         font-size: 3rem;
         color: white;
         background: #009639;
         z-index: 10;
     }
     .add-user-form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #e4dfdf;
        align-items: center;
        margin-top: -50px;
        padding: 100px 100px 50px 100px;
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
       border-top: 50px solid #009639;
     }
   
     .register-form a{
         font-size: 1.5rem;
         color: black;
         transition: all 0.5s;

     }
     .register-form a:hover{
         color: #FDC400;
         transition: all 0.5s;
     }
     .register-form {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         height: 100vh;
         
     }
     .register{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         background: white;
 
     }
   .user-name,.email-address,.pass{
         width: 900px;
         display: flex;
         flex-direction: row;
     }
     .user-name div:nth-child(1), .user-name div:nth-child(2){
        display:flex;
        flex-direction: column;
        width: 100%;
     }
    
     .user-name input, .email-address input{
         margin: 20px 20px 0px 20px;
         padding: 10px 0px 10px 10px;
         border: 2px solid #009639;
         font-size: 1.5rem;
         background: #fff;
     }
     .email-address{
        display: flex;
        flex-direction: column;
     }
     span{
        color: #ff0000;
        margin: auto;
     }
    .email-address input, .pass input{
         margin: 20px 20px 0px 20px;
         padding: 10px 0px 10px 10px;
         border: 2px solid #009639;
         background: #fff;
         font-size: 1.5rem;
     }
     
     .register-form .btn-register{
         width: 200px;
         margin-top: 60px;
         padding: 15px;
         color: white;
         background: #009639;
         font-size: 1.5rem;
         transition: all 0.5s;
     }
     .btn:hover{
         background: #FDC400;
         color: #009639;
         transition: all 0.5s;
      }
     .register-form img{
         width: 300px;
         margin-bottom: 30px;
     }
     input::placeholder{
         color: rgba(0, 0, 0, 0.466);
     }

     .pass div:nth-child(1), .pass div:nth-child(2){
        display:flex;
        flex-direction: column;
        width: 100%;
     }
     .validation-message{
      color: #B52555;
      opacity: 1;
   }
   .passConfirm{
    color: #B52555;
   }
   .validation-message-none{
      opacity: 0;
   }
 </style>