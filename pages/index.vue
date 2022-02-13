<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-card class="pa-4 my-4">
        <p class="text-h4 mb-1">Votre entreprise est-elle souveraine ?</p>
        <p class="text-overline text--secondary">
          Questionnaire issu d'un travail commun d'élèves INSP - Corps des mines
          <a
            href="https://www.amalthea.fr/institutionnel/mines-paris/ena-corps-des-mines/" `
            target="_blank"
            class="text-decoration-none"
          >
            <v-icon small class="mb-1">
              mdi-information-outline
            </v-icon>
          </a>
        </p>
        <div class="text-justify">
          <p>Curieux d'estimer la résilience, l'autonomie et la souveraineté de votre entreprise ?
            Ce questionnaire vous permet d'obtenir des indicateurs clairs pour suivre votre souveraineté selon plusieurs dimensions et à travers le temps.</p>
          <p class="font-italic text--secondary">Ce site est développée dans une approche collaborative et de partage de bonnes pratiques.
            Tout le code est donc disponible sur
            <a
              href="https://github.com/romainfd/MaSouveraineteNumerique"
              target="_blank"
              class="text-decoration-none"
            >
              <v-icon
                color="blue"
                small
                class="pb-1"
              >
                mdi-github
              </v-icon>
              GitHub</a>.
            Le modèle de score est subjectif et basé sur nos expériences et impressions personnelles.
            Les retours et améliorations du système de score sont les bienvenus.</p>
        </div>
      </v-card>
      <v-card class="pa-4 my-4">
        <v-expand-transition
          v-if="!finished"
        >
          <v-stepper
            v-model="step"
            vertical
            elevation="0"
          >
            <p class="text-h4 pt-4">
              Questions
            </p>
            <div class="text-justify">
              <p class="mb-0"><b><i>Aucune réponse n'est obligatoire.</i></b></p>
              <p class="mb-0">Lorsqu'un seul choix est possible, veuillez indiquer le choix majoritaire pour votre entité.</p>
              <p>Pour toutes les réponses sous forme de texte, il vous est possible d'écrire une option supplémentaire si besoin.</p>
            </div>
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
                  class="pt-7 pr-5"
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
                <v-otp-input
                  v-else-if="question.type === 'postcode'"
                  v-model="question.answer"
                  style="max-width: 400px;"
                  length="5"
                ></v-otp-input>
                <v-text-field
                  v-else-if="question.type === 'number'"
                  v-model="question.answer"
                  min="0"
                  single-line
                  type="number"
                />
                <v-text-field
                  v-else-if="question.type === 'text'"
                  v-model="question.answer"
                  single-line
                />
                <div v-else>
                  Type de question inconnu
                </div>

                <v-btn
                  class="mb-1"
                  color="primary"
                  @click="processAnswer(question.id, question.answer, rank)"
                >
                  <v-icon left>
                    mdi-check
                  </v-icon>
                  {{ step === questions.length ? 'Terminer' : 'Valider' }}
                </v-btn>
                <v-btn
                  class="mb-1 ml-1"
                  text
                  v-if="rank > 0"
                  @click="step = rank"
                >
                  Retour
                </v-btn>
              </v-stepper-content>
            </div>
          </v-stepper>
        </v-expand-transition>
        <v-expand-transition v-else>
          <div>
            <p class="text-h4 pt-4">
              Résultats
            </p>
            <p>Merci pour votre participation.</p>
            <p>Vous avez obtenu un score global de souveraineté de <span class="text-h4" :style="'color: ' + this.getColor(this.score(this.questions))">{{ score(questions) }}%</span> !</p>
            <p>Vous trouverez ci-dessous plus de détails sur vos résultats, des ressources pour découvrir les enjeux de la souveraineté numérique et des suggestions d'actions pour améliorer votre score dans le temps.</p>
            <ChartRadar
              :data="radarData"
              :labels="scorerDimensions"
              title="Résultats"
            />
            <div v-for="(score, i) in this.scores(questions)" class="ma-3">
              <v-divider></v-divider>
              <v-row class="my-3 align-end">
                <span class="overline">{{ scorerDimensions[i] }}</span>
                <v-spacer
                  v-if="!$device.isMobile"
                  class="mb-3 mx-1" style="border-bottom: 1px dashed grey"
                ></v-spacer>
                <v-col
                  cols="12"
                  sm="auto"
                  class="text-h3 mb-1 pa-0"
                  :style="'color: ' + getColor(score)"
                >{{ score }}%</v-col>
              </v-row>
              <p>{{ dimensionsDetails[i] }}</p>
            </div>
            <v-btn
              @click="step = questions.length"
            >
              <v-icon left>
                mdi-arrow-left
              </v-icon>
              Retour aux questions
            </v-btn>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import questions from '~/assets/questions'
const scorerMixin = require('~/mixins/scorer')
import colors from 'vuetify/es5/util/colors'

export default {
  mixins: [scorerMixin],
  name: 'IndexPage',
  head: {
    title: 'Questionnaire entreprise',
  },
  data () {
    return {
      step: 1,
      questions,
    }
  },
  computed: {
    finished () {
      return this.step > this.questions.length
    },
    radarData () {
      return {
        labels: this.scorerDimensions,
        datasets: [{
            label: 'Score',
            data: this.scores(this.questions),
            borderColor: colors.amber.darken1,
            backgroundColor: colors.amber.darken4 + '50', // adding transparency
          }
        ]
      }
    }
  },
  async mounted () {
    // Collect session ID to identify session
    this.session_id = (await this.$axios.$get('/php/session.php')).session_id
  },
  methods: {
    async processAnswer(questionId, answer, rank) {
      // Move to next question
      this.step = rank + 2
      // Store last question results on server
      console.log(await this.$axios.$post('/php/answer.php?sess=' + this.session_id, { questionId, answer }))
      // Store scores once quizz is done
      if (this.finished) {
        const namedScores = {
          Global: this.score(this.questions)
        }
        const scores = this.scores(this.questions)
        this.scorerDimensions.forEach((key, i) => namedScores[key] = scores[i]);
        console.log(await this.$axios.$post('/php/score.php?sess=' + this.session_id, { namedScores }))
      }
    }
  },
}
</script>
