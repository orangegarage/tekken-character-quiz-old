// individual functions for each question so that when I create the Questions.vue from parent
// pass in index of question, and the function related to that question
//question component will run that function soon as person chooses answer and return the list of characters.
import quiz from "../assets/quiz.json";
import characters from "../assets/characters.json";
// import Recommendation from "../views/Recommendation.vue";

export const store = {
    state: {
        currentQuestion: 0,
        // answeredQuestion: 0,
        currentStatus: "Skip",
        picked: null,
        chosenTraits: [],
        jsonQuestion: quiz.questions,
        totalQuestions: quiz.questions.length,
        jsonCharacters: characters.characters,
        final: ""
    },
    nextButton(){
        // console.log(this.state.currentQuestion);
        if(this.state.chosenTraits[this.state.currentQuestion+1] != null){
            console.log("already chosen: "+ this.state.chosenTraits[this.state.currentQuestion+1]);
            this.state.picked = this.state.chosenTraits[this.state.currentQuestion+1];
            // console.log(this.state.chosenTraits);
        }

        this.state.chosenTraits[this.state.currentQuestion] = this.state.picked;
        this.state.currentQuestion++;
        if(this.state.chosenTraits[this.state.currentQuestion] == null){
            this.state.picked = null;
            this.state.currentStatus = "Skip";
        }
        if(this.state.currentQuestion > this.state.totalQuestions-1){
            this.state.currentStatus = "Submit";
            this.pointAssign();//need to fix where this goes- wait no i don't
        }
    },

    backButton(){
        this.state.currentQuestion--;
        if(this.state.chosenTraits[this.state.currentQuestion] != null){
            console.log("already chosen: "+ this.state.chosenTraits[this.state.currentQuestion]);
            this.state.picked = this.state.chosenTraits[this.state.currentQuestion];
        }
        else{
            this.state.currentStatus = "Skip";
        }

        if(this.state.currentQuestion <= 0){
            console.log("this is the first question");
            this.state.currentQuestion = 0;
        }
    },
    answerAsButton(){
        this.state.currentStatus = "Next";
        if(this.state.currentQuestion+1 == this.state.jsonQuestion.length){
            // alert("this is the last question");
            this.state.currentStatus = "Submit";
        }
    },
    pointAssign(){
        // List of traits that were prioritized, with the 'prioritize' removed
        console.log("point assign start");
        const prioritizedTraits = this.state.chosenTraits.filter(trait => trait.includes("prioritize")).map(trait => trait.replace("prioritize", ""));

        // Same thing but for preferred traits
        const preferredTraits = this.state.chosenTraits.filter(trait => trait.includes("prefer")).map(trait => trait.replace("prefer", ""));

        // Modify jsonCharacters directly, no need to create a new object for this if it will have the same structure as jsonCharacters. It won't modify the original json.
        this.state.jsonCharacters = this.state.jsonCharacters.map(character => {
            // The number of tags the character has that were found in prioritizedTraits
            const characterPrioritizedTraits = character.tags.filter(tag => prioritizedTraits.includes(tag)).length;
            const characterPreferredTraits = character.tags.filter(tag => preferredTraits.includes(tag)).length;
            character.score = characterPrioritizedTraits * 10 + characterPreferredTraits * 5;
            return character;
        });

        const characterHighestScore = Math.max(...this.state.jsonCharacters.map(character => character.score), 0);
        console.log("CharacterHighestScore: "+ characterHighestScore);
        // Or to show multiple recommendations
        const charactersSortedHighestScores = this.state.jsonCharacters.sort((a, b) => b.score - a.score);
        const justTheScores = this.state.jsonCharacters.sort((a, b) => b.score - a.score).map(char => char.score);
        console.log("justTheScores: "+ justTheScores);
        console.log("charactersSortedHighestScores: " + charactersSortedHighestScores);
        // this.state.final = characterHighestScore;
        // var score = 0;
        // for(var i=0; i< this.state.jsonCharacters.length;i++){ 
        //     var name = this.state.jsonCharacters[i].name;
        //     console.log("Character: "+ name);
        //     for(var j=0;j<this.state.chosenTraits.length;j++){
        //         var originalTraits = this.state.jsonCharacters[i].tags[j];
        //         if(this.state.chosenTraits[j]&&this.state.chosenTraits[j].includes(originalTraits)){ //see if any traits line up with a char
        //             //then we check if it is 'prioritize' or 'prefer'
        //             if(this.state.chosenTraits[j].includes("prioritize")){
        //                 console.log(name +" +10");
        //                 //need to actually assign points now lmao
        //                 //json file update or array update?
        //                 this.state.final[i] = [name, score];
        //                 score += 10;
        //                 console.log(this.state.final[i]);
        //             }
        //             else if(this.state.chosenTraits[j].includes("prefer")){
        //                 console.log(name + " +5");
        //             }
        //         }
        //         // console.log("traits: " + this.state.jsonCharacters[i].tags[j]);
        //         //var commonTrait = this.state.chosenTraits.find(a => a.includes(this.state.jsonCharacters[i].tags[j]));
        //         //maybe declare var at start of function to decide its non assigned value
        //     }
        // }
    }
}
