<template>
    <ion-page >
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button router-link="/family">
              <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <div class="profile-card">
            <ion-grid>
                <ion-row class="ion-padding">
                    <ion-col size="3">
                        <ion-thumbnail style="margin-inline-end: 20px;">
                            <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                        </ion-thumbnail>
                    </ion-col>
                    <ion-col size="9">
                        <ion-row style="font-weight:600; font-size:16px; padding-bottom:5px;">Sandeep Kondana</ion-row>
                        <ion-row style="font-weight: 400; font-size:12px; padding-bottom:10px">Age: 25 years</ion-row>
                        <ion-row style="font-weight: 400; font-size:12px;">JSUWITHGISUDIF</ion-row>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <div class="navs">
            <ion-grid>
                <ion-row class="navs-buttons">
                    <ion-col v-for="(item, index) in navslist" :key="index">
                        <ion-button
                          shape="round"
                          fill="outline"
                          :color="selectedButton === index ? 'dark' : 'medium'"
                          @click="selectButton(index)"
                        >
                          {{ item }}
                        </ion-button>
                      </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <div class="container">
            <ion-grid v-for="i in 2" style="border: 0.5px solid gray; margin: 10px; padding:5px;" v-if="appointments">
                <ion-row class="card-container">
                    <ion-col size="6" style="font-weight:600; font-size:14px;">
                        12th Jan, 9:00AM
                    </ion-col>
                    <ion-col size="6" style="font-weight: 400; font-size:12px;">
                        <span>
                            <ion-icon :icon="location"></ion-icon>
                        </span>
                        Physical appointment
                    </ion-col>
                </ion-row>
                <ion-row class="card-container">
                    <ion-col size="6" style="font-weight:400; font-size:16px;">
                        Lorem dentist clinic
                    </ion-col>
                    <ion-col size="6" style="font-weight: 400; font-size:12px;">
                        <ion-button color="light" style="font-weight: 300; font-size:12px">
                            Pickup Service
                        </ion-button>
                    </ion-col>
                </ion-row>
                <ion-row style="font-weight: 400; font-size:12px; margin:5px;">
                    <span>
                        <ion-icon :icon="location"></ion-icon>
                    </span>
                    HSR Layout, Bangalore
                </ion-row>
                <ion-row class="card-container" style="border-top: 0.5px solid gray;">
                    <ion-col size="6" style="font-weight:600; font-size:14px; color: #5D5FEF" id="open-modal" expand="block">
                        <span>
                            <ion-icon :icon="document"></ion-icon>
                        </span>
                        <ion-text>View prescription</ion-text>
                    </ion-col>
                    <ion-col size="6" style="font-weight: 400; font-size:12px;">
                        <ion-button fill="outline" style="font-weight: 300; font-size:12px">
                            <ion-icon :icon="download"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid v-else>
                <Reminder/>
            </ion-grid>
        </div>
        <ion-modal ref="modal" trigger="open-modal" :initial-breakpoint="0.55" :breakpoints="[0, 0.25, 0.55, 0.75]">
          <ion-content class="ion-padding">
              <p style="margin-left: 15px;">Prescription</p>
              <ion-list>
                <ion-item>
                  <ion-label>
                    <h2>Panadol</h2>
                    <p>Take twice a day</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>Aspirin</h2>
                    <p>Take twice a day</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>Ibuprofen</h2>
                    <p>Take twice a day</p>
                  </ion-label>
                </ion-item>
              </ion-list>
          </ion-content>
        </ion-modal>
      </ion-content>
      <ion-footer>
        <Tabs />
      </ion-footer>
          
    </ion-page>
</template>


<script setup lang="ts">
import { arrowBack, document, download, location } from 'ionicons/icons';
import Tabs from '../components/Tabs.vue';
import { IonPage,IonFooter,IonContent,IonHeader,IonToolbar,IonButtons,IonThumbnail,IonGrid,IonRow,IonCol,IonIcon,IonButton,IonModal,IonList,IonItem,IonLabel,IonText } from '@ionic/vue';
import { ref } from 'vue';
import Reminder from '../components/Reminder.vue'

const navslist = ['Appointments','Reminders','Health Cards','Reports','Insurance']
const appointments = ref(true)
const reminders = ref(false)


const selectedButton = ref(0)

const selectButton = (index: number) => {
  selectedButton.value = index
  if(index==0){
        appointments.value = true
        reminders.value = false
        
    }else{
        appointments.value = false
        reminders.value = true
    }
}

</script>


<style scoped>
  ion-card-header{
      text-align: center;
      font-weight: bolder;
  }
  ion-content{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100%;
  }
  .profile-card{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  }
  .profile-card ion-row.ion-padding {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
  }
  .navs-buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-x: scroll;
    width: 100%;
    flex-wrap: nowrap;
  }
  .card-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .navs-buttons ion-button[fill="outline"][color="dark"] {
    --background: var(--ion-color-dark);
    --color: var(--ion-color-light);
  }
</style>