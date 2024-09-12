
// --- STATE ----
var open_question_index = 0
// questions come from the questions.ts file
var open_questions_order = shuffleArray(open_questions)

var mc_question_index = 0
// questions come from the mc_questions.ts file
var mc_questions_order = shuffleArray(mc_questions)

function random_open_question(): string {
    const length = open_questions_order.length
    if (open_question_index === length - 1) {
        // todo: very samll chance that the users will recieve the same question after eachother
        let new_open_question_order = shuffleArray(open_questions_order)
        open_question_index = 0
        return open_questions_order[open_question_index]
    }
    open_question_index += 1
    return open_questions[open_question_index]
}

function random_mc_question(): MultipleChoice {
    const length = mc_questions_order.length
    if (mc_question_index === length - 1) {
        // todo: very samll chance that the users will recieve the same question after eachother
        let new_mc_question_order = shuffleArray(mc_questions_order)
        mc_question_index = 0
        return mc_questions_order[mc_question_index]
    }
    mc_question_index += 1
    return mc_questions_order[mc_question_index]
}


function next_question() {
    let question = random_open_question()
    show_question(question)
    play_whoosh_sound()
}

function play_whoosh_sound() {
    const buttonElement = document.getElementById('questionButton') as HTMLButtonElement;
    const clickSound = document.getElementById('clickSound') as HTMLAudioElement;

    buttonElement.addEventListener('click', () => {
        if (!clickSound.paused) {
            return;
        }
        console.log("test")
        clickSound.play()
    });
}

function show_question(s: string) {
    document.getElementById("question").textContent = s;
}

function show_mc_question(q: MultipleChoice) {
    document.getElementById("mc_question").textContent = q.question;
}

function set_button_container(html_code: string) {
    document.getElementById("button_container").innerHTML = html_code;
}

function next_mc_question() {
    let question: MultipleChoice = random_mc_question();
    let shuffled_question = shuffle_mc_question(question)
    set_button_container("")
    generate_guess_buttons(shuffled_question)
    show_mc_question(shuffled_question)
}

function generate_guess_buttons(mc: MultipleChoice) {
    let guesses = mc_question_to_quesses(mc)
    guesses.forEach(g => {
        create_button(g)
    })
}

function create_button(guess: Guess) {
    const button = document.createElement("button");
    button.textContent = guess.guess.value;

    // Attach event listener to handle the guess
    button.onclick = () => show_guess(guess);

    // Append the button to a container
    const container = document.getElementById("button_container");
    if (container) {
        container.appendChild(button);
    }
}

// TODO: split generating buttons and writing buttons in seperate functions
function show_guess(guess: Guess) {
    var buttons = "";
    for (var answer of guess.mc.answers) {
        const guessed_class = answer === guess.guess ? "guessed_answer" : ""
        const correctness_class = answer.is_correct ? "correct_answer" : "incorrect_answer"
        const button = "<button onclick\"\" class=\"" + correctness_class + " " + guessed_class + "\">" + answer.value + "</button>"
        buttons += button
    }
    set_button_container(buttons)
}

function random_element<T>(xs: T[]): T {
    return xs[Math.floor(Math.random() * xs.length)];
}

function mc_question_to_quesses(mc: MultipleChoice): Guess[] {
    let guesses = mc.answers.map(a => {
        return {
            mc: mc,
            guess: a
        }
    })
    return guesses
}

function guess_is_correct(guess: Guess): boolean {
    return guess.guess.is_correct
}

function shuffle_mc_question(mc: MultipleChoice): MultipleChoice {
    let answers: Answer[] = mc.answers
    let shuffled_answers = shuffleArray(answers)
    return {
        question: mc.question,
        answers: shuffled_answers
    }
}

const backgroundMusic = document.getElementById('backgroundMusic') as HTMLAudioElement;
backgroundMusic.volume = 0.001;
