<template>
    <ion-page id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                  <ion-button router-link="/clinic">
                    <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
                  </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="r1">
                <label>
                    <input type="radio" v-model="selectedOption1" value="option1" />
                    Tele-Consultacy
                </label>
                <label>
                    <input type="radio" v-model="selectedOption1" value="option2" />
                    Physical Appointment
                </label>
            </div>
            <ion-text class="text">Select a time slot</ion-text>
            <div class="date">
                <ion-button  color="dark" v-for="button in buttons"
                fill="outline"
          :key="button.id"
          :class="{ 'selected': button.isSelected }"
          @click="selectButton(button.id)">{{ button.label }}</ion-button>
              
            </div>
            <div class="time">
                <ion-grid>
                    <ion-row>
                        <ion-col ><ion-button v-for="t in time" color="dark"
                          fill="outline"
                          :key="t.id"
                          :class="{ 'select': t.isSelected }" @click="toggleButton(t.id)">{{t.label}}</ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </div>
            <ion-text class="text1">Do you need a pickup services?</ion-text>
            <div class="r2">
                <label>
                    <input type="radio" v-model="selectedOption2" value="option1" />
                    Yes
                </label>
                <label>
                    <input type="radio" v-model="selectedOption2" value="option2" />
                    No
                </label>
            </div>
            <div class="location">
                <ion-searchbar placeholder="Search for location"></ion-searchbar>
                <a href=""><ion-icon :icon="locate"></ion-icon>Use my current location</a>
            </div>
        </ion-content>
        <ion-footer>
            <Tabs />
          </ion-footer>
          <ion-grid class="chat-grid">
            <ion-row style="justify-content: center; background-color:#E1E1E1">
                <ion-button router-link="/paymentmethods" style="background-color: #5D5FEF; margin-bottom:15px; margin-top: 15px; width:60%">Proceed to Pay</ion-button>
            </ion-row>
            </ion-grid>
    </ion-page>

</template>

<script lang="ts">
     import { IonIcon,IonPage,IonButton,IonSearchbar,IonGrid,IonRow,IonCol,IonText,IonButtons,IonToolbar,IonHeader,IonContent,IonFooter} from '@ionic/vue';
     import { locate,arrowBack} from 'ionicons/icons';
     import Tabs from '../components/Tabs.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon,IonPage,IonButton,IonSearchbar,IonGrid,IonRow,IonCol,IonText,IonButtons,IonToolbar,IonHeader,IonContent,IonFooter,Tabs},
  data() {
    return {
      locate:locate,
      arrowBack:arrowBack,
      selectedOption1: 'option1',
      selectedOption2: 'option1' // Default selected option
      ,   buttons: [
        { id: 1, label: '12th Jan', isSelected: false },
        { id: 2, label: '13th Jan', isSelected: false },
        { id: 3, label: '14th Jan', isSelected: false }
      ],
      time:[{id:1,label:'09:00AM',isSelected:false},
      {id:2,label:'10:00AM',isSelected:false},
      {id:3,label:'11:00AM',isSelected:false},
      {id:4,label:'12:00AM',isSelected:false},
      {id:5,label:'01:00PM',isSelected:false},
      {id:6,label:'02:00PM',isSelected:false},
      {id:7,label:'03:00PM',isSelected:false},
      {id:8,label:'04:00PM',isSelected:false},
      {id:9,label:'05:00PM',isSelected:false}
      ]
    };
  },
  methods: {
    selectButton(buttonId: number) {
      // Deselect all buttons
      this.buttons.forEach(button => {
        button.isSelected = false;
      });

      // Select the clicked button
      const selectedButton = this.buttons.find(button => button.id === buttonId);
      if (selectedButton) {
        selectedButton.isSelected = true;
      }
    },
    toggleButton(buttonid: number) {
      // Deselect all buttons
      this.time.forEach(t => {
        t.isSelected = false;
      });

      // Select the clicked button
      const selectedBtn = this.time.find(t => t.id === buttonid);
      if (selectedBtn) {
        selectedBtn.isSelected = true;
      }
    },

  }
  });
  </script>

<style>
.selected {
  background-color: #7e8ee7;
  box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);
}
.select{
    background-color: #7e8ee7;
  box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25); 
}
#main-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width:auto;
  margin: 0 auto;
}
.r1{
    margin: 70px 0 20px 20px;
    font-size: 12px;
    font-weight: 400;
}
.r1 label{
  margin-right: 30px;
}
.r2{
    position: relative;
    left: 130px;
    margin-bottom: 20px;
    top: 10px;
    font-size: 12px;
    font-weight: 400;
}
.r2 label{
    margin:5px 0 10px 20px;
    position: relative;
    right: 125px;
}
.text{
    position: relative;
    left: 20px;
    font-size: 12px;
    font-weight: 400;
    
}
.text1{
    position: relative;
    left: 25px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 10px;
}
.date{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.date ion-button{
width:90px;
height:62px;
font-size: 14px;
font-weight: 500;
position: relative;
left: 20px;
}
.time ion-button{
font-size: 16px;
font-weight: 500;
width: 90px;
}
.time{
    margin: 5px;
    position: relative;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.location{
width: 335px;
margin: 10px 0 0 15px;
}
.location a{
    margin-left: 12px;
    font-size: 12px;
    text-decoration: none;
}
.location ion-icon{
    margin-right: 5px;
}
.btn{
    height: 41px;
    width: 291px;
    position: relative;
    top: 25px;
    right: 5px;
   }
   ion-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 150px);
    overflow-y: scroll;
    position: absolute;
    top: 0;
    bottom: 0;
  }
   .chat-grid {/* Adjust this value according to your navbar's height */
    width: 100%;
    z-index: 2;
    position: absolute;
    bottom: 50px;
    margin: 0;
  }
</style>
