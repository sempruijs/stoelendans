interface MultipleChoice {
    question: string;
    answers: Answer[];
}

interface Answer {
    value: string,
    is_correct: boolean
}

