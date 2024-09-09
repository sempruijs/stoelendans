function next_question() {
    // questions comes from the questions.ts file
    let random_question = random_element(questions);
    show_question(random_question);
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
    let random_question: MultipleChoice = random_element(mc_questions);
    let guess_buttons = generate_guess_buttons(random_question)
    set_button_container(guess_buttons)
}

function generate_guess_buttons(mc: MultipleChoice): string {
    let guesses = mc_question_to_quesses(mc)
    return guesses.map(g => {
        return guess_to_button(g)
    }).join("")
}

function guess_to_button(guess: Guess): string {
    let bla: string = "<button onclick=\"show_guess(guess)\">" + guess.guess.value + "</button>"
    return bla
}

function show_correctness(guess: Guess): string {
    var buttons = "";
    for (var answer of guess.mc.answers) {
        const guessed_class = answer === guess.guess ? "guessed_answer" : ""
        const correctness_class = answer.is_correct ? "correct_answer" : "incorrect_answer"
        const button = "<button onclick\"\" class=\"" + correctness_class + " " + guessed_class + "\">" + answer.value + "</button>"
        buttons += button
    }

    return buttons
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
    console.log(guesses)
    return guesses
}

function guess_is_correct(guess: Guess): boolean {
    return guess.guess.is_correct
}

