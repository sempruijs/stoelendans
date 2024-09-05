interface Question {
    question: string;
}

interface Answer {
    answer: string;
}

interface MultipleChoice {
    question: Question;
    right_answer: Answer;
    wrong_answers: Answer[];
}

