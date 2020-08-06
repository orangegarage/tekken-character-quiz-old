<template>
    <div class = "quiz">
        <p class = "questions">
            <!-- <ul>  -->
            <!-- <li v-for= "(questionValue, id) in jsonQuestion" v-bind:key="id">{{questionValue.id}}. {{questionValue.question}} -->
                {{jsonQuestion[storeState.currentQuestion].id}}. {{jsonQuestion[storeState.currentQuestion].question}}
                <!-- item in items, item (alias for array element), items (source array)-->
                <ul>
                    <li v-for= "value in jsonQuestion[storeState.currentQuestion].answers" v-bind:key="value" v-on:click="answerClick()"> {{value}} </li>
                </ul>
            <!-- </li> -->
            <!-- </ul> -->
        </p>

        <div class = "next">
            
            <button v-on:click="backButtonClick()" class = "button">Back</button>
            <!-- hide this when currentquestion=0 -->
            <button v-on:click="nextButtonClick()" class = "button">{{storeState.currentStatus}}</button>
        </div>
    </div>

</template>


<script>

import quiz from "../assets/quiz.json";
import {store} from "../core/questions.js";

export default {
    name: 'Questions',
    data() {
        return {
            jsonQuestion: quiz.questions, //returning 'question' from imported 'quiz'. array 'questions',
            storeState: store.state
        };

    },
    methods: {
        nextButtonClick(){
            store.nextButton();
            console.log(this.storeState.currentQuestion);
            console.log("total Questions: " + this.jsonQuestion.length);
            if(this.storeState.currentQuestion+1 == this.jsonQuestion.length){
                console.log("this is the last question");
                this.storeState.currentStatus = "Submit";
            }
        },
        backButtonClick(){
            store.backButton();
            console.log(this.storeState.currentQuestion);
        },
        answerClick(){
            store.answerAsButton();
        }
    }
};
// make function for every question that would return characters related
</script>