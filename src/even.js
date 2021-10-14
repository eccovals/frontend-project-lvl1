
import { 
    startGameAndGetName,
	printQuestionGetAnswer,
	isUserAnswerCorrect,
    finishGame
    }
from '../src/index.js'

const brainEven = () => {
    let userName = startGameAndGetName();
    for (let correctAnswerCounter = 0; correctAnswerCounter < 3; correctAnswerCounter += 1) {
        let randomNumber = getRandomInRange(1, 100);
        let correctAnswer = getCorrectAnswer(randomNumber);
        let userAnswer = printQuestionGetAnswer(randomNumber);
        let userAnswerCorrectly = isUserAnswerCorrect(userAnswer, correctAnswer, userName);
        if (userAnswerCorrectly === false) {
            correctAnswerCounter = 0;
        }
    }
    finishGame(userName);
};

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCorrectAnswer = (randomNumber) => {
    if (randomNumber % 2 === 0) {
		return "yes";
	} else {
		return "no";
	}
};


export { brainEven };