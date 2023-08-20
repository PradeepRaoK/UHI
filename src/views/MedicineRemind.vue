<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
              <ion-buttons slot="start">
                <ion-back-button default-href="/home" />
              </ion-buttons>              
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
        <ion-content>
          <div class="initial-content">
            <ion-text>Manage Medicine reminders</ion-text>
            </div>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><ion-toggle label-placement="end" >Dolo 650</ion-toggle></ion-card-title>
                        <ion-icon :icon="pencilOutline"></ion-icon>
                    </ion-card-header>
    
                    <div class="time">  
                        <select v-model="selectedTime" id="dropdown" class="duration">
                        <option disabled value="">Repeat duration</option>
                      <option v-for="time in duration" :key="time" :value="time">{{ time }}</option>
                    </select>
                      <ion-icon :icon="time"></ion-icon>
                      <select v-model="selectedTime" id="dropdown">
                        <option disabled value="">Time</option>
                      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
                    </select>
                    
                    </div>
                </ion-card>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><ion-toggle label-placement="end" >Panadol</ion-toggle></ion-card-title>
                        <ion-icon :icon="pencilOutline"></ion-icon>
                    </ion-card-header>
    
                    <div class="time">
                        <select v-model="selectedTime" id="dropdown" class="duration">
                        <option disabled value="">Repeat duration</option>
                      <option v-for="time in duration" :key="time" :value="time">{{ time }}</option>
                    </select>
                      <ion-icon :icon="time"></ion-icon>
                      <select v-model="selectedTime" id="dropdown" >
                        <option disabled value="">Time</option>
                      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
                    </select>
    
                    </div>
                </ion-card>
                <div v-for="(card, index) in cardDetails" :key="index">
                <ion-card>
                  <ion-card-header>
                      <ion-card-title><ion-toggle label-placement="end" >{{ card.name }}</ion-toggle></ion-card-title>
                      <ion-icon :icon="pencilOutline"></ion-icon>
                  </ion-card-header>
  
                  <div class="time">
                      <select v-model="selectedTime" id="dropdown" class="duration">
                      <option disabled value="">Repeat duration</option>
                    <option v-for="time in duration" :key="time" :value="time">{{ time }}</option>
                  </select>
                    <ion-icon :icon="time"></ion-icon>
                    <select v-model="selectedTime" id="dropdown" >
                      <option disabled value="">Time</option>
                    <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
                  </select>
  
                  </div>
              </ion-card>
              </div>
                <ion-button @click="showModal = true">+Reminder</ion-button>
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

  <script lang="ts">
     import { IonBackButton, IonIcon,IonPage,IonFooter,IonContent,IonButton,IonCard,IonCardHeader,IonCardTitle,IonToggle,IonText,IonHeader,IonToolbar,IonButtons,IonModal,IonItem,IonInput,IonTitle} from '@ionic/vue';
     import Tabs from '../components/Tabs.vue';
import { pencilOutline , time,arrowBack } from 'ionicons/icons';
  import { defineComponent } from 'vue';


  export default defineComponent({
    components: { IonBackButton, IonIcon,IonPage,IonFooter,IonContent,IonButton,IonCard,IonCardHeader,IonCardTitle,IonToggle,IonText,IonHeader,IonToolbar,IonButtons,Tabs,IonModal,IonItem,IonInput,IonTitle},
  data() {
    return {
      pencilOutline:pencilOutline,time:time,arrowBack:arrowBack,
      selectedTime:'',
      timeOptions: ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'],
      duration: ['Every 2 hours', 'Every 6 hours', 'Everyday', 'Every 2 days'],
      showModal: false,
      cardName: '',
      cardDetails:[] as {name:String}[],
    };
  },
  methods: {
    addCard(){
      this.cardDetails.push({name:this.cardName});
      this.cardName = '';
      this.showModal = false;
    },
    }
  },
  );
  </script>


<style scoped>

 .initial-content{
    margin: 10px;
    padding: 15px;
    text-align: left;
    font-size: 12px;
    font-weight: 500;
    width:auto;
}
ion-card{
    width: 310px;
    padding: 0;
    margin: 0 20px 0 10px;
    border-bottom: 1px solid black;
} 
ion-card-header ion-icon{
    width: 20px;
    height: 20px;
    position: relative;
    left:310px;
    bottom: 20px;
}
.time {
    text-align: center;
    margin-bottom: 5px;
    position: relative;
    bottom: 20px;
}

 .time select{
      height: 28px;
      width: 100px;
 }
 .time .duration{
    width:144px;
    margin-right: 20px;
    margin-left: 0;
 }

 .time ion-icon{
      width: 14px;
      height: 14px;
      margin-right: 5px;
    }
ion-button{
    width: 129px;
    height: 47px;
    margin: 15px 0 17px 0;
    font-weight: 400;
    font-size: 16px;
    position: relative;
    top: 180px;
    left:100px;
    background-color:#5D5FEF;
    border-radius: 3px;
}
</style>