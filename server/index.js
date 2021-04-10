const express = require ('express');
const app = express()

const {
    getQuiz,
    addName,
    storeAnswers
} = require('./royalController')

const port = 5041
app.use(express.json());

app.get('/api/royals/quiz', getQuiz);
app.post('/api/royals/quiz', addName);
app.put('/api/royals/quiz', storeAnswers);



app.listen(port, () => console.log(`Server is running wild on port: ${port}`))