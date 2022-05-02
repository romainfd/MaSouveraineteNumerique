<template>
  <div>
    <v-alert
      outlined
      text
      type="warning"
      width="100%"
    >
      Cette page correspond au travail réalisé lors d'un travail commun d'élèves de l'INSP et du Corps des mines.
      Du contenu additionnel a été ajouté dans le cadre du mémoire des élèves du Corps des mines et est disponible
      <nuxt-link to="/memoire">
        ici
      </nuxt-link>
    </v-alert>
    <QuizPage />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Questionnaire organisation'
  }
}
</script>
