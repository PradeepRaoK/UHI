<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button router-link="/home">
              <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-content>
          <div class="sub">
            <ion-text class="text">Login to avail all the benefits</ion-text>
          <ion-button router-link="/login">Login</ion-button>
          <div class="box">
              <ion-text>Guest User</ion-text>
          </div>
          </div>
          <ion-item>
              <ion-label  router-link="/reminder">
                  Manage activity remainders
              </ion-label>
          </ion-item>
        </ion-content>
        <ion-footer>
          <Tabs/>
        </ion-footer>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonButton,IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonMenuButton,IonButtons,IonText,IonItem,IonFooter,IonIcon } from '@ionic/vue';
  import { arrowBack } from 'ionicons/icons';
  import Tabs from '../components/Tabs.vue';

  </script>
  
  <style>
.sub{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:auto;
    margin: 0 auto;
}
ion-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:auto;
  margin: 0 auto;
}

ion-button{
    width: 124px;
    height: 40px;
    display: block;
    font-weight: 600;
    font-size: 16px;
  }
.text{
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    margin-top: 20px;
 }
.box{
        width: 300px;
        border: 2px solid black;
        border-radius: 3px;
        padding: 20px;
        margin: 30px 0;
        text-align: left;
        font-size: 16px;
        font-weight: 600; 
}
ion-item{
width: 100%;
margin: 0px;
}
</style>

