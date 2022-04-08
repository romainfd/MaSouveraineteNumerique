<template>
  <div class="text-justify">
    <section id="intro">
      <h2 class="headline my-4 pl-4">
        L'initiative pour des actions numériques informées
      </h2>
      <p>
        Ce site est né du constat que le mot de souveraineté numérique était de plus en plus présent dans le monde numérique mais qu'il cache des définitions, des réalités et des actions différentes.
        L'objectif de ce site est de centraliser des ressources pertinentes et chiffrées pour permettre de mieux appréhender, comprendre et réagir aux enjeux de la souveraineté numérique.
        Loin de se vouloir alarmiste et protectionniste, ces informations doivent permettre de poser le débat sur un socle commun et sourcé afin de pouvoir co-construire des réponses efficaces
        sur le plan de l'autonomie stratégique de la France et de ces acteurs (entreprises et citoyens) tout en maintenant une efficience nécessaire pour évoluer dans le monde numérique.
      </p>
      <ColabParagraph />
    </section>

    <v-divider class="py-2" />
    <h2 id="programs" class="headline my-4 pl-4">
      Analyse des programmes des candidats
    </h2>
    <p>
      Les élections présidentielles sont un temps fort de la vie politique et permettent de débattre de nombreux sujets.
      La souveraineté numérique n'échappe pas à cela et, renforcée par le contexte de la guerre en Ukraine, occupe une place importante dans les différents programmes.
      Pour permettre des échanges plus clairs et construits, nous avons décidé de regrouper en une page l'ensemble des programmes afin de donner une vision plus claire du débat politique sur le sujet.
    </p>
    <v-row justify="center" align="center" class="my-6">
      <v-btn to="/programs" elevation="4">
        <v-icon left>
          mdi-newspaper-variant-multiple-outline
        </v-icon>
        Comparer les programmes
      </v-btn>
    </v-row>

    <v-divider class="py-2" />
    <h2 id="#quiz" class="headline my-4 pl-4">
      Questionnaire de souveraineté
    </h2>
    <p>
      Curieux d'estimer la résilience, l'autonomie et la souveraineté de votre organisation ? Ce questionnaire vous permet d'obtenir des indicateurs clairs pour suivre votre souveraineté selon plusieurs dimensions et à travers le temps.
    </p>
    <v-row justify="center" align="center" class="my-6">
      <v-btn to="/quiz" elevation="4">
        <v-icon left>
          mdi-crosshairs-question
        </v-icon>
        Estimer ma souveraineté
      </v-btn>
    </v-row>

    <!--
    <v-divider class="py-2" />
    <h2 id="#situation" class="headline my-4 pl-4">
      Situation de la France
    </h2>
    <p>
      Pour poser le débat et quantifier les enjeux, nous avons regroupé les chiffres marquants des enjeux de souveraineté.
    </p>
    <v-row justify="center" align="center" class="my-6">
      <v-btn to="/situation" elevation="4">
        <v-icon left>
          mdi-chart-bar
        </v-icon>
        La souveraineté en chiffres
      </v-btn>
    </v-row>
    -->

    <v-divider class="py-2" />
    <section id="details">
      <h2 class="headline my-4 pl-4">
        Qui sommes-nous ?
      </h2>
      <p>
        <a href="https://www.linkedin.com/in/godefroygalas">Godefroy Galas</a> et <a href="https://linkedin.com/in/romainfouilland">Romain Fouilland</a>,
        nous sommes en troisième et dernière année de formation du Corps des mines que nous avons décidé de consacrer à l'écriture d'un mémoire sur la souveraineté numérique.
        Après de nombreuses expériences en start-up, grands groupes et fonds autour du numérique, nous nous destinons à des postes de hauts-fonctionnaires dans l'État.
        Étant persuadés que les enjeux de souveraineté numérique demandent une collaboration entre services publics, acteurs privés et citoyens et comme la formation du Corps des mines est conçue pour nous placer à cette interface,
        nous avons eu à cœur d'en profiter pour s'intéresser à ces enjeux et essayer d'y apporter une pierre constructive à travers notre mémoire de fin d'études.
      </p>
      <p>
        Le mémoire de fin d'études du Corps des mines se déroule d'octobre à juillet et est l'occasion de nombreuses rencontres et productions.
        Nous avons, à ce titre, été rapporteurs de la mission Sportisse sur les "Infrastructures logicielles critiques" pour préparer la présidence française du Conseil de l'Union européenne.
        Nous avons également répondu à une commande de l'INRIA avec 17 camarades de l'INSP (ex-ENA) sur les cibles et leviers pour politique de rééquilibrage rapide.
        En parallèle de ces expériences, nous nous sommes également rapprochés d'acteurs privés avec lesquels nous sommes en train de mener diverses actions.
      </p>
      <p>
        Bien que notre mémoire soit encore en construction, nous avons créé ce site pour partager l'expérience déjà acquise et centraliser les ressources et outils qui nous paraissent pertinents.
        Sont ainsi disponibles, l'<a href="#programs">analyse des programmes des candidats</a> aux élections présidentielles de 2022,
        un <a href="#quiz">questionnaire de souveraineté</a> permettant aux organisations d'estimer leur niveau de souveraineté selon plusieurs verticales et
        une sélection de graphs illustrant la <a href="#situation">situation actuelle de la France</a> en matière de souveraineté numérique.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Accueil'
  }
}
</script>

<style scoped>
#details a {
  text-decoration: none;
  font-style: italic;
}
</style>
