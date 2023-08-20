<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title><ion-toggle label-placement="end">Walking</ion-toggle></ion-card-title>
            <ion-icon :icon="pencilOutline" id="open-input" expand="block"></ion-icon>
        </ion-card-header>
      <ion-card-content>
        <div class="days-buttons">
          <ion-button
          v-for="(button, index) in buttons1"
          :key="index"
          :class="['button-color', { 'selected': isSelected1(index) }]"
          @click="toggleSelection1(index)"
        >
          {{ button }}
        </ion-button>
        </div>
        </ion-card-content>
        <div class="time">
          <ion-icon :icon="time"></ion-icon>
          <select v-model="selectedTime1" id="dropdown">
          <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
        </select>
        </div>
    </ion-card>
    <ion-card>
        <ion-card-header>
            <ion-card-title><ion-toggle label-placement="end" >Exercising</ion-toggle></ion-card-title>
            <ion-icon :icon="pencilOutline"></ion-icon>
        </ion-card-header>
      <ion-card-content>
        <div class="days-buttons">
          <ion-button
          v-for="(button, index) in buttons2"
          :key="index"
          :class="['button-color', { 'selected': isSelected2(index) }]"
          @click="toggleSelection2(index)"
        >
          {{ button }}
        </ion-button>
          </div>
        </ion-card-content>
        <div class="time">
          <ion-icon :icon="time"></ion-icon>
          <select v-model="selectedTime2" id="dropdown">
          <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
        </select>
        </div>
    </ion-card>

    <ion-modal ref="modal" trigger="open-input" :initial-breakpoint="0.25" :breakpoints="[0, 0.25, 0.5, 0.75]">
      <ion-input v-model="message" placeholder="edit me" />
      <ion-button @click="addName" style="margin-bottom:auto">Edit</ion-button>
    </ion-modal>
</template>

<script setup lang="ts">

import { IonIcon, IonButton, IonCard, IonCardHeader, IonCardTitle, IonToggle, IonCardContent, IonModal, IonInput } from '@ionic/vue';
import { pencilOutline, time } from 'ionicons/icons';
import { ref } from 'vue';

const selectedTime1 = ref<string | null>(null);
const selectedTime2 = ref<string | null>(null);
const timeOptions = ref<string[]>(['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM']);
const message = ref('');
const addName = () => {
  (document.getElementsByTagName('ion-modal')[0] as HTMLIonModalElement).dismiss();
  (document.getElementsByTagName('ion-toggle')[0] as HTMLIonToggleElement).innerText = message.value;
};

const buttons1 = ref<string[]>(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
const selectedButtons1 = ref<number[]>([]);

const buttons2 = ref<string[]>(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
const selectedButtons2 = ref<number[]>([]);

const toggleSelection1 = (index: number) => {
  const selectedIndex = selectedButtons1.value.indexOf(index);
  if (selectedIndex === -1) {
    selectedButtons1.value.push(index);
  } else {
    selectedButtons1.value.splice(selectedIndex, 1);
  }
};

const toggleSelection2 = (index: number) => {
  const selectedIndex = selectedButtons2.value.indexOf(index);
  if (selectedIndex === -1) {
    selectedButtons2.value.push(index);
  } else {
    selectedButtons2.value.splice(selectedIndex, 1);
  }
};

const isSelected1 = (index: number) => {
  return selectedButtons1.value.includes(index);
};

const isSelected2 = (index: number) => {
  return selectedButtons2.value.includes(index);
};


</script>

<style>
#main-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width:390px;
    margin: 0 auto;
  }
  .text{
    font-size: 12px;
    font-weight: 500;
 }
 .initial-content{
    margin: 5px;
    padding: 10px 5px;
    text-align: left;
    font-size: 13px;
    font-weight: 500;
    width:390px;
}
ion-card{
    width: 100%;
    padding: 0;
    margin: 0 0 5px 0;
    border-bottom: 1px solid black;

}
#main-content>ion-button{
    width: 129px;
    height: 47px;
    margin: 15px 0 17px 0;
    font-weight: 400;
    font-size: 16px;
    position: relative;
    top: 300px;
    left:110px;
    border-radius: 3px;
  }

  .days-buttons {
      display: flex;
      justify-content:center;
      position: absolute;
      left: 60px;
      bottom: 15px;
    }

    .days-buttons ion-button {
      max-width: 24px;
      max-height: 24px;
      font-size: 10px;
      border-radius: 50%;
    }
    ion-card-header ion-icon{
    width: 20px;
    height: 20px;
    position: relative;
    left:280px;
    bottom: 20px;
    }
    .time select{
      position:relative;
      left: 85px;
      width:86px;
      height: 28px;
      margin-bottom: 10px;
    }

    .time ion-icon{
      width: 14px;
      height: 14px;
      position:relative;
      left: 80px;
    }

    .button-color {
      --background: var(--ion-color-light);
      --color: var(--ion-color-dark)
    }
    
    .button-color.selected {
      --background: var(--ion-color-primary);
    }
    
    .days-buttons {
      display: flex;
      justify-content: center;
    }
    
    .days-buttons ion-button {
      margin: 2px;
    }
    
    .days-buttons ion-button[selected] {
      background-color: var(--background);
      color: var(--ion-color-light);
    }
    ion-toggle .toggle-label {
      margin-inline-start: auto;
    }
    
</style>