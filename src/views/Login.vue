<template>
    <ion-page>
      <ion-content>
        <div class="login">
          <ion-text class="text">Login with your phone number</ion-text>
          <ion-input label="Phone number" label-placement="floating" fill="outline" placeholder="xxxxxxxxxx"></ion-input>
          <ion-button router-link="/otp">Login</ion-button>
          <div>
            <hr/>
          </div>
          <ion-button fill="outline">Login with Ayushman Bharat</ion-button>
          <ion-text class="guest-link" router-link="/guest">Continue as guest</ion-text>
          <ion-text class="normal-text">Don't have an account?</ion-text>
          <ion-text class="register-link">Register</ion-text>
        </div>
      </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
  import { IonInput, IonButton, IonText,IonPage,IonContent } from '@ionic/vue';
</script>

<style scoped>
  .login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
    margin: 0 auto;
  }
  ion-input{
    width: 300px;
    margin: 10px 0;
  }
  ion-button{
    width: 300px;
    margin: 10px 0;
  }
  .text{
    font-size: 16px;
    font-weight: 400;
  }
  .normal-text{
    font-size: 16px;
    font-weight: 400;
  }
  .guest-link{
    margin: 30px 0;
    color: #5D5FEF;
    cursor: pointer;
  }
  .register-link{
    margin: 10px 0;
    color: #5D5FEF;
  }
</style>