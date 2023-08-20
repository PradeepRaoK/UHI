<template>
    <ion-grid style="margin: 15px;">
        <ion-row>
            <ion-col size="6">
                Showing 23 results
            </ion-col>
        </ion-row>
        <ion-row v-for="i in 2" style="display: flex; align-items:center; justify-content:center; border-bottom:0.5px solid black">
            <ion-col size="3">
                <h3>Dolo</h3>
                <p>50mg</p>
            </ion-col>
            <ion-col size="4">
                <ion-button color="medium">In Stock</ion-button>
            </ion-col>
            <ion-col size="4" style="margin-left: 15px;">
                <ion-button color="dark" fill="outline" @click="goToReminder" id="open-custom-dialog" expand="block">Add</ion-button>
            </ion-col>
        </ion-row>

    </ion-grid>
    <ion-modal id="example-modal" ref="modal" trigger="open-custom-dialog" v-if="showModal">
        <div class="wrapper">
          <ion-text style="font-size: 14px; font-weight:400;">Please login to make an appointment</ion-text>
          <ion-button style="max-width: 250px;margin-top: 20px;" @click="goToLogin()">Login</ion-button>
        </div>
    </ion-modal>
</template>

<script setup lang="ts">
    import router from '@/router';
import { IonGrid,IonModal,IonButton,IonText,IonRow,IonCol} from '@ionic/vue';
    import { ref } from 'vue';
    const showModal = ref(false);
    const goToReminder = () => {
        if(localStorage.getItem('user') === 'true'){
            router.push('/mediremind')
        }else{
            showModal.value = true;
        }
    }
    const goToLogin = () => {
        router.push('/login')
        showModal.value = false;
    }
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
  }
  ion-modal {
    --width: 290px;
      --max-width: 270px;
     --height:200px;
      --border-radius: 6px;
      --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
      --margin: 5px;
    }
</style>