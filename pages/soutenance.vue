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
        <div class="text-center pb-4">
          <img
            v-for="(img, i) in images"
            :key="i"
            :src="img.url"
            :alt="img.alt"
            style="max-height: 120px; cursor: pointer"
            class="px-2"
            @click="slideshowIndex = i"
          >
          <client-only>
            <vue-gallery-slideshow
              :images="images"
              :index="slideshowIndex"
              @close="slideshowIndex = null"
            />
          </client-only>
        </div>
        <div class="text-justify">
          <p>
            Après neufs mois passionnants consacrés à notre mémoire sur la souveraineté numérique - mémoire ponctué de deux missions commandos
            (l’une avec l’Inria, l’autre avec des élèves de l’INSP), d’une centaine d’entretiens, du développement de ce site internet de sensibilisation
            et d’une réponse à un appel à commentaire public en collaboration avec des industriels européens du cloud,
            nous avons eu l'honneur de soutenir les résultats de nos travaux à l'École des Mines de Paris le 16 juin 2022.
          </p>
          <p>
            Ayant fait le choix de traiter ce sujet à travers le prisme de la technologie du cloud,
            notre affiche d’invitation laissait entendre que “la guerre du cloud n’aura pas lieu”.
            Néanmoins, comme dans la célèbre pièce de Jean Giraudoux, la guerre du cloud aura bien lieu et, plus encore,
            elle doit avoir lieu !
          </p>
          <p>
            Cette guerre a un objectif : montrer, qu'en matière de cloud,
            il est désormais nécessaire de se faire confiance et de cesser d’acheter le marketing des hyperscalers américains.
            Pour démontrer cette thèse, notre présentation s'est attachée à développer un discours axé sur une approche économique en proposant 3 leviers :
          </p>
          <ol>
            <li>
              Accroître la demande en faveur des fournisseurs européens, en particulier grâce à la commande publique ;
            </li>
            <li>
              Valoriser l’offre européenne existante et montrer qu’elle est déjà mature et compétitive sur les commodités du cloud ;
            </li>
            <li>
              Identifier des leviers visant à faciliter la rencontre entre offre et demande.
            </li>
          </ol>
          <br>
          <p>
            Au travers de ces 3 leviers, nous avons détaillé six idées essentielles dans notre raisonnement :
          </p>
          <ol>
            <li>
              Un soutien public national à adapter économiquement
            </li>
            <li>
              Un alignement entre intérêts micros et besoins macros
            </li>
            <li>
              Des fournisseurs européens matures et compétitifs
            </li>
            <li>
              L'open-source, terreau des offres matures
            </li>
            <li>
              La concurrence comme vecteur de souveraineté
            </li>
            <li>
              Un potentiel cartel des hyperscalers ?
            </li>
          </ol>
          <br>
          <p>
            Vous pouvez retrouver l'ensemble des diapositives de cette présentation ci-dessous.
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
            Cependant, des éléments peuvent nous avoir échappés et toute contribution est bienvenue.
            Nous sommes notamment disponibles à l'adresse contact@ma-souverainete-numerique.fr"
          />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
  components: {
    VueGallerySlideshow
  },
  data () {
    return {
      slidesUrl: '/soutenance/Soutenance - Souveraineté numérique & Cloud - Fouilland & Galas.pdf',
      posterUrl: '/soutenance/Poster - Souveraineté numérique & Cloud - Fouilland & Galas.pdf',
      images: [{
        url: '/soutenance/images/Invitation soutenance.png',
        alt: 'Invitation Soutenance'
      }, {
        url: '/soutenance/images/Salle.jpg',
        alt: 'Romain Fouilland & Godefroy Galas - Soutenance'
      }, {
        url: '/soutenance/images/Romain.JPG',
        alt: 'Romain Fouilland - Soutenance'
      }, {
        url: '/soutenance/images/Godefroy.JPG',
        alt: 'Godefroy Galas - Soutenance'
      }, {
        url: '/soutenance/images/Romain & Godefroy.JPG',
        alt: 'Romain Fouilland & Godefroy Galas - Soutenance'
      }],
      slideshowIndex: null
    }
  },
  head: {
    title: 'Soutenance'
  }
}
</script>

<style scoped>

</style>
