// individual functions for each question so that when I create the Questions.vue from parent
// pass in index of question, and the function related to that question
//question component will run that function soon as person chooses answer and return the list of characters.

export const store = {
    state: {
        currentQuestion: 0,
        currentStatus: "Skip"
    },
    nextButton(){
        this.state.currentQuestion++;
        this.state.currentStatus = "Skip";
    },
    backButton(){
        this.state.currentQuestion--;
        this.state.currentStatus = "Skip";
    },
    answerAsButton(){
        this.state.currentStatus = "Next";
    }
}

//submit button will: route to character page at the end.