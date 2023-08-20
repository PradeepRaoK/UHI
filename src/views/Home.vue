<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-content-wrapper">
        <p class="text">Login to make appointments</p>
        <div class="response-section">
          <div class="inner-content" v-for="(each, i) in responseArray" :key="i">
            <div class="senders-message">
              <p style="text-align: right; margin-right: 25px;">{{ each.sent }}</p>
            </div>
            <div class="response-message">
              <Response :each="each" />
            </div>
          </div>
        </div>
        <div v-if="displayMeds.valueOf()">
          <Meds/>
        </div>
      </ion-content>
      <ion-footer>
        <Tabs />
      </ion-footer>
          <ion-grid class="chat-grid">
            <ion-row>
              <ion-col size="9" style="margin-left: 10px;">
                <ion-textarea
                  placeholder="Type something here"
                  :auto-grow="true"
                  v-model="searchMsg"
                  outline="none"
                  class="message-input"
                ></ion-textarea>
              </ion-col>
              <ion-col size="1" style="transform: scale(0.9); position: relative;left:5px;bottom: 7px;">
                <ion-button style="height: 30px;" @click="getResponse()">
                  <ion-icon :icon="sendOutline"></ion-icon>
                </ion-button>
              </ion-col>
              <ion-col size="1" style="transform: scale(0.9);position: relative;top:28px;right: 25px;">
                <ion-button id="open-loading" style="height: 30px;" @click="getVoice()">
                  <ion-loading trigger="open-loading" message="Listening..." duration="5000" spinner="dots"></ion-loading>
                  <ion-icon :icon="micOutline"></ion-icon>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
    </ion-page>
</template>


<script setup lang="ts">
import Tabs from '../components/Tabs.vue';
import { IonIcon, IonPage,IonGrid,IonRow,IonButton,IonCol,IonTextarea,IonFooter,IonContent,IonHeader,IonToolbar,IonTitle,IonLoading } from '@ionic/vue';
import { sendOutline,ellipse, micOutline } from 'ionicons/icons';
import Response from '../components/Response.vue';
import { ref, Ref } from 'vue';
import Meds from '../components/Meds.vue';

interface ResponseData {
  sent: string;
  response: string;
  type: string;
}

const showResponse: Ref<boolean> = ref(false);
const responseArray: Ref<ResponseData[]> = ref([]);
const senderMsg: Ref<string> = ref("");
const searchMsg: Ref<string> = ref("");

const displayMeds: Ref<boolean> = ref(false);

    const getResponse = async (): Promise<void> => {
      if(searchMsg.value === "dolo") {
        displayMeds.value = true;
        searchMsg.value = "";
      }else{
    const tempSender: string = searchMsg.value;
    const tempResp: string = "showComponent1";
    const tempData: ResponseData = {
      sent: tempSender,
      response: tempResp,
      type: "type-1"
    };
    
    responseArray.value.push(tempData);
    searchMsg.value = "";
  }
    };
    const getVoice = async (): Promise<void> => {
    const tempSender: string = "Hello";
    const tempResp: string = "showComponent1";
    const tempData: ResponseData = {
      sent: tempSender,
      response: tempResp,
      type: "type-1"
    };
    setTimeout(() => {  
      responseArray.value.push(tempData);
     
      }, 6000);
    
      searchMsg.value = "";  
    };




</script>


<style scoped>
  ion-card-header{
      text-align: center;
      font-weight: bolder;
  }
  .text{
      text-align: center;
      margin: 20px;
  }
  .message-input{
    max-height: 150px; /* Adjust the maximum height as per your requirement */
    overflow: auto;
    resize: none;
    border: 2px solid #5D5FEF;
    padding-left: 1px;
  }
  .inner-content{
    margin-bottom: 8px;
  }
  ion-content {
    height: calc(100vh - 150px);
    overflow-y: scroll;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .response-section {
    flex-grow: 1;
    overflow-y: auto;
    padding: 8px;
  }
  .chat-grid {/* Adjust this value according to your navbar's height */
    width: 100%;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    bottom: 50px;
  }

  
  
</style>