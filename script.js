var body = document.body;

var mainDiv = document.querySelector('.mainDiv');
var questions = document.querySelector('.questions');
var answerList = document.querySelector('.answers');
var button = document.querySelector('.button');
var textNote = document.querySelector('.textNote');

var questionList = [
    { 
        text: 'Question1',
        answers: ['answer 1', 'answer 2', 'answer3', 'answer 4', 'answer 5'],
        correctAnswer: 'answer'
    },
    { 
        text: 'Question2',
        answers: ['answer 1', 'answer 2', 'answer3', 'answer 4', 'answer 5'],
        correctAnswer: 'answer'
    },
    { 
        text: 'Question3',
        answers: ['answer 1', 'answer 2', 'answer3', 'answer 4', 'answer 5'],
        correctAnswer: 'answer'
    },
    { 
        text: 'Question4',
        answers: ['answer 1', 'answer 2', 'answer3', 'answer 4', 'answer 5'],
        correctAnswer: 'answer'
    },
    { 
        text: 'Question5',
        answers: ['answer 1', 'answer 2', 'answer3', 'answer 4', 'answer 5'],
        correctAnswer: 'answer'
    },
]

for (let i = 0; i < questionList.answers.length; i++) {
    const answerLoop = questionList[i];
    Math.floor(Math.random(answerLoop)) * questionList.answers.length;
    console.log(answerLoop);
    
}

body.appendChild(mainDiv);
body.appendChild(questions);
body.appendChild(answerList);
body.appendChild(button);
body.appendChild(textNote);


mainDiv.setAttribute('style', 'background:#ffffff; padding:20px;')
questions.setAttribute('style', 'font-size: 28px');
answerList.setAttribute("style", "background:#ffffff; padding:20px;");
button.setAttribute("style", " color:white; background: #ffffff; padding: 5px; margin-left: 20px;");
textNote.setAttribute("style", " color:white; background: #ffffff; padding: 5px; margin-left: 20px;");