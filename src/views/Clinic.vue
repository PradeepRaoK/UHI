<template>
    <ion-page  >
        <ion-header >
            <ion-toolbar>
              <ion-buttons class="button-container">
                <ion-button router-link="/home">
                  <ion-icon slot="icon-only" :icon="arrowBack" style="color: aliceblue;border-radius: 50%;border:1px #E1E1E1 solid;"></ion-icon>
                </ion-button>
              </ion-buttons> 
              <swiper autoplay :options="{ delay: 2000 }">
                <swiper-slide>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                </swiper-slide>
                <swiper-slide>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                </swiper-slide>
                <swiper-slide>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                </swiper-slide>
              </swiper>
            </ion-toolbar>
        </ion-header>
      <ion-content>
        <div class="info">
            <ion-text id="clinic-name">XYZ Dentist clinic</ion-text>
            <ion-text class="text"><ion-icon :icon="starOutline" class="icon"></ion-icon>4.5(356)</ion-text>
            <ion-text class="text"><ion-icon :icon="locationOutline" class="icon"></ion-icon>HSR Layout, Bangalore</ion-text>
            <ion-text class="text"><ion-icon :icon="timeOutline" class="icon"></ion-icon>9:00AM - 5:00PM</ion-text>
            <span>Pickup Available</span>
        </div> 
        <div class="about">
          <ion-text style="color: black;display: block;margin-bottom: 10px;">About</ion-text>
          <ion-text style="font-weight: 400; font-size: 14px;">
            Lorem ipsum dolor sit amet consectetur. Consectetur enim quis curabitur sed cursus urna morbi dolor. Pellentesque ut enim magna 
            hac in. Viverra metus duis ut scelerisque consequat. Egestas nibh et vestibulum libero adipiscing massa.
          </ion-text>
        </div>
      </ion-content>
      <ion-footer>
        <Tabs />
      </ion-footer>
      <ion-grid class="chat-grid">
        <ion-row style="justify-content: center; background-color:#E1E1E1">
            <ion-button @click="bookappointment" id="open-custom-dialog" expand="block" style="background-color: #5D5FEF; margin-bottom:15px; margin-top: 15px; width:60%">
              Book an appointment
            </ion-button>
            <ion-modal v-if="showModal" id="example-modal" ref="modal" trigger="open-custom-dialog">
              <div class="wrapper">
                <ion-text style="font-size: 14px; font-weight:400;">Please login to make an appointment</ion-text>
                <ion-button style="max-width: 250px;margin-top: 20px;" @click="goToLogin">Login</ion-button>
              </div>
            </ion-modal>
        </ion-row>
        </ion-grid>
    </ion-page>
</template>

<script setup lang="ts">
 import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';
  import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonIcon,IonPage,IonButton,IonToolbar,IonText,IonButtons,IonHeader,IonContent,IonFooter,IonGrid,IonRow,IonModal } from '@ionic/vue';
import { starOutline, locationOutline, timeOutline,arrowBack } from 'ionicons/icons';
import Tabs from '../components/Tabs.vue';
import router from '@/router';
import { ref } from 'vue';

const showModal = ref(false);
const bookappointment = () => {
  if(localStorage.getItem('user') === 'true'){
    router.push('/appointment');
    showModal.value = false;
  }else{
    showModal.value = true;
  }
}

const goToLogin = () => {
  router.push('/login');
  showModal.value = false;
}

</script>

<style>
img{
    width: 100%;
    height: 190px;
   object-fit:fill;
  }
.button-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
.info{
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid lightgray;
  font-size: 14px;
  padding: 10px 0;
  padding-inline: 20px;
}
.text{
    font-size: 13px;
    font-weight: 400;
    line-height: 30px;
    color: black;
    
  }
#clinic-name{
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0 5px 0;
}
.icon{
  margin-right:5px ;
  transform: scale(1.2);
}
.about{
  width: 100%;
  padding: 10px 15px; 
  text-align: left;
  font-size: 14px;
}

 .info span{
  padding: 5px;
  font-size: 12px;
    font-weight: 300;
    background-color:aliceblue;
    height: 21px;
    width: 106px;
    text-align: center;
    margin-top: 10px;
   }
   .btn{
    height: 41px;
    width: 291px;
    position: relative;
    top: 50px;
    right: 5px;
   }
   .chat-grid {/* Adjust this value according to your navbar's height */
    width: 100%;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    bottom: 50px;
    margin: 0;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
  }
  ion-modal {
    --width: 290px;
      --max-width: 270px;
     --height:200px;
      --border-radius: 6px;
      --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
      --margin: 5px;
    }
   
  
</style>