function prioritize(attribute, value){
    console.log("answer prioritizes: " + value);
    
}

function consider(attribute, value){
    console.log("answer considers: " + value);
}

function ignore(attribute){
    console.log("answer ignores: " + attribute);
}

var fs = require('fs');
/*var contents = fs.readFile("js/characters.json", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
*/
console.log("hello");
import {characters} from '../characters.json';
var character = JSON.parse(characters);
console.log(character.characters[0]);

function chooseCharacter(){
        return characters;
}