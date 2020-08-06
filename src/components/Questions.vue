<template>
    <div class = "quiz">
        <p class = "questions">
            <ul>
            <li v-for= "(question, index) in jsonQuestion" v-bind:key="index">{{index+1}}. {{jsonQuestion.question}}
                <!-- {{question.id}}. {{question.question}} -->
                <ul>
                    <!-- v-for can format out an array the way we want -->
                    <li v-for= "value in jsonQuestion.answers" v-bind:key="value"> {{value}} </li>
                </ul>
            </li>
            </ul>
        </p>
    </div>

</template>


<script>

import quiz from "../assets/quiz.json";

export default {
    name: 'Questions',
    data() {
        return {
            jsonQuestion: quiz.questions//returning 'question' from imported 'quiz'. array 'questions'
        };
    }    
};
// make function for every question that would return characters related
</script>