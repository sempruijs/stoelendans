function next_question() {
    // questions comes from the questions.ts file
    let random_question = random_element(questions);
    show_question(random_question);
    
    const buttonElement = document.getElementById('questionButton') as HTMLButtonElement;
    const clickSound = document.getElementById('clickSound') as HTMLAudioElement;

buttonElement.addEventListener('click', () => {
  if (!clickSound.paused) {
    return; 
  }
  clickSound.play();
});

}

function show_question(s: string) {
    document.getElementById("question").textContent=s;
}

function show_mc_question(q: MultipleChoice) {
    document.getElementById("mc_question").textContent=q.question;
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

function generate_button(answer: string, is_right: boolean): string {
    if (is_right) {
        return "<button onclick=\"show_correctness(true)\">" + answer + "</button>";
    }
    return "<button onclick=\"show_correctness(false)\")\">" + answer + "</button>";
}

function generate_buttons(q: MultipleChoice): string {
    var buttons: string[] = [];
    for (var wrong_anser of q.wrong_answers) {
        let button = generate_button(wrong_anser, false)
        buttons.push(button)
    }
    let right_button = generate_button(q.right_answer, true)
    buttons.push(right_button);

    //TODO: randomize order buttons

    var result = "";

    for (var button of buttons) {
        result += button;
    }

    return result;
}

function random_element<T>(xs: T[]): T {
    return xs[Math.floor(Math.random() * xs.length)];
}
