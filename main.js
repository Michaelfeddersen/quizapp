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
    // {
    //     "question": "Welches ist das Wahrzeichen von Palma de Mallorca?",
    //     "answer_1": "Kathedrale La Seu",
    //     "answer_2": "Castell de Bellver",
    //     "answer_3": "Platja de Palma",
    //     "answer_4": "Palma Aquarium",
    //     "correct_answer": "1"
    // },
    // {
    //     "question": "Welche ist die beliebteste Touristenattraktion in Mallorca?",
    //     "answer_1": "Cuevas del Drach",
    //     "answer_2": "Puig Major",
    //     "answer_3": "Alcudia Altstadt",
    //     "answer_4": "Torrent de Pareis",
    //     "correct_answer": "1"
    // },
    // {
    //     "question": "Welcher berühmte Künstler lebte und arbeitete lange Zeit auf Mallorca?",
    //     "answer_1": "Salvador Dalí",
    //     "answer_2": "Pablo Picasso",
    //     "answer_3": "Joan Miró",
    //     "answer_4": "Antoni Gaudí",
    //     "correct_answer": "3"
    // },
    // {
    //     "question": "Welche ist die höchste Erhebung auf Mallorca?",
    //     "answer_1": "Puig Major",
    //     "answer_2": "Serra de Tramuntana",
    //     "answer_3": "Puig de Massanella",
    //     "answer_4": "Cap de Formentor",
    //     "correct_answer": "1"
    // },
    // {
    //     "question": "Welche ist die wichtigste Einnahmequelle für Mallorca?",
    //     "answer_1": "Tourismus",
    //     "answer_2": "Landwirtschaft",
    //     "answer_3": "Fischerei",
    //     "answer_4": "Bauindustrie",
    //     "correct_answer": "1"
    // },
    // {
    //     "question": "Welche ist die größte Bucht von Mallorca?",
    //     "answer_1": "Bucht von Palma",
    //     "answer_2": "Bucht von Alcudia",
    //     "answer_3": "Bucht von Pollença",
    //     "answer_4": "Bucht von Cala Figuera",
    //     "correct_answer": "2"
    // },
    // {
    //     "question": "Welche ist die typische Spezialität der mallorquinischen Küche?",
    //     "answer_1": "Paella",
    //     "answer_2": "Gazpacho",
    //     "answer_3": "Frit Mallorquí",
    //     "answer_4": "Tortilla Española",
    //     "correct_answer": "4"
    // }
];

let currentQuestion = 0;
let rightQuestion = 0;
let AUDIO_succses = new Audio('sounds/succses.mp3');
let AUDIO_wrong = new Audio('sounds/wrong.mp3');


function init() {
    document.getElementById('next-button').disabled = true;
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {

        document.getElementById('cardEnd').style = '';
        document.getElementById('cardQuestion').style = 'display: none;';
      
        document.getElementById('goal').innerHTML = `Du hast <b> ${rightQuestion}</b> von <b>${questions.length}</b> richtig.`;
        document.getElementById('head').style = 'display: none;';
        document.getElementById('progressbar').style.width = `100%`;
        document.getElementById('progressbar').innerHTML = 100 + "%";
        document.getElementById('progressbarround').classList.remove('borderradius0');
    
    } else {

        let percent = Math.round(currentQuestion / questions.length *100);

        document.getElementById('progressbar').style.width = `${percent}%`;
        document.getElementById('progressbar').innerHTML = percent + "%";
      
      


        let question = questions[currentQuestion];
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        // Anzeige der Frage-Nummer
        document.getElementById('questionNumber').innerHTML = `Frage <b> ${currentQuestion + 1}</b> von <b>${questions.length}</b>`;
        
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Slelection answer is ', selection);
    let selectionQuestionNumber = selection.slice(-1);
    console.log('selectionQuestionNumber is ', selectionQuestionNumber);
    console.log('Current question is ', question['correct_answer']);

    let idOfRightAnswer = `answer_${question['correct_answer']}`;

    if (selectionQuestionNumber == question['correct_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_succses.play();
        rightQuestion++;
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_wrong.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_1').parentNode.classList.remove("bg-success");
    document.getElementById('answer_2').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_2').parentNode.classList.remove("bg-success");
    document.getElementById('answer_3').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_3').parentNode.classList.remove("bg-success");
    document.getElementById('answer_4').parentNode.classList.remove("bg-danger");
    document.getElementById('answer_4').parentNode.classList.remove("bg-success");

}

function  restartGame() {
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