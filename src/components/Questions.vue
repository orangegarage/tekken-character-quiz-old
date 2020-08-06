<template>
    <div class = "quiz">
        <p class = "questions">
            <!-- <ul>  -->
            <!-- <li v-for= "(questionValue, id) in jsonQuestion" v-bind:key="id">{{questionValue.id}}. {{questionValue.question}} -->
                {{jsonQuestion[currentQuestion].id}}. {{jsonQuestion[currentQuestion].question}}
                <!-- item in items, item (alias for array element), items (source array)-->
                <ul>
                    <li v-for= "value in jsonQuestion[currentQuestion].answers" v-bind:key="value" v-on:click="progress = 'Next'"> {{value}} </li>
                </ul>
            <!-- </li> -->
            <!-- </ul> -->
        </p>

        <div class = "next">
            <button v-on:click="currentQuestion++; progress='Skip'" class = "button">{{progress}}</button>
        </div>
    </div>

</template>


<script>

import quiz from "../assets/quiz.json";

export default {
    name: 'Questions',
    data() {
        return {
            jsonQuestion: quiz.questions,//returning 'question' from imported 'quiz'. array 'questions',
            currentQuestion: 0,
            progress: "Skip"
        };
    }
};
// make function for every question that would return characters related
</script>