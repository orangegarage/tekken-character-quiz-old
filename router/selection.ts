import VueRouter from 'vue-router'

function prioritize(attribute, value){
    console.log("answer prioritizes: " + value);
    
}

function consider(attribute, value){
    console.log("answer considers: " + value);
}

function ignore(attribute){
    console.log("answer ignores: " + attribute);
}

console.log("hello");
import characters from '../characters.json';
var character = JSON.parse(characters);
console.log(character.characters[0]);

function chooseCharacter(){
        return characters;
}