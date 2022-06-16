<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <v-card class="pa-4 my-4 pb-1">
        <p class="text-h4 mb-1">
          Soutenance - 16 juin 2022
        </p>
        <p class="overline pt-2 pb-1 text--secondary">
          Conclusion de notre mémoire du Corps des mines
        </p>
        <div class="text-justify">
          <p>
            Curieux de mieux comprendre les promesses des candidats aux élections présidentielles de 2022 ?
            Cette page regroupe les éléments clés des programmes des différents candidats ainsi que des pistes de regard critique sur les propositions.
          </p>
          <v-row justify="center" align="center" class="my-6">
            <v-btn :href="slidesUrl" target="_blank" color="primary" elevation="4">
              <v-icon left>
                mdi-presentation-play
              </v-icon>
              Télécharger la présentation
            </v-btn>
          </v-row>
          <v-row justify="center" align="center" class="my-6">
            <v-btn :href="posterUrl" target="_blank">
              <v-icon left>
                mdi-post-outline
              </v-icon>
              Télécharger le poster A0
            </v-btn>
          </v-row>
          <ColabParagraph
            page-specific-text="Nous avons cherché à rendre notre travail et les slides le plus objectif et argumenté possible.
            Cependant, des éléments peuvent nous avoir échappés et toute contribution est bienvenue."
          />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      slidesUrl: './Soutenance - Souveraineté numérique & Cloud - Fouilland & Galas.pdf',
      posterUrl: './Poster - Souveraineté numérique & Cloud - Fouilland & Galas.pdf'
    }
  },
  head: {
    title: 'Soutenance'
  }
}
</script>

<style scoped>

</style>
