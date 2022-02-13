const arrSum = (array1, array2) => array1.map(function (num, idx) {
  return num + array2[idx];
})

const arrDivide = (array1, array2) => array1.map(function (num, idx) {
  return num / array2[idx];
})

const arrMultiply = (array1, array2) => array1.map(function (num, idx) {
  return num * array2[idx];
})

const arrMax = (array1, array2) => array1.map(function (num, idx) {
  return Math.max(num, array2[idx]);
})

const arrDivideNb = (array, divider) => array.map(function (num) {
  return num / divider;
})

const getScore = (options, key, defaultScore=[0, 0, 0, 0]) => {
  if (key in options) {
    return options[key]
  } else {
    // ToDo: save in DB for form continuous improvement
    return defaultScore
  }
}

const scorerMixin = {
  data() {
    return {
      scorerDimensions: ['Indépendance culturelle', 'Indépendance économique', 'Indépendance géostratégique', 'Efficience'],
      dimensionsDetails: [
        "Indépendance culturelle : dans quelle mesure votre organisation échappe aux biais et aux manipulations d'information potentiellement relayés par les outils numériques (essentiellement américains) les plus utilisés ?", "Indépendance économique : dans quelles proportions votre organisation s'est extraite d'une logique de dépendance économique vis-à-vis d'un ou plusieurs fournisseurs de services numériques ?", "Indépendance géostratégique : jusqu'à quel point votre organisation s'appuie sur une infrastructure numérique résiliente face aux risques de désactivation ou d'exfiltration de vos données sensibles ou stratégiques ?", "Efficience: dans quelle mesure votre organisation est-elle parvenue à déployer des outils numériques souverains sans pour autant pénaliser la productivité de ses membres ?"
      ]
    }
  },
  methods: {
    score(questions) {
      const maxScores = this.maxScore(questions)
      const weightedScores = arrMultiply(this.scores(questions), maxScores)
      const maxScoreTotal = maxScores.reduce((a, b) => a + b, 0)
      console.log({maxScores,
        scores: this.scores(questions),
        weightedScores,
        maxScoreTotal})
      return Math.round(weightedScores.reduce((a, b) => a + b, 0) / maxScoreTotal)
    },
    scores(questions) {
      return arrDivideNb(
        arrDivide(this.absoluteScore(questions), this.maxScore(questions)),
        1 / 100
      ).map(Math.round)
    },
    absoluteScore(questions) {
      let score = [0, 0, 0, 0]
      for (let question of questions) {
        const { id, answer, type } = question
        if (type !== 'slider') {
          if (id > 0 && typeof answer !== 'undefined') {
            // Question de souveraineté & réponse fournie
            let loopScore
            switch (type) {
              case 'combobox':
                if (question.average) {
                  let toAverageLoopScore = [0, 0, 0, 0]
                  if (answer.length > 0) {
                    for (let item of answer) {
                      toAverageLoopScore = arrSum(
                        toAverageLoopScore,
                        getScore(question.options, item, question.default)
                      )
                    }
                    loopScore = arrDivideNb(toAverageLoopScore, answer.length)
                  } else {
                    loopScore = [0, 0, 0, 0]
                  }
                } else {
                  loopScore = getScore(question.options, answer)
                }
                break;
              case 'slider':
              case 'score':
              case 'switch':
                loopScore = question.weight(answer)
                break;
              default:
                console.error(`Le type de question '${type}' n'est pas reconnu.`);
                return score
            }
            score = arrSum(score, loopScore)
          }
        }
      }
      return score
    },
    maxScores(questions) {
      let maxScores = []
      for (let question of questions) {
        const { id, type } = question
        if (type !== 'slider') {
          if (id > 0) {
            // Question de souveraineté & réponse fournie
            let loopScore = [0, 0, 0, 0]
            switch (type) {
              case 'combobox':
                // take the maximum of all scores
                for (let item in question.options) {
                  loopScore = arrMax(
                    loopScore,
                    getScore(question.options, item)
                  )
                }
                if (question.average) {
                  loopScore = arrMax(loopScore, question.default)
                }
                break;
              case 'slider':
              case 'score':
              case 'switch':
                // They are all use linear weight between min and max
                let { min, max, weight } = question
                switch (type) {
                  case 'score':
                    min = 0;
                    max = 5
                    break;
                  case 'switch':
                    min = 0
                    max = 1
                }
                loopScore = arrMax(weight(min), weight(max))
                break;
              default:
                console.error(`Le type de question '${type}' n'est pas reconnu.`);
                return maxScores
            }
            maxScores.push(loopScore)
          }
        }
      }
      return maxScores
    },
    maxScore(questions) {
      const maxScores = this.maxScores(questions)
      return maxScores.reduce(arrSum, [0, 0, 0, 0])
    },
    getColor (value){
      // Ref.: https://stackoverflow.com/a/17268489
      const hue = (value / 100 * 120).toString(10);
      return ["hsl(", hue, ",100%,50%)"].join("");
    }
  },
}
module.exports = scorerMixin
