<template>
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="home" href="/home">
              <ion-icon aria-hidden="true" :icon="ellipse" />
              <ion-label>Home</ion-label>
            </ion-tab-button>
    
            <ion-tab-button tab="profile" :href=" isUser ? '/family' : '/guestp' ">
              <ion-icon aria-hidden="true" :icon="ellipse" />
              <ion-label>Profile</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  import { ellipse } from 'ionicons/icons';
  const isUser = localStorage.getItem('user') === 'true';


</script>

<style>
    
</style>