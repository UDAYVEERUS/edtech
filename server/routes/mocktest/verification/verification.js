const mockTest = require("../mocktestSchema")

const checkAnswers = async (request, response, next) => {
    try {
        console.log("there")
        const { answers } = request.body
        console.log("there",answers,7)
        var totalQuestions = 0
        var correctAnswer = 0
        var wrongAnswer = 0
        const answer_response = Promise.all(
            answers.map(async (data) => {
                var question_response = await mockTest.findById(data._id)
                if (question_response.answer === data.answer) {
                    return 1
                }
                else {
                    return -1
                }
            })).then(result => {
                result.map((value) => {
                    if (value === 1) {
                        correctAnswer = correctAnswer + 1
                        totalQuestions = totalQuestions + 1
                    }
                    else {
                        wrongAnswer = wrongAnswer + 1
                        totalQuestions = totalQuestions + 1
                    }
                })
                return response.status(200).json({
                    answer_response: answer_response,
                    success: correctAnswer, 
                    wrongAnswer: wrongAnswer, 
                    totalquestion: totalQuestions,
                    status:200
                })

            })

    }
    catch (err) {

    }
}
module.exports = { checkAnswers }