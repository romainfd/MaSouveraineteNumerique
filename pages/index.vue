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
        nous sommes en troisième et dernière année de formation du Corps des mines que nous avons décidé de consacrer à l'écriture d'un mémoire sur la
        souveraineté numérique. Après de nombreuses expériences en start-up, grands groupes et fonds autour du numérique, nous nous destinons à des postes
        de hauts-fonctionnaires dans l'État. Étant persuadés que les enjeux sous-jacents à la souveraineté numérique requièrent une collaboration entre
        services publics, acteurs privés et citoyens, et bénéficiant d'un cadre de formation positionné à l'interface entre ces différents acteurs, nous avons
        eu à cœur d'analyser ces enjeux et d'en tirer une réflexion constructive à travers notre mémoire de fin d'études pour essayer d'apporter
        notre pierre à l'édifice.
      </p>
      <p>
        Le mémoire de fin d'études du Corps des mines se déroule d'octobre à juillet et donne l'occasion de nombreuses rencontres et productions. Nous avons,
        à ce titre, été rapporteurs de la mission Sportisse (du nom du PDG de l'INRIA) sur les "Infrastructures logicielles critiques" visant à préparer la présidence française du
        Conseil de l'Union européenne sur les sujets numériques. Nous avons également répondu à une commande de l'INRIA avec 17 camarades de l'INSP (ex-ENA) sur les cibles et leviers (technologiques,
        juridiques, socio-culturels, etc.) qui pourraient sous-tendre une politique de rééquilibrage rapide des rapports de force en matière de souveraineté numérique.
        En parallèle de ces expériences, nous nous sommes également rapprochés d'acteurs privés avec lesquels nous sommes en train de mener diverses actions.
      </p>
      <p>
        Bien que notre mémoire soit encore en cours d'élaboration, nous avons construit ce site afin de partager l'expérience déjà acquise et centraliser
        les ressources et outils qui nous paraissaient pertinents. Sont ainsi disponibles, l'<a href="#programs">analyse des programmes des candidats</a> aux élections présidentielles
        de 2022 et un <a href="#quiz">questionnaire de souveraineté</a> permettant aux organisations d'estimer leur niveau de souveraineté selon plusieurs verticales. Nous projetons
        également d'ajouter sous peu une sélection de graphs illustrant la situation actuelle de la France en matière de souveraineté numérique.
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
