let questions = [
    {
        "question": "Welche ist die Hauptstadt von Mallorca?",
        "answer_1": "Santa Ponça",
        "answer_2": "Palma",
        "answer_3": "Bierkönig",
        "answer_4": "S'Arenal",
        "correct_answer": "2"
    },
    {
        "question": "Welcher ist der größte Strand von Mallorca?",
        "answer_1": "Cala Millor",
        "answer_2": "Playa de Muro",
        "answer_3": "Magaluf",
        "answer_4": "Es Trenc",
        "correct_answer": "4"
    },
    {
        "question": "Welches ist das bekannteste Fest auf Mallorca?",
        "answer_1": "Sant Antoni",
        "answer_2": "Sant Joan",
        "answer_3": "Fira de la Llum",
        "answer_4": "Fiesta de San Fermin",
        "correct_answer": "2"
    },
    {
        "question": "Welches ist das Wahrzeichen von Palma de Mallorca?",
        "answer_1": "Kathedrale La Seu",
        "answer_2": "Castell de Bellver",
        "answer_3": "Platja de Palma",
        "answer_4": "Palma Aquarium",
        "correct_answer": "1"
    },
    {
        "question": "Welche ist die beliebteste Touristenattraktion in Mallorca?",
        "answer_1": "Cuevas del Drach",
        "answer_2": "Puig Major",
        "answer_3": "Alcudia Altstadt",
        "answer_4": "Torrent de Pareis",
        "correct_answer": "1"
    },
    {
        "question": "Welcher berühmte Künstler lebte und arbeitete lange Zeit auf Mallorca?",
        "answer_1": "Salvador Dalí",
        "answer_2": "Pablo Picasso",
        "answer_3": "Joan Miró",
        "answer_4": "Antoni Gaudí",
        "correct_answer": "3"
    },
    {
        "question": "Welche ist die höchste Erhebung auf Mallorca?",
        "answer_1": "Puig Major",
        "answer_2": "Serra de Tramuntana",
        "answer_3": "Puig de Massanella",
        "answer_4": "Cap de Formentor",
        "correct_answer": "1"
    },
    {
        "question": "Welche ist die wichtigste Einnahmequelle für Mallorca?",
        "answer_1": "Tourismus",
        "answer_2": "Landwirtschaft",
        "answer_3": "Fischerei",
        "answer_4": "Bauindustrie",
        "correct_answer": "1"
    },
    {
        "question": "Welche ist die größte Bucht von Mallorca?",
        "answer_1": "Bucht von Palma",
        "answer_2": "Bucht von Alcudia",
        "answer_3": "Bucht von Pollença",
        "answer_4": "Bucht von Cala Figuera",
        "correct_answer": "2"
    },
    {
        "question": "Welche ist die typische Spezialität der mallorquinischen Küche?",
        "answer_1": "Paella",
        "answer_2": "Gazpacho",
        "answer_3": "Frit Mallorquí",
        "answer_4": "Tortilla Española",
        "correct_answer": "4"
    },
    {
        "question": "Welche Stadt auf Mallorca ist bekannt für ihre wöchentliche Perlen- und Lederwarenmärkte?",
        "answer_1": "Sóller",
        "answer_2": "Manacor",
        "answer_3": "Andratx",
        "answer_4": "Deià",
        "correct_answer": "2"
    },
    {
        "question": "Welches berühmte Bauwerk auf Mallorca wurde von Antoni Gaudí restauriert?",
        "answer_1": "Kathedrale La Seu",
        "answer_2": "Castell de Bellver",
        "answer_3": "Palau de l'Almudaina",
        "answer_4": "Sa Llotja",
        "correct_answer": "1"
    },
    {
        "question": "Welcher bekannte Roman spielt teilweise auf Mallorca?",
        "answer_1": "The Sun Also Rises von Ernest Hemingway",
        "answer_2": "The Night Manager von John le Carré",
        "answer_3": "The Talented Mr. Ripley von Patricia Highsmith",
        "answer_4": "A Room with a View von E.M. Forster",
        "correct_answer": "3"
    },
    {
        "question": "Welche kleine Inselgruppe gehört zu Mallorca?",
        "answer_1": "Cabrera-Archipel",
        "answer_2": "Balearen",
        "answer_3": "Pityusen",
        "answer_4": "Columbretes",
        "correct_answer": "1"
    },
    {
        "question": "Welches ist das beliebteste traditionelle Getränk auf Mallorca?",
        "answer_1": "Sangria",
        "answer_2": "Hierbas",
        "answer_3": "Rioja",
        "answer_4": "Cava",
        "correct_answer": "2"
    }
];

let currentQuestion = 0;
let rightQuestion = 0;
let AUDIO_succses = new Audio('sounds/succses.mp3');
let AUDIO_wrong = new Audio('sounds/wrong.mp3');
let soundEnabled = true;

function init() {
    document.getElementById('next-button').disabled = true;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateToNextQuestion();
        updateProgressbar();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('cardEnd').style = '';
    document.getElementById('cardQuestion').style = 'display: none;';
    document.getElementById('goal').innerHTML = `Du hast <b> ${rightQuestion}</b> von <b>${questions.length}</b> richtig.`;
    document.getElementById('head').style = 'display: none;';
    document.getElementById('progressbar').style.width = `100%`;
    document.getElementById('progressbar').innerHTML = 100 + "%";
    document.getElementById('progressbarround').classList.remove('borderradius0');
}

function updateToNextQuestion() {
    
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('questionNumber').innerHTML = `Frage <b> ${currentQuestion + 1}</b> von <b>${questions.length}</b>`;
}
function updateProgressbar() {
    let percent = Math.round(currentQuestion / questions.length * 100);
    document.getElementById('progressbar').style.width = `${percent}%`;
    document.getElementById('progressbar').innerHTML = percent + "%";
}
function answer(selection) {
    let question = questions[currentQuestion];
    let selectionQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['correct_answer']}`;

    // Disable all answer buttons
    disableAllAnswers();

    if (rightAnswerSelected(selectionQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        if (soundEnabled) AUDIO_succses.play();

        rightQuestion++;
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        if (soundEnabled) AUDIO_wrong.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectionQuestionNumber, question) {
    return selectionQuestionNumber == question['correct_answer'];
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}
function disableAllAnswers() {
    document.getElementById('answer_1').parentNode.classList.add('disabled');
    document.getElementById('answer_2').parentNode.classList.add('disabled');
    document.getElementById('answer_3').parentNode.classList.add('disabled');
    document.getElementById('answer_4').parentNode.classList.add('disabled');
}
function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove("bg-danger", "bg-success", "disabled");
    document.getElementById('answer_2').parentNode.classList.remove("bg-danger", "bg-success", "disabled");
    document.getElementById('answer_3').parentNode.classList.remove("bg-danger", "bg-success", "disabled");
    document.getElementById('answer_4').parentNode.classList.remove("bg-danger", "bg-success", "disabled");
}

function restartGame() {
    document.getElementById('head').style = 'display: show;';
    document.getElementById('cardQuestion').style = 'display: show;';
    document.getElementById('cardEnd').style = 'display: none;';
    document.getElementById('progressbar').style.width = `0%`;
    document.getElementById('progressbar').innerHTML = 0 + "%";
    document.getElementById('progressbarround').classList.add('borderradius0');
    currentQuestion = 0;
    rightQuestion = 0;
    init()
}
function toggleSound() {
    soundEnabled = !soundEnabled;
    document.getElementById('soundButton').innerText = soundEnabled ? '🔊 Sound Aus' : '🔇 Sound An';
  }
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('soundCheckbox');
    checkbox.addEventListener('change', function () {
      toggleSound();
    });
  });
  