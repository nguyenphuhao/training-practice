const collectAnswers = require('./lib/collectAnswers')
const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with nodejs? "
];

collectAnswers(questions, answers => {
    console.log("Thanks for your answers. ");
    console.log(answers);
    process.exit();
});