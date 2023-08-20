<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-content-wrapper">
        <p style="margin-top: 65px; margin-left: 15px;">Upcoming Appointments</p>
        <Appointments/>
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
      </ion-content>
      <ion-footer>
        <Tabs />
      </ion-footer>
          <ion-grid class="chat-grid">
            <ion-row>
              <ion-col size="9" style="margin-left: 15px;">
                <ion-textarea
                  placeholder="Type something here"
                  :auto-grow="true"
                  v-model="searchMsg"
                  outline="none"
                  class="message-input"
                ></ion-textarea>
              </ion-col>
              <ion-col size="1">
                <ion-button style="height: 50px;" @click="getResponse()">
                  <ion-icon :icon="sendOutline"></ion-icon>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          
    </ion-page>
</template>


<script setup lang="ts">
import Tabs from '../components/Tabs.vue';
import Appointments from '../components/Appointments.vue';
import { IonIcon, IonPage,IonGrid,IonRow,IonButton,IonCol,IonTextarea,IonFooter,IonContent,IonHeader,IonToolbar,IonTitle } from '@ionic/vue';
import { sendOutline } from 'ionicons/icons';
import Response from '../components/Response.vue';
import { ref, Ref } from 'vue';

interface ResponseData {
  sent: string;
  response: string;
  type: string;
}

const showResponse: Ref<boolean> = ref(false);
const responseArray: Ref<ResponseData[]> = ref([]);
const senderMsg: Ref<string> = ref("");
const searchMsg: Ref<string> = ref("");

  const getResponse = async (): Promise<void> => {
  const tempSender: string = searchMsg.value;
  const tempResp: string = "showComponent1";
  const tempData: ResponseData = {
    sent: tempSender,
    response: tempResp,
    type: "type-1"
  };
  responseArray.value.push(tempData);
  searchMsg.value = "";
  };




</script>


<style scoped>
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