const data = require('./data/quiz'); 
let name = ''
let answer = []

module.exports = { 
    getQuiz: (req, res) => {
        console.log(data)
        res.status(200).send(data);
    },
    addName: (req,res) => {
        name = req.body.name
        console.log('Name has been stored')
        res.status(200).send(name)
    },
    storeAnswers: (req,res) => {
        console.log("answer is stored")
        let {selectedAnswer} = req.body
        answer.push(selectedAnswer)

        res.status(200).send(answer); 
    }
}