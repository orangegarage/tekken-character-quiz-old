// individual functions for each question so that when I create the Questions.vue from parent
// pass in index of question, and the function related to that question
//question component will run that function soon as person chooses answer and return the list of characters.
import quiz from "../assets/quiz.json";

export const store = {
    state: {
        currentQuestion: 0,
        answeredQuestion: 0,
        currentStatus: "Skip",
        picked: "",
        jsonQuestion: quiz.questions,
        totalQuestions: quiz.questions.length
    },
    nextButton(){
        this.state.currentQuestion++;
        if(this.state.currentStatus == "Next"){
            this.state.answeredQuestion++;
        }
        else if(this.state.currentQuestion == this.state.totalQuestions-1){
            console.log("this is the last question"); 
            this.state.currentStatus = "Submit";
        }
        else if(this.state.currentQuestion>= this.state.totalQuestions-1){
                this.state.currentQuestion = this.state.totalQuestions-1;
                window.open("#/recommendation", "_self");
        }
        console.log(this.state.currentQuestion);
        console.log("total Questions: " + this.state.totalQuestions);
        console.log("Has answered: "+ this.state.answeredQuestion + " out of " + this.state.totalQuestions + " questions so far");
        this.state.currentStatus = "Skip";
    },
    backButton(){
        this.state.currentQuestion--;
        this.state.currentStatus = "Skip";
        console.log(this.state.currentQuestion);
        if(this.state.currentQuestion == 0){
            console.log("this is the first question");
        }
        else if(this.state.currentQuestion<=0){
            this.state.currentQuestion = 0;
        }
    },
    answerAsButton(){
        this.state.currentStatus = "Next";
        if(this.state.currentQuestion+1 == this.state.jsonQuestion.length){
            // alert("this is the last question");
            this.state.currentStatus = "Submit";
        }
    }
}