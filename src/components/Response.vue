<template>
    <div>
      <div>
        <ion-card>
          <ion-card-header>
            <ion-icon :icon="image"></ion-icon>
          </ion-card-header>
  
          <ion-card-content>
            Here's a small text description for the card content. Nothing more,
            nothing less.
            <span v-if="tellMeMore">
              Here's a some more text description for the card content. Nothing
              more, nothing less. a description for the card content. Nothing
              more, nothing less.
            </span>
          </ion-card-content>
        </ion-card>
        <ion-list v-if="showDoctordetail">
          <ion-item v-for="(doctor, index) in doctors" :key="index" router-link="/clinic">
            <!-- route it to the hospital details page -->
            <ion-thumbnail slot="start">
              <img :src="doctor.image" />
            </ion-thumbnail>
            <div class="doctor-details" style="cursor:pointer">
              <ion-label>
                <h2>{{ doctor.name }}</h2>
                <p>{{ doctor.rating }}</p>
                <!-- <p>{{ doctor.specialty }}</p> -->
                <p>{{ doctor.location }}</p>
                <p>{{ doctor.timing }}</p>
              </ion-label>
              <ion-label style="background-color: #d3d3d3; width: 60%"
                >Pickup Available</ion-label
              >
            </div>
          </ion-item>
        </ion-list>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button
                v-if="showDoctordetail == false"
                size="small"
                expand="block"
                color="light"
                @click="showDoctordetail = true"
                >Contact Doctor</ion-button
              >
            </ion-col>
            <ion-col>
              <ion-button
                size="small"
                v-if="tellMeMore == false"
                expand="block"
                color="light"
                @click="tellMeMore = true"
                >Tell me more</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { image } from "ionicons/icons";
  import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
  } from "@ionic/vue";
    import { ref } from "vue";
  let props = defineProps({
    each: {
      type: Object,
      required: true,
    },
  });
  let showDoctordetail = ref(false);
  let tellMeMore = ref(false);
  
  let doctors = ref([
    {
      name: "Lorem dentist clinic",
      rating: "4.5 (356)",
      specialty: "",
      location: "HSR layout, Bangalore",
      timing: "9:00Am - 5:00PM",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Lorem dentist clinic",
      rating: "4.5 (356)",
      specialty: "",
      location: "HSR layout, Bangalore",
      timing: "9:00Am - 5:00PM",
      image:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Lorem dentist clinic",
      rating: "4.5 (356)",
      specialty: "",
      location: "HSR layout, Bangalore",
      timing: "9:00Am - 5:00PM",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ]);
  </script>
  
<style>
  
</style>