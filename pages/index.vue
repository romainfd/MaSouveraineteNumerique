<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-card class="pa-4 my-4">
        <p class="text-h4 mb-1">Votre entreprise est-elle souveraine ?</p>
        <p class="text-overline text--secondary">
          Questionnaire issu d'un travail commun INSP - corps des Mines
          <a href="https://google.fr" target="_blank" class="text-decoration-none">
            <v-icon small class="mb-1">
              mdi-information-outline
            </v-icon>
          </a>
        </p>
        <p>Curieux d'estimer la résilience, l'autonomie et la souveraineté de votre entreprise ?
          Ce questionnaire vous permet d'obtenir des indicateurs clairs pour suivre votre souveraineté selon plusieurs dimensions et à travers le temps.</p>
      </v-card>
      <v-card>
        <v-stepper
          v-model="step"
          vertical
        >
          <v-stepper-step
            :complete="step > 1"
            step="1"
          >
            Select an app
            <small>Summarize if needed</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="step = 2"
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
            :complete="step > 2"
            step="2"
          >
            Configure analytics for this app
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="step = 3"
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
            :complete="step > 3"
            step="3"
          >
            Select an ad format and name ad unit
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="step = 4"
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">
            View setup instructions
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="step = 1"
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Questionnaire entreprise'
  },
  data () {
    return {
      step: 1
    }
  }
}
</script>
