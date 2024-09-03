function random_element<T>(xs: T[]): T {
    return xs[Math.floor(Math.random() * xs.length)];
}

function hello_world() {
    // questions comes from the questions.ts file
    let random_question = random_element(questions);
    console.log(random_question);
}
