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

function show_correctness(result: boolean) {
    var answer = "";
    if (result) {
        answer = "Goed!";
    } else {
        answer = "Fout";
    }
    document.getElementById("correctness").textContent = answer;
}

function reset_correctness() {
    document.getElementById("correctness").textContent = "";
}

function next_mc_question() {
    let random_question: MultipleChoice = random_element(mc_questions);
    show_mc_question(random_question);
    let new_buttons = generate_buttons(random_question);
    console.log(new_buttons);
    set_button_container(new_buttons);
    reset_correctness();
}

function generate_button(answer: Answer): string {
    if (answer.is_correct) {
        return "<button onclick=\"show_correctness(true)\">" + answer.value + "</button>";
    }
    return "<button onclick=\"show_correctness(false)\")\">" + answer.value + "</button>";
}

function generate_buttons(mc: MultipleChoice): string {
    const buttons: string[] = mc.answers.map(a => {
        return generate_button(a);
    });

    const shuffled_buttons = shuffleArray(buttons);

    return shuffled_buttons.join();
}

function random_element<T>(xs: T[]): T {
    return xs[Math.floor(Math.random() * xs.length)];
}
