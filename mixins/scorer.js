const sum = (array1, array2) => array1.map(function (num, idx) {
  return num + array2[idx];
})

const divide = (array, divider) => array.map(function (num) {
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
  methods: {
    score(questions) {
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
                      toAverageLoopScore = sum(
                        toAverageLoopScore,
                        getScore(question.options, item, question.default)
                      )
                    }
                    loopScore = divide(toAverageLoopScore, answer.length)
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
            score = sum(score, loopScore)
          }
        }
      }
      return score
    }
  }
}
module.exports = scorerMixin
