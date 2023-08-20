<template>
        <ion-grid v-for="i in 2" style="border: 0.5px solid gray; margin: 10px; padding:5px;">
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
        </ion-grid>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, IonButton,IonIcon } from '@ionic/vue';
import { location } from 'ionicons/icons';
</script>