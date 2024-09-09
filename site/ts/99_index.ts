// Functie om een nieuwe vraag te laden
function next_question() {
    // Vragen komen uit het questions.ts bestand
    let random_question = random_element(questions);
    show_question(random_question);
}

// Functie om de vraag te tonen
function show_question(s: string) {
    document.getElementById("question").textContent = s;
}

// Toon meerkeuzevraag
function show_mc_question(q: MultipleChoice) {
    document.getElementById("mc_question").textContent = q.question;
}

// Set de HTML code voor de knoppencontainer
function set_button_container(html_code: string) {
    document.getElementById("button_container").innerHTML = html_code;
}

// Laat zien of het antwoord goed of fout is met stijlen
function show_correctness(result: boolean) {
    const correctnessDiv = document.getElementById("correctness");

    if (result) {
        correctnessDiv.textContent = "Goed!";
        correctnessDiv.style.color = "green";
        correctnessDiv.style.backgroundColor = "#d4edda"; // Lichtgroene achtergrond
        correctnessDiv.style.border = "2px solid green";
        correctnessDiv.style.fontSize = "2rem"; // Vergrote tekst
    } else {
        correctnessDiv.textContent = "Fout!";
        correctnessDiv.style.color = "red";
        correctnessDiv.style.backgroundColor = "#f8d7da"; // Lichtrode achtergrond
        correctnessDiv.style.border = "2px solid red";
        correctnessDiv.style.fontSize = "2rem"; // Vergrote tekst
    }

    // Voeg padding en styling toe voor betere presentatie
    correctnessDiv.style.padding = '1rem';
    correctnessDiv.style.marginTop = '1rem';
    correctnessDiv.style.textAlign = 'center';
    correctnessDiv.style.borderRadius = '10px';
    correctnessDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Optionele schaduw voor een betere look
}

// Reset de correctheidsweergave
function reset_correctness() {
    const correctnessDiv = document.getElementById("correctness");
    correctnessDiv.textContent = "";
    correctnessDiv.style.backgroundColor = ""; // Verwijder achtergrondkleur
    correctnessDiv.style.border = ""; // Verwijder border
}

// Functie om een nieuwe meerkeuzevraag te laden
function next_mc_question() {
    let random_question: MultipleChoice = random_element(mc_questions);
    show_mc_question(random_question);
    let new_buttons = generate_buttons(random_question);
    console.log(new_buttons);
    set_button_container(new_buttons);
    reset_correctness();
}

// Genereer knop voor elk antwoord
function generate_button(answer: Answer): string {
    if (answer.is_correct) {
        return `<button onclick="show_correctness(true)" style="padding: 0.75rem 1.5rem; border-radius: 25px; font-size: 1.1rem; background-color: #5A189A; color: white;">${answer.value}</button>`;
    }
    return `<button onclick="show_correctness(false)" style="padding: 0.75rem 1.5rem; border-radius: 25px; font-size: 1.1rem; background-color: #5A189A; color: white;">${answer.value}</button>`;
}

// Genereer knoppen voor de meerkeuzevraag
function generate_buttons(mc: MultipleChoice): string {
    const buttons: string[] = mc.answers.map(a => {
        return generate_button(a);
    });

    const shuffled_buttons = shuffleArray(buttons);

    return shuffled_buttons.join('');
}

// Functie om een willekeurig element te selecteren
function random_element<T>(xs: T[]): T {
    return xs[Math.floor(Math.random() * xs.length)];
}

// Functie om array te shuffelen
function shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
