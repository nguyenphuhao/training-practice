const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

process.stdin.on("data", data => {
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    }else{
        process.exit();
    }
});

const answers = [];
process.on("exit", () => {
    const [name, activity, lang] = answers;
    console.log(`
    Thank you for your answers.
    Go ${activity} ${name} ${lang}
    `);
});