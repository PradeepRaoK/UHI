<template>
    <ion-page>
      <ion-content>
        <div class="otp">
          <ion-text class="text">Enter the OTP sent to your phone number</ion-text>
          <ion-input label="Enter OTP" label-placement="floating" fill="outline" placeholder="xxxxxxxxxx"></ion-input>
          <ion-button class="btn" router-link="/home" @click="goToHome()">Verify OTP</ion-button>
        </div>
      </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
  import { IonInput, IonButton, IonText,IonPage,IonContent } from '@ionic/vue';
  const goToHome = () => {
      localStorage.setItem('user', 'true');
  };
</script>

<style scoped>
  .otp{
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
    font-size: 12px;
    font-weight: 400;
  }
</style>