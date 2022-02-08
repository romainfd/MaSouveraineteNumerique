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
          <div
            v-for="(question, rank) in questions"
            :key="question.id"
          >
            <v-stepper-step
              :complete="step > rank + 1"
              :step="rank + 1"
            >
              {{ question.name }}
              <small v-if="question.details">{{ question.details }}</small>
            </v-stepper-step>

            <v-stepper-content :step="rank + 1">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>


              <v-btn
                color="primary"
                @click="step = rank + 2"
              >
                Valider
              </v-btn>
              <v-btn
                text
                @click="step = rank"
              >
                Retour
              </v-btn>
            </v-stepper-content>
          </div>
        </v-stepper>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import questions from '~/assets/questions'

console.log(questions)

export default {
  name: 'IndexPage',
  head: {
    title: 'Questionnaire entreprise',
  },
  data () {
    return {
      step: 1,
      questions
    }
  }
}
</script>
