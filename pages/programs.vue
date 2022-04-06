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
                <v-col cols="auto" order-md="last" class="ml-auto">
                  <v-btn elevation="4" fab :href="p.link" target="_blank" class="mr-2">
                    <v-icon>
                      mdi-newspaper-variant-multiple-outline
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col style="text-align: center;">
                  <v-card-title class="justify-center">
                    {{ p.mentions }} mentions
                  </v-card-title>
                  <v-card-subtitle>du mot "numérique" dans le programme</v-card-subtitle>
                </v-col>
              </v-row>
              <v-divider />
              <div>
                <v-card-title>
                  Propositions
                </v-card-title>
                <v-alert
                  v-for="measure in p.measures"
                  :key="measure"
                  border="left"
                  :color="measureColor(measure.tier)"
                  text
                  dense
                >
                  <p class="overline mb-1 font-weight-bold">
                    • {{ measure.proposition }}
                    <EuropeFlagIcon v-if="measure.eu" class="mb-1 ml-1" />
                    <v-btn
                      text
                      icon
                      small
                      class="mb-1"
                      :href="p.link + '#page=' + measure.page"
                      target="_blank"
                    >
                      <v-icon small>
                        mdi-clipboard-search-outline
                      </v-icon>
                    </v-btn>
                  </p>
                  <v-divider class="pb-2" />
                  <p class="body-2 text--secondary mb-0">
                    {{ measure.details }}
                  </p>
                </v-alert>
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
        mentions: 14,
        measures: [{
          proposition: 'Déployer les pédagogies ouvertes et inclusives',
          details: 'Pour préparer nos enfants au monde dans lequel ils vivront, l’école doit être au rendez-vous par de nouvelles pédagogies : [...], apprendre les nouveaux langages du numérique, apprendre à s’informer, etc.',
          page: 21,
          tier: 1
        }, {
          proposition: 'Lancer quatre grandes odyssées industrielles de demain autour de l’économie de la vie',
          details: 'La réindustrialisation de la France est indispensable pour recréer des emplois de qualité, redynamiser nos territoires, soutenir notre effort de recherche et l’innovation et garantir notre indépendance. Nous organiserons cet effort national autour de quatre grandes odyssées, qui correspondent aux grands besoins actuels et futurs (économie de la vie) de la société : la santé, l’énergie, la mobilité et le numérique, comme vaincre les maladies dégénératives à horizon 2035 ou atteindre l’autonomie énergétique décarbonée en 2050.',
          page: 33,
          tier: 1
        }, {
          proposition: 'Redémarrer les capacités de recherche et d’innovation de la France',
          details: 'En 2027, nous aurons rattrapé notre retard en R&D, avec un effort atteignant 3 % du PIB à la fin du quinquennat. Dans cet effort, la recherche publique sera privilégiée, en particulier dans les secteurs relatifs aux quatre odyssées stratégiques (santé, énergie, mobilité et numérique).',
          page: 34,
          tier: 1
        }, {
          proposition: 'L’Europe est l’instrument de notre souveraineté',
          details: 'Elle est un atout puissant pour maîtriser notre avenir face aux grands défis auxquels tous les Européens sont confrontés : changement climatique et crise de la biodiversité, crises sanitaires et alimentaires, influence des multinationales et notamment des géants du numérique mais aussi défis géopolitiques. [...] L’Europe est aujourd’hui clairement l’instrument de notre souveraineté.',
          page: 37,
          eu: true,
          tier: 2
        }, {
          proposition: 'Adapter les règles budgétaires de l’UE aux défis du XXIe siècle',
          details: 'Pour être à la hauteur de l’enjeu, l’Union doit être dotée de nouvelles ressources propres afin que son budget soit renforcé : taxe sur les transactions financières et sur les géants du numérique, [...].',
          page: 37,
          eu: true,
          tier: 2
        }],
        limits: [
          'limit',
          'limit2'
        ]
      }, {
        name: 'Marine Le Pen',
        party: 'Rassemblement National',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Le_Pen%2C_Marine-9586_%28cropped%29.jpg/440px-Le_Pen%2C_Marine-9586_%28cropped%29.jpg',
        link: '/programs/le-pen.pdf',
        mentions: 14,
        measures: [{
          proposition: 'Nom',
          details: 'details',
          page: 10,
          tier: 1
        }, {
          proposition: 'Nom',
          details: 'details',
          page: 10,
          tier: 3
        }],
        limits: [
          'limit',
          'limit2'
        ]
      }, {
        name: 'Valérie Pécresse',
        party: 'Les Républicains',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Val%C3%A9rie_P%C3%A9cresse_%282022%29_%28cropped_2%29.jpg/220px-Val%C3%A9rie_P%C3%A9cresse_%282022%29_%28cropped_2%29.jpg',
        link: '/programs/le-pen.pdf',
        mentions: 14,
        measures: [{
          proposition: 'Nom',
          details: 'details',
          page: 10,
          tier: 1
        }, {
          proposition: 'Nom',
          details: 'details',
          page: 10,
          tier: 2
        }],
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
    },
    measureColor (tier) {
      return tier === 1 ? 'green' : (tier === 2 ? 'blue' : 'grey')
    }
  }
}
</script>

<style scoped>

</style>
