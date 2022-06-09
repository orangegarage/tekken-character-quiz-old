// individual functions for each question so that when I create the Questions.vue from parent
// pass in index of question, and the function related to that question
//question component will run that function soon as person chooses answer and return the list of characters.
import quiz from "../assets/quiz.json";
import characters from "../assets/characters.json";

export const store = {
    state: {
        currentQuestion: 0,
        // answeredQuestion: 0,
        currentStatus: "Skip",
        picked: " ",
        chosenTraits: [],
        jsonQuestion: quiz.questions,
        totalQuestions: quiz.questions.length,
        jsonCharacters: characters.characters,
        final: []
    },
    nextButton() {
        // console.log(this.state.picked);
        this.state.chosenTraits[this.state.currentQuestion] = this.state.picked;
        console.log(this.state.picked);
        this.state.currentQuestion++;
        if (this.state.chosenTraits[this.state.currentQuestion] != null) {
            console.log("already chosen: " + this.state.chosenTraits[this.state.currentQuestion]);
            this.state.picked = this.state.chosenTraits[this.state.currentQuestion];
        }
        console.log(this.state.chosenTraits);

        if (this.state.chosenTraits[this.state.currentQuestion] == null || this.state.chosenTraits[this.state.currentQuestion] == " ") {
            this.state.picked = " ";
            this.state.currentStatus = "Skip";
        }
        if (this.state.currentQuestion > this.state.totalQuestions - 1) {
            this.state.currentStatus = "Submit";
            this.pointAssign(); //need to fix where this goes- wait no i don't
        }
    },
    backButton() {
        this.state.currentQuestion--;
        if (this.state.chosenTraits[this.state.currentQuestion] != null) {
            this.state.picked = this.state.chosenTraits[this.state.currentQuestion];
        }
        if (this.state.chosenTraits[this.state.currentQuestion] == null || this.state.chosenTraits[this.state.currentQuestion] == " ") {
            this.state.currentStatus = "Skip";
        }

        if (this.state.currentQuestion <= 0) {
            console.log("this is the first question");
            this.state.currentQuestion = 0;
        }
    },
    answerAsButton() {
        this.state.currentStatus = "Next";
        if (this.state.currentQuestion + 1 == this.state.jsonQuestion.length) {
            // alert("this is the last question");
            this.state.currentStatus = "Submit";
        }
    },
    pointAssign() {
        // List of traits that were prioritized, with the 'prioritize' removed
        // console.log("point assign start");
        const prioritizedTraits = this.state.chosenTraits.filter(trait => trait.includes("prioritize")).map(trait => trait.replace("-prioritize", ""));
        // console.log("prioritized traits: " + prioritizedTraits);
        // Same thing but for preferred traits
        const preferredTraits = this.state.chosenTraits.filter(trait => trait.includes("prefer")).map(trait => trait.replace("-prefer", ""));
        const onlyTraits = this.state.chosenTraits.filter(trait => trait.includes("only")).map(trait => trait.replace("-only", ""));
        // console.log("preferred traits: "+ preferredTraits);

        // Modify jsonCharacters directly, no need to create a new object for this if it will have the same structure as jsonCharacters. It won't modify the original json.
        this.state.jsonCharacters = this.state.jsonCharacters.map(character => {
            // The number of tags the character has that were found in prioritizedTraits
            const characterPrioritizedTraits = character.tags.filter(tag => prioritizedTraits.includes(tag)).length;
            // console.log("prioritized length: " + characterPrioritizedTraits);
            const characterPreferredTraits = character.tags.filter(tag => preferredTraits.includes(tag)).length;
            // console.log("preferred length: " + characterPreferredTraits); 
            const characterOnlyTraits = 1 + character.tags.filter(tag => onlyTraits.includes(tag)).length;
            const onlyTraitTrueLength = character.tags.filter(tag => onlyTraits.includes(tag)).length

            character.score = characterOnlyTraits * ((onlyTraitTrueLength) * 10 + characterPrioritizedTraits * 10 + characterPreferredTraits * 5);
            console.log("character score: " + character.score);
            return character;
        });

        const characterHighestScore = Math.max(...this.state.jsonCharacters.map(character => character.score), 0);
        console.log("CharacterHighestScore: " + characterHighestScore);
        console.log(characterHighestScore);

        // Or to show multiple recommendations

        const charactersSortedHighestScores = this.state.jsonCharacters.sort((a, b) => b.score - a.score);
        const justTheScores = this.state.jsonCharacters.sort((a, b) => b.score - a.score).map(char => char.score);
        console.log("justTheScores: " + justTheScores);
        console.log(charactersSortedHighestScores);
        this.state.final = charactersSortedHighestScores;

    }
}