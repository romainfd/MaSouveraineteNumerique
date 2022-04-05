<template>
  <div>
    <h1 id="title" class="display-2 my-8 text-center">
      <img src="/logo.png" alt="Logo Ma Souveraineté Numérique" class="mr-n2 mr-md-0">
      Ma Souveraineté Numérique
    </h1>
    <h2 class="headline my-4 pl-4">
      L'initiative pour des actions numériques informées
    </h2>
    <section>
      Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
      Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
      quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
      Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
      sans que son contenu n'en soit modifié.
      Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum,
      et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
    </section>
    <v-row justify="center" align="center" class="my-6">
      <v-btn :href="tribuneUrl" target="_blank">
        <v-icon left>
          mdi-bullhorn-outline
        </v-icon>
        Lire notre tribune
      </v-btn>
    </v-row>
    <v-divider class="py-2" />
    <h2 class="headline my-4 pl-4">
      Nos notes
    </h2>
    <p>
      Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.
      Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.,
      le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie,
      s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum,
      et en étudiant tous les usages de ce mot dans la littérature classique,
      découvrit la source incontestable du Lorem Ipsum.
    </p>
    <v-row justify="center" align="center" class="my-6">
      <v-spacer />
      <v-col cols="12" md="8" class="px-6">
        <v-row>
          <v-btn block :href="noteChapeauUrl" target="_blank">
            Note chapeau
          </v-btn>
        </v-row>
        <v-row>
          <v-col
            v-for="section in sections"
            :key="section.name"
            class="px-1 px-md-4"
            cols="4"
          >
            <v-btn block :href="'#' + section.id">
              {{ section.name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
    </v-row>
    <div v-for="(section, index) in sections" :id="section.id" :key="section.name">
      <v-divider class="py-2" />
      <v-row
        class="ma-2"
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="auto"
          align="center"
          class="display-2 mr-4"
        >
          <v-row
            align="center"
            justify="center"
            style="border: 1px solid dimgrey; color: dimgrey; border-radius: 100%; width: 72px; height: 72px;"
          >
            {{ index + 1 }}
          </v-row>
        </v-col>
        <v-col>
          <v-row class="justify-center justify-md-start py-3 py-md-0">
            <h3 class="headline">
              {{ section.name }}
            </h3>
          </v-row>
          <v-row>
            <p class="caption text--secondary mb-0">
              Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum"
              (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron.
              Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.
              Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.
            </p>
          </v-row>
        </v-col>
      </v-row>
      <!--
      <v-row class="ma-2">
        <section class="py-4">
          Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.
          Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.,
          le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie,
          s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum,
          et en étudiant tous les usages de ce mot dans la littérature classique,
          découvrit la source incontestable du Lorem Ipsum.
        </section>
      </v-row>
      -->
      <v-row class="ma-2">
        <v-col
          v-for="note in section.notes"
          :key="note.url"
          cols="12"
          md="4"
          class="pa-3 pa-md-4 pa-lg-8"
        >
          <article class="tiles">
            <span class="image" :style="'--bg-color: ' + note.bgColor">
              <img
                :src="note.image"
                :alt="note.name"
              >
            </span>
            <a :href="note.url" target="_blank">
              <h2>{{ note.name }}</h2>
            </a>
          </article>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      tribuneUrl: 'https://google.fr',
      noteChapeauUrl: 'https://google.fr',
      sections: [{
        id: 'section1',
        name: 'Section #1',
        notes: [{
          name: 'Note #1',
          image: require('~/assets/img/blank.png'),
          bgColor: 'rgba(162,233,0,0.5)',
          url: 'https://google.fr'
        }, {
          name: 'Note #2',
          image: require('~/assets/img/blank.png'),
          bgColor: 'rgba(233,99,0,0.5)',
          url: 'https://google.fr'
        }, {
          name: 'Note #3',
          image: require('~/assets/img/blank.png'),
          bgColor: '#988675',
          url: 'https://google.fr'
        }]
      }, {
        id: 'section2',
        name: 'Section #2',
        notes: [{
          name: 'Note #1',
          image: require('~/assets/img/blank.png'),
          bgColor: 'rgba(0,233,221,0.5)',
          url: 'https://google.fr'
        }, {
          name: 'Note #2',
          image: require('~/assets/img/blank.png'),
          bgColor: '#412734',
          url: 'https://google.fr'
        }, {
          name: 'Note #3',
          image: require('~/assets/img/blank.png'),
          bgColor: 'rgba(100,108,109,0.75)',
          url: 'https://google.fr'
        }]
      }, {
        id: 'section3',
        name: 'Section #3',
        notes: [{
          name: 'Note #1',
          image: require('~/assets/img/blank.png'),
          bgColor: 'rgba(0,163,233,0.5)',
          url: 'https://google.fr'
        }, {
          name: 'Note #2',
          image: require('~/assets/img/blank.png'),
          bgColor: 'rgba(162,233,0,0.5)',
          url: 'https://google.fr'
        }, {
          name: 'Note #3',
          image: require('~/assets/img/blank.png'),
          bgColor: 'rgba(229,106,89,0.15)',
          url: 'https://google.fr'
        }]
      }]
    }
  },
  head: {
    title: 'Accueil'
  }
}
</script>

<style lang="scss" scoped>
#title img {
  height: 1.5em;
  position: relative;
  top: .25em;
}

article.tiles {
  position: relative;
  transition: transform 0.5s ease;

  .image {
    border-radius: 4px;
    overflow: hidden;

    &::before {
      background-color: var(--bg-color);
      pointer-events: none;
      transition: background-color 0.5s ease, opacity 0.5s ease;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.8;
    }

    img {
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      display: block;
    }

    &::after {
      pointer-events: none;
      transition: opacity 0.5s ease;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('./assets/img/cross.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      opacity: 0.25;
      z-index: 2;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease, transform 0.5s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1em;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
    z-index: 3;
  }

  &:hover {
    transform: scale(1.1);

    .image {
      &::before {
        // Dark filter on top of image
        background-color: #333333;
        opacity: 0.35;
      }

      &::after {
        // Hiding cross
        opacity: 0;
      }
    }
  }
}
</style>
