<template>
    <div class = "recommendation">
        {{quizData}}
        {{picked}}<br>
        {{quizQuestions}}
    </div>
</template>

<script>
import quiz from "@/assets/quiz.json";
import {store} from "@/core/questions.js";
import characters from "@/assets/characters.json";
// use a filter to get all json objects
// iterate through and assign them values?
// 1 variable for all stuff?
// have a array of answers based on id
// empty asrray to fill with characters after the first 2 questions that I can edit with each condition? Or just initialize with json)
export default {
    data() {
        return {
            storeState: store.state,
            category: "",
            sleectCharacter: [],
            quizData: quiz.questions.filter(questions => questions.answers == 'store.state.picked'),
            picked: store.state.picked,
            quizQuestions: quiz.questions[12].answers.filter(d => d.questions[12].answers.includes("I prefer"))
        };
    },
    methods: {

    }
}
</script>
