<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <v-card class="pa-4 my-4 pb-1">
        <p class="text-h4 mb-1">
          Analyse des programmes des candidats
        </p>
        <p class="text-overline text--secondary">
          Analyse basée sur les programmes des candidats et un briefing de l'IFRI
          <a
            href="https://www.ifri.org/fr/publications/briefings-de-lifri/souverainete-numerique-bilan-quinquennat-propositions-candidats"
            target="_blank"
            class="text-decoration-none"
          >
            <v-icon small class="mb-1">
              mdi-information-outline
            </v-icon>
          </a>
        </p>
        <div class="text-justify">
          <p>
            Curieux de mieux comprendre les promesses des candidats aux élections présidentielles de 2022 ?
            Cette page regroupe les éléments clés des programmes des différents candidats ainsi que des pistes de regard critique sur les propositions.
          </p>
          <ColabParagraph
            page-specific-text="Malgré nos efforts d'objectivité, certaines remarques peuvent être jugées subjectives : les retours sont les bienvenus."
          />
          <p>
            Remarques globales ici ? Ou une carte 'ALL' ?
          </p>
          <div class="my-4">
            <v-avatar
              v-for="(program, i) in programs"
              :key="i"
              style="background-color: black;"
              size="84"
              class="mr-4"
              @click="select(i)"
            >
              <v-img
                :src="program.image"
                :alt="program.name"
                contain
              />
            </v-avatar>
          </div>
        </div>
      </v-card>
      <v-card class="px-4 pb-4 my-4">
        <div v-if="selected === null">
          Veuillez cliquer sur l'image du candidat dont vous voulez connaître le programme autour de la souveraineté numérique
        </div>
        <div v-else>
          <v-fade-transition
            v-for="(p, i) in programs"
            :key="i"
            hide-on-leave
          >
            <div
              v-show="i === selected"
            >
              <v-row align="center" class="spacer" no-gutters>
                <v-avatar class="ml-3" size="56">
                  <v-img :src="p.image" :alt="p.name" />
                </v-avatar>
                <v-col cols="auto">
                  <v-card-title>{{ p.name }}</v-card-title>
                  <v-card-subtitle>{{ p.party }}</v-card-subtitle>
                </v-col>
                <v-spacer />
                <v-btn elevation="4" fab :href="p.link" target="_blank" class="mr-2">
                  <v-icon>
                    mdi-newspaper-variant-multiple-outline
                  </v-icon>
                </v-btn>
              </v-row>
              <v-divider />
              <div>
                <v-card-title>
                  Propositions
                </v-card-title>
                <p v-for="measure in p.measures" :key="measure">
                  {{ measure }}
                </p>
              </div>
              <v-divider />
              <div>
                <v-card-title>
                  Regards critiques
                </v-card-title>
                <p v-for="limit in p.limits" :key="limit">
                  {{ limit }}
                </p>
              </div>
            </div>
          </v-fade-transition>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      programs: [{
        name: 'Anne Hidalgo',
        party: 'Parti Socialiste',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Anne_Hidalgo%2C_f%C3%A9vrier_2014.jpg/440px-Anne_Hidalgo%2C_f%C3%A9vrier_2014.jpg',
        link: '/programs/hidalgo.pdf',
        measures: [
          'test',
          'test2'
        ],
        limits: [
          'limit',
          'limit2'
        ]
      }, {
        name: 'Marine Le Pen',
        party: 'Rassemblement National',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Le_Pen%2C_Marine-9586_%28cropped%29.jpg/440px-Le_Pen%2C_Marine-9586_%28cropped%29.jpg',
        link: '/programs/le-pen.pdf',
        measures: [
          'test',
          'test2'
        ],
        limits: [
          'limit',
          'limit2'
        ]
      }]
    }
  },
  head: {
    title: 'Analyse des programmes'
  },
  methods: {
    select (i) {
      this.selected = i
    }
  }
}
</script>

<style scoped>

</style>
