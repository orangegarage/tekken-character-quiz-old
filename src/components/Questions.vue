<template>
    <div class = "quiz">
        <p class = "questions">
            <!-- <ul> -->
            <!-- <li v-for= "(question, index) in question" v-bind:key="index">{{index+1}}. {{question.question}} -->
                {{question.id}}. {{question.question}}
                <ul>
                    <!-- {{question.answers}} -->
                    <!-- v-for can format out an array the way we want -->
                    <li v-for= "value in question.answers" v-bind:key="value"> {{value}} </li>
                </ul>
            <!-- </li> -->
            <!-- </ul> -->
        </p>
    </div>

</template>


<script>

import quiz from "../assets/quiz.json";

export default {
    name: 'Questions',
    data() {
        return {
            question: quiz.questions[0] //returning 'question' from imported 'quiz'. array 'questions'
        };
    }    
};
// make function for every question that would return characters related
</script>