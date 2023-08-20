<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button router-link="/appointment">
                  <ion-icon :icon="arrowBack"></ion-icon>
                </ion-button>
              </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content v-if="!paymentStatus.successful">
        <div style="margin-left: 15px; margin-top:90px">
            <p style="font-size: 12px; font-weight:400">Select a payment method</p>
            <div v-for="i in 5" style="padding: 8px 0;">
                <input type="radio" value="i" name="payment" style="margin-right: 10px; padding:5px">Payment method {{i}}<br>
            </div>
        </div>
      </ion-content>
      <ion-content v-else>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh-100px; font-size:16px;">
          <h2 v-if="paymentStatus.processing">Payment processing...</h2>
          <h2 v-else>Payment successful!</h2>
        </div>
      </ion-content>
      <ion-footer>
        <Tabs />
      </ion-footer>
        <ion-grid class="chat-grid" v-if="!paymentStatus.successful">
        <ion-row style="justify-content: center; background-color:#E1E1E1">
            <ion-button @click="processPayment" :disabled="isPaymentProcessing" id="open-loading" style="background-color: #5D5FEF; margin-bottom:15px; margin-top: 15px; width:30%">Pay</ion-button>
            <ion-loading trigger="open-loading" :duration="1000" message="Payment Processing..." spinner="circles"> </ion-loading>
        </ion-row>
        </ion-grid>
    </ion-page>
</template>


<script setup lang="ts">
import { arrowBack } from 'ionicons/icons';
import Tabs from '../components/Tabs.vue';
import { IonPage,IonGrid,IonRow,IonButton,IonFooter,IonContent,IonHeader,IonToolbar,IonLoading,IonIcon,IonButtons } from '@ionic/vue';
import { ref, reactive } from 'vue';
import router from '@/router';

const isPaymentProcessing = ref(false);
const paymentStatus = reactive({
  processing: false,
  successful: false
});

function processPayment() {
  isPaymentProcessing.value = true;
  paymentStatus.processing = true;
  setTimeout(() => {
    isPaymentProcessing.value = false;
    paymentStatus.processing = false;
    paymentStatus.successful = true;
    setTimeout(() => {
      router.push('/upcoming')
    }, 2000);
  }, 2000);
}

</script>


<style scoped>
  .chat-grid {
    width: 100%;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    bottom: 50px;
    margin: 0;
  }
  
</style>