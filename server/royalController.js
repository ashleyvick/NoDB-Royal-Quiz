const data = require("./data/quiz");
let name = "";
let answer = [];

module.exports = {
  getQuiz: (req, res) => {
    res.status(200).send(data);
  },
  addName: (req, res) => {
    name = req.body.name;
    console.log("name has been saved", req.body);
    res.status(200).send(name);
  },
  storeAnswers: (req, res) => {
    console.log(answer);
    let { selectedAnswer } = req.body;
    answer.push(selectedAnswer);
    res.status(200).send(answer);
  },
  results: (req, res) => {
    console.log(req.body, answer);
    let theQueen = 0;
    let camilla = 0;
    let kate = 0;
    let meghan = 0;
    answer.forEach((elem) => {
      if (elem === "0") {
        theQueen++;
      } else if (elem === "1") {
        camilla++;
      } else if (elem === "2") {
        kate++;
      } else if (elem === "3") {
        meghan++;
      }
    });
    if (theQueen >= camilla && theQueen >= kate && theQueen >= meghan) {
      alert(
        `Congratulations ${name}! You are most like Queen Elizabeth II of the United Kingdom of Great Britain! Head of the Commonwealth, Defender of the Faith! "God Save the Queen!"`
      );
    } else if (camilla >= theQueen && camilla >= kate && camilla >= meghan) {
      alert(
        `${name} You are most like Camilla, Duchess of Cornwall... Ew. What were you thinking? You should be ashamed of yourself.`
      );
    } else if (kate >= theQueen && kate >= camilla && kate >= meghan) {
      alert(
        `Congratulations ${name}! You are most like Princess Kate Middleton, Duchess of Cambridge. Goddess on Earth! Hero to Motherhood and Feminism. Future Queen to rule and reign with your King and wonderful children. Pure Perfection in every way!`
      );
    } else if (meghan >= theQueen && meghan >= camilla && meghan >= kate) {
      alert(
        `Congratulations ${name}! You are most like the stunning, Meghan Markle, Duchess of Sussex. You are a true fairy tale Princess, saved by your perfect Prince Charming and you will live Happily Ever After with your family, traveling the world doing charity work and spreading good to all!`
      );
    }
    res.status(200).send(answer);
  },
  retake: (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    answer = [];
    res.status(200).send(answer);
  },
};
