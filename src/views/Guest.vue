<template>
    <ion-page>
        <ion-content>
            <div class="guest">
                <div class="box">
                    <ion-text>As a guest you can-</ion-text>
                    <ul>
                        <li><ion-text>Check out doctor timings</ion-text></li>
                        <li><ion-text>Check for product availability</ion-text></li>
                        <li><ion-text>Set activity reminders</ion-text></li>
                    </ul>
                    <ion-text>Login to avail more benefits</ion-text>
                </div>
                <ion-button fill="outline" width="full" router-link="/home" @click="handleGuest">Continue</ion-button>
            </div>
        </ion-content>
        
    </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonText,IonPage,IonContent } from '@ionic/vue';
const handleGuest = () => {
    localStorage.setItem('user', 'false');
};
</script>

<style scoped>
    .guest{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 0 20px;
        margin: 0 auto;
    }
    .box{
        width: 300px;
        border: 1px solid black;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    ul{
        margin: 10px 20px 20px 20px;
    }
    ion-button{
        width: 300px;
        margin: 20px 0;
    }
</style>