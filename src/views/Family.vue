<template>
<ion-page id="main-content"> 
    <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button router-link="/home">
              <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
            </ion-menu-button>
          </ion-buttons>
          <ion-title>My family</ion-title>
        </ion-toolbar>
     </ion-header> 
     <ion-content class="ion-padding">
      <ion-card>
        <div class="img-name" style="cursor: pointer;">
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <div class="details">
            <ion-card-title router-link="/profile">Sandeep Kondana</ion-card-title>
            <ion-card-subtitle router-link="/profile">Age: <span>25 years</span></ion-card-subtitle>
              <ion-text router-link="/profile">Here's a small text description.</ion-text>  
            </div>
        </div>
            <div class="btn">
                <ion-button color="light" id="open-custom-dialog" expand="block"><ion-icon slot="start" :icon="logoGoogle"></ion-icon>Google fit</ion-button>
                <ion-button color="light" id="open-custom-dialogg" expand="block"><ion-icon slot="start" :icon="logoApple"></ion-icon>Apple health</ion-button>
            </div>
        </ion-card> 
      <div class="linked">
        <ion-text>Linked Accounts</ion-text> 
      </div>
      <ion-card v-for="(card, index) in cardDetails" :key="index" class="fam-acc">
  <div class="family">
    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <div class="details">
      <ion-card-title>{{ card.name }}</ion-card-title>
      <ion-card-subtitle>Age: <span>{{ card.age }} years</span></ion-card-subtitle>
      <ion-text>{{ card.description }}</ion-text>
      <ion-button class="remove-button" color="light" @click="removeCard(index)" style="position: absolute;left:280px;bottom: 65px;color: black;">
          <ion-icon :icon="close"></ion-icon>
        </ion-button>
    </div>
  </div>
</ion-card>
        <ion-button class="member" @click="showModal = true">+ Member</ion-button>
        
    <!-- linked accounts Modal -->
    <ion-modal :is-open="showModal" @closed="showModal = false" class="card-form">
      <ion-header>
        <ion-toolbar>
          <ion-title>Link Accounts</ion-title>
        </ion-toolbar>
      </ion-header>
      
        <ion-item>
          <ion-input v-model="cardName" placeholder="Name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input v-model.number="cardAge" placeholder="Age"></ion-input>
        </ion-item>
        <ion-item>
          <ion-textarea v-model="cardDescription" placeholder="Description"></ion-textarea>
        </ion-item>
        <ion-button expand="full" @click="addCard">Add Card</ion-button>
        <ion-button expand="full" color="light" @click="showModal = false">Cancel</ion-button>
    </ion-modal>
        <ion-modal id="example-modal1" ref="modal" trigger="open-custom-dialog">
                  <div class="wrapper">
                    <h5 style="font-weight: 600;">
                     Connect Google fit
                    </h5>
                    <ion-text style="font-size: 12px;">Get more insights into your health</ion-text>
                    <ion-button style="max-width: 250px;margin-top: 20px;">Google fit</ion-button>
                  </div>
                </ion-modal>
                <ion-modal id="example-modal2" ref="modal" trigger="open-custom-dialogg">
                  <div class="wrapper">
                    <h5 style="font-weight: 600;">
                     Connect Apple Health
                    </h5>
                    <ion-text style="font-size: 12px;">Get more insights into your health</ion-text>
                    <ion-button style="max-width: 250px;margin-top: 20px;">Apple Health</ion-button>
                  </div>
                </ion-modal>
  </ion-content>
  <ion-footer>
    <Tabs />
  </ion-footer>
</ion-page>

</template>

<script lang="ts">
import Tabs from '../components/Tabs.vue';
import { IonIcon,IonModal,IonFooter,IonPage,IonHeader,IonContent,IonButton,IonText,IonCard,IonCardTitle,IonCardSubtitle,IonToolbar,IonTitle,IonMenuButton,IonButtons, IonInput, IonItem, IonTextarea,IonMenu } from '@ionic/vue';
import { logoGoogle, logoApple, close, arrowBack} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components:{IonModal,IonIcon,IonFooter,IonPage,IonHeader,IonContent,Tabs,IonButton,IonText,IonCard,IonCardTitle,IonCardSubtitle,IonToolbar,IonTitle,IonMenuButton,IonButtons,IonItem,IonTextarea,IonInput,IonMenu},
  data() {
    return {
      showModal: false,
      cardName: '',
      cardAge: '',
      cardDescription: '',
      arrowBack:arrowBack,
      logoApple:logoGoogle,
      logoGoogle:logoApple,
      close:close,
      cardDetails: [] as { name: string, age: string, description: string }[]
    };
  },
  methods: {
  addCard() {
    // Create a new card object with the entered details
    const card = {
      name: this.cardName,
      age: this.cardAge,
      description: this.cardDescription,
    };

    // Add the new card to the cardDetails array
    this.cardDetails.push(card);

    // Reset the input fields
    this.cardName = '';
    this.cardAge = '';
    this.cardDescription = '';
    this.showModal = false;
  },removeCard(index: number) {
      this.cardDetails.splice(index, 1);
    }}
},
   
  
);
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
  ion-card{
    border: 1px solid black;
    width:340px;
    height:160px;
   margin: 20px 50px 10px 0;
  }
  ion-card .img-name{
    display: flex;
    flex-direction: row;
  }
  ion-card img{
        width: 80px;
        height: 80px;
        margin: 15px 10px;
  }
  .details {
    padding: 15px;
    line-height: 30px;
    font-weight: 400;
    color: black;
  }
  ion-card-title{
    font-weight: 600;
    font-size: 16px;
  }
  ion-card-subtitle{
    font-weight: 400;
    color: black;
  }
  .btn{
    text-align: center;
    position: relative;
    bottom: 5px;
    display: flex;
    flex-direction: row;
  }
  .btn ion-button{
    width: 150px;
    height: 36px;
    margin: 0 10px;
    font-size: 12px;
  }
.linked>ion-text{
    font-size: 12px;
    font-weight: 600;
  padding-left: 10px;
}
.fam-acc{
    width:340px;
    height:112px;
    margin: 5px 10px 5px 0;
}
.family{
    width: 340px;
    display: flex;
    flex-direction: row;
}
.member{
    position: fixed;
    bottom: 5em;
    right: 40px;
}
ion-modal {
  --width: fit-content;
    --max-width: 270px;
   --height:200px;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  }
 .wrapper{
  display: flex;
  flex-direction: column;
  padding: 20px;
 }
 .card-form{
    --min-height: 300px;
    --min-width:300px;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
 }
</style>