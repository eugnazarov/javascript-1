let game = {

    init() {
        console.log("Добро пожаловать в игру \"Кто хочет стать миллионером?\"")
        console.log("Вариант ответа нужно вводить строкой. Соблюдайте регистр.")
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    },

    run() {
        let score = 0;
        config.questions.forEach((question) => {
            let questionText = question.task;
            let answersText = "";

            let answerIndex = 1;
            question.answers.forEach(answer => {
                answersText += ` ${answerIndex}. ${answer.value} `
                answerIndex++;
            })

            let scoreText = ` Ваш счёт: ${score} `
            questionText = scoreText + questionText + answersText

            let answer = prompt(questionText)

            //Ищем верный ответ
            question.answers.forEach(a => {
                if (a.value === answer && a.correct) {
                    score++;
                }
            })

        })
        alert(`Игра окончена. Ваш итогоый счёт: ${score}`);


    }

}

game.init();