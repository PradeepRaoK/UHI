<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button :router-link="isUser?'/family':'/guestp'">
                  <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="initial-content">
            <ion-text>Manage Activity Reminders</ion-text>
            </div>
                <Reminder />
                <div class="card-content" v-for="(card, index) in cardDetails" :key="index" >
                  <ion-card  >
                    <ion-card-header>
                        <ion-card-title><ion-toggle label-placement="end">{{ card.name }}</ion-toggle></ion-card-title>
                        <ion-icon :icon="pencilOutline" id="open-input" expand="block"></ion-icon>
                    </ion-card-header>
                  <ion-card-content>
                    <div class="days-buttons">
                      <ion-button
                      v-for="(button, index) in buttons"
                      :key="index"
                      :class="['button-color', { 'selected': isSelected(index) }]"
                      @click="toggleSelection(index)"
                    >
                      {{ button }}
                    </ion-button>
                    </div>
                    </ion-card-content>
                    <div class="time">
                      <ion-icon :icon="time"></ion-icon>
                      <select v-model="selectedTime" id="dropdown">
                      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
                    </select>
                    </div>
                </ion-card>
                </div>
                <ion-button style="position: fixed;left:245px;bottom:80px;" @click="showModal = true">+Activity</ion-button> 
                <ion-modal :is-open="showModal" @closed="showModal = false" class="card-form">
                  <ion-header>
                    <ion-toolbar>
                      <ion-title>Reminder</ion-title>
                    </ion-toolbar>
                  </ion-header>
                  
                    <ion-item>
                      <ion-input v-model="cardName" placeholder="Reminder Name"></ion-input>
                    </ion-item>
                    <ion-button expand="full" @click="addCard">Add Reminder</ion-button>
                    <ion-button expand="full" color="light" @click="showModal = false">Cancel</ion-button>
                </ion-modal>
        </ion-content>
        <ion-footer>
            <Tabs />
        </ion-footer>
        
    </ion-page>
  </template>

  <script setup lang="ts">
import { IonIcon,IonPage,IonHeader,IonToolbar,IonContent,IonFooter,IonTitle,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonToggle,IonText,IonButton,IonModal,IonInput,IonItem,IonButtons} from '@ionic/vue';
import { pencilOutline , time,arrowBack} from 'ionicons/icons';
  import { ref } from 'vue';
  import Reminder from '../components/Reminder.vue';
  import Tabs from '../components/Tabs.vue';
import router from '@/router';
  const buttons = ref(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
  const selectedButtons = ref<number[]>([]);
  const isUser = localStorage.getItem('user') === 'true';
  const selectedTime = ref(null);
  const timeOptions = ref(['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM']);
  const message = ref('');
  const showModal = ref(false);
  const cardName = ref('');
  const cardDetails = [] as { name: string; }[];

const toggleSelection = (index: number) => {
  const selectedIndex = selectedButtons.value.indexOf(index);
  if (selectedIndex === -1) {
    selectedButtons.value.push(index);
  } else {
    selectedButtons.value.splice(selectedIndex, 1);
  }
};

const addCard = () => {
  cardDetails.push({ name: cardName.value });
  cardName.value = '';
  showModal.value = false;
};

const isSelected = (index: number) => {
  return selectedButtons.value.includes(index);
};

const goBack = () => {
  if(localStorage.getItem('user') === 'true'){
    router.push('/family');
  }else{
    router.push('/guestp');
  }
};
  </script>

  <style scoped>
  
 .initial-content{
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    width:390px;
}
ion-card{
    width: 100%;
    border-bottom: 1px solid black;
    margin-bottom: 5px;
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
    ion-card-header #open-input{
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
</style>