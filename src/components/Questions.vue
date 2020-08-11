<template>
    <div class = "quiz">
        <div class = "qna">
            <p class ="total-questions">{{jsonQuestion[storeState.currentQuestion].id}} of {{totalQuestions}}</p>
            <p class = "questions">
                    {{jsonQuestion[storeState.currentQuestion].id}}. {{jsonQuestion[storeState.currentQuestion].question}}    
            </p>
            <!-- item in items, item (alias for array element), items (source array)-->
            <ul>
                <li class="answers" v-for= "(value, key) in jsonQuestion[storeState.currentQuestion].answers" v-bind:key="value" v-on:click="answerClick()">
                    <input type="radio" name = "radioAnswer" v-bind:id = "'answer-'+ key" v-bind:value="value" v-model.lazy="picked">
                    <label v-bind:for ="'answer-'+ key">{{value}}</label>
                </li>
            </ul>
            <span>Picked: {{picked}}</span>
        </div>

        <div class = "next">
            <button v-on:click="backButtonClick()" class = "button">&laquo;Back</button>
            <!-- make buttons the amnt of length and have the active one enabled? on click change the currentQuestion value -->
            <input type="radio" name ="radioNav" 
                class="quiz-nav" v-for= "(value,key) in jsonQuestion" 
                v-bind:key="key" v-bind:id = "'button-'+key" v-on:click="navClick(key)" :checked="key==storeState.currentQuestion">
            <button v-on:click="nextButtonClick()" class = "button">{{storeState.currentStatus}}&raquo;</button>
        </div>

    </div>
</template>


<script>
import quiz from "../assets/quiz.json";
import {store} from "../core/questions.js";

export default {

    data() {
        return {
            jsonQuestion: quiz.questions, //returning 'question' from imported 'quiz'. array 'questions',
            storeState: store.state,
            totalQuestions: quiz.questions.length,
            picked: ""
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
                    window.open("#/recommendation");
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
                // alert("this is the last question");
                this.storeState.currentStatus = "Submit";
            }
        },
        navClick(key){
            this.storeState.currentQuestion = key;
        }
    }
}
// make function for every question that would return characters related?
</script>