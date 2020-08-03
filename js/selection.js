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

var characters = fs.readFileSync("js/characters.json");
console.log(characters.characters);
console.log("name: ", characters[1].characters);


function chooseCharacter(){
        return characters;
}