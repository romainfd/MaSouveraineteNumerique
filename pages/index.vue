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
              :editable="step > rank + 1"
              edit-icon="$complete"
              :step="rank + 1"
            >
              {{ question.name }}
              <small v-if="question.details">{{ question.details }}</small>
            </v-stepper-step>

            <v-stepper-content :step="rank + 1">
              <v-combobox
                v-if="question.type === 'combobox'"
                v-model="question.answer"
                :items="Object.keys(question.options)"
                label="Sélectionnez ou tapez si besoin"
                :multiple="question.average"
                :chips="question.average"
                clearable
              ></v-combobox>
              <v-slider
                v-else-if="question.type === 'slider'"
                v-model="question.answer"
                class="pt-7"
                thumb-label
                thumb-size="24"
                :min="question.min"
                :max="question.max"
                :label="question.label"
                color="green lighten-1"
              ></v-slider>
              <v-switch
                v-else-if="question.type === 'switch'"
                v-model="question.answer"
                :label="question.answer ? 'Oui' : 'Non'"
                class="mt-2 ml-3"
                inset
              ></v-switch>
              <v-rating
                v-else-if="question.type === 'score'"
                v-model="question.answer"
                color="primary"
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half-full"
                half-increments
                hover
                length="5"
                class=""
                :size="$device.isMobile ? 36 : 64"
              ></v-rating>
              <div v-else>
                Type de question inconnu
              </div>


              <v-btn
                color="primary"
                @click="step = rank + 2"
              >
                Valider
              </v-btn>
              <v-btn
                v-if="rank > 0"
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
