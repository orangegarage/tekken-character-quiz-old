<template>
    <div class = "quiz">
        <div class = "qna">
            <p class ="total-questions">{{storeState.jsonQuestion[storeState.currentQuestion].id}} of {{storeState.totalQuestions}}</p>
            <p class = "questions">
                    {{storeState.jsonQuestion[storeState.currentQuestion].id}}. {{$t('questions.'+storeState.jsonQuestion[storeState.currentQuestion].question)}}    
            </p>
             <!-- {{$t(storeState.jsonQuestion[storeState.currentQuestion].question)}} -->
            
            <!-- item in items, item (alias for array element), items (source array)-->
            <ul>
                <li class="answers" v-for= "(value, key) in storeState.jsonQuestion[storeState.currentQuestion].answers" v-bind:key="value" v-on:click="answerClick()">
                    <input type="radio" name = "radioAnswer" v-bind:id = "'answer-'+ key" v-bind:value="value" v-model="storeState.picked">
                    <label v-bind:for ="'answer-'+ key">{{$t('answers.'+value)}}</label>
                </li>
            </ul>
            <!-- <span>Picked: {{storeState.picked}}</span> -->
            <!-- on nextbutton click, filter picked then filter the filtered to cast? -->
        </div>

        <div class = "next">
            <button v-on:click="backButtonClick()" class = "button">&laquo;Back</button>
            <!-- make buttons the amnt of length and have the active one enabled? on click change the currentQuestion value -->
            <input type="radio" name ="radioNav" 
                class="quiz-nav" v-for= "(value,key) in storeState.jsonQuestion" 
                v-bind:key="key" v-bind:id = "'button-'+key" v-on:click="navClick(key)" :checked="key==storeState.currentQuestion">
            <button v-on:click="nextButtonClick()" class = "button">{{storeState.currentStatus}}&raquo;</button>
        </div>

    </div>
</template>


<script>
// import quiz from "../assets/quiz.json";
import {store} from "../core/questions.js";

export default {
    data() {
        return {
            storeState: store.state
        };
    },
    methods: {
        nextButtonClick(){
            store.nextButton();
            if(this.storeState.currentQuestion > this.storeState.totalQuestions-1){
                this.storeState.currentQuestion = this.storeState.totalQuestions-1;
                this.$router.push({path: '/recommendation'});
            }
        },
        backButtonClick(){
            store.backButton();
        },
        answerClick(){
            store.answerAsButton();
        },
        navClick(key){
            this.storeState.chosenTraits[this.storeState.currentQuestion] = this.storeState.picked;
            //nbuttonnav being overwritten by " "" v for not reading the previosuly existing value?
            this.storeState.currentQuestion = key; //update currentquestion
            this.storeState.picked = this.storeState.chosenTraits[key]; //maybe this will solve? test tmrw
            if(this.storeState.chosenTraits[this.storeState.currentQuestion] == null || this.storeState.chosenTraits[this.storeState.currentQuestion] == " "){
                this.storeState.picked = " ";
                this.storeState.currentStatus = "Skip";
            }
        }
    }
}
// make function for every question that would return characters related?
</script>
