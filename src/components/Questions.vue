<template>
    <div class = "quiz">
        <div class = "qna">
            <p class ="total-questions">{{jsonQuestion[storeState.currentQuestion].id}} of {{totalQuestions}}</p>
            <p class = "questions">
                    {{jsonQuestion[storeState.currentQuestion].id}}. {{jsonQuestion[storeState.currentQuestion].question}}    
            </p>
            <!-- item in items, item (alias for array element), items (source array)-->
            <ul>
                <li class="answers" v-for= "value in jsonQuestion[storeState.currentQuestion].answers" v-bind:key="value" v-on:click="answerClick()"> {{value}} </li>
            </ul>
        </div>

        <div class = "next">
            <button v-on:click="backButtonClick()" class = "button">Back</button>
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
            storeState: store.state,
            totalQuestions: quiz.questions.length
        };

    },
    methods: {
        nextButtonClick(){
            store.nextButton();
            console.log(this.storeState.currentQuestion);
            console.log("total Questions: " + this.totalQuestions);
            if(this.storeState.currentQuestion == this.totalQuestions-1){
                console.log("this is the last question"); 
                this.storeState.currentStatus = "Submit";
            }
            else if(this.storeState.currentQuestion>= this.totalQuestions-1){
                    this.storeState.currentQuestion = this.totalQuestions-1;
            }
        },
        backButtonClick(){
            store.backButton();
            console.log(this.storeState.currentQuestion);
            if(this.storeState.currentQuestion == 0){
                console.log("this is the first question");
            }
            else if(this.storeState.currentQuestion<=0){
                this.storeState.currentQuestion = 0;
            }
        },
        answerClick(){
            store.answerAsButton();
            if(this.storeState.currentQuestion+1 == this.jsonQuestion.length){
                alert("this is the last question");
                this.storeState.currentStatus = "Submit";
            }
        }
    }
};
// make function for every question that would return characters related?
</script>