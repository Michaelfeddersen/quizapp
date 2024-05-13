let questions = [
    {
        "question": "Welche ist die Hauptstadt von Mallorca?",
        "answer_1": "Santa Ponça",
        "answer_2": "Palma",
        "answer_3": "Bierkönig",
        "answer_4": "S'Arenal",
        "correct_answer": "Palma"
    },
    {
        "question": "Welcher ist der größte Strand von Mallorca?",
        "answer_1": "Cala Millor",
        "answer_2": "Es Trenc",
        "answer_3": "Magaluf",
        "answer_4": "Playa de Muro",
        "correct_answer": "Es Trenc"
    },
    {
        "question": "Welches ist das bekannteste Fest auf Mallorca?",
        "answer_1": "Sant Antoni",
        "answer_2": "Sant Joan",
        "answer_3": "Fira de la Llum",
        "answer_4": "Fiesta de San Fermin",
        "correct_answer": "Sant Joan"
    },
    {
        "question": "Welches ist das Wahrzeichen von Palma de Mallorca?",
        "answer_1": "Kathedrale La Seu",
        "answer_2": "Castell de Bellver",
        "answer_3": "Platja de Palma",
        "answer_4": "Palma Aquarium",
        "correct_answer": "Kathedrale La Seu"
    },
    {
        "question": "Welche ist die beliebteste Touristenattraktion in Mallorca?",
        "answer_1": "Cuevas del Drach",
        "answer_2": "Puig Major",
        "answer_3": "Alcudia Altstadt",
        "answer_4": "Torrent de Pareis",
        "correct_answer": "Cuevas del Drach"
    },
    {
        "question": "Welcher berühmte Künstler lebte und arbeitete lange Zeit auf Mallorca?",
        "answer_1": "Salvador Dalí",
        "answer_2": "Pablo Picasso",
        "answer_3": "Joan Miró",
        "answer_4": "Antoni Gaudí",
        "correct_answer": "Joan Miró"
    },
    {
        "question": "Welche ist die höchste Erhebung auf Mallorca?",
        "answer_1": "Puig Major",
        "answer_2": "Serra de Tramuntana",
        "answer_3": "Puig de Massanella",
        "answer_4": "Cap de Formentor",
        "correct_answer": "Puig Major"
    },
    {
        "question": "Welche ist die wichtigste Einnahmequelle für Mallorca?",
        "answer_1": "Tourismus",
        "answer_2": "Landwirtschaft",
        "answer_3": "Fischerei",
        "answer_4": "Bauindustrie",
        "correct_answer": "Tourismus"
    },
    {
        "question": "Welche ist die größte Bucht von Mallorca?",
        "answer_1": "Bucht von Palma",
        "answer_2": "Bucht von Alcudia",
        "answer_3": "Bucht von Pollença",
        "answer_4": "Bucht von Cala Figuera",
        "correct_answer": "Bucht von Alcudia"
    },
    {
        "question": "Welche ist die typische Spezialität der mallorquinischen Küche?",
        "answer_1": "Paella",
        "answer_2": "Gazpacho",
        "answer_3": "Frit Mallorquí",
        "answer_4": "Tortilla Española",
        "correct_answer": "Frit Mallorquí"
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById("all-question").innerHTML = questions.length;
}

function showQuestion(){
let question = questions[currentQuestion];
}