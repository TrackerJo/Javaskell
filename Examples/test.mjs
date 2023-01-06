import {TranslateResults, PatternSplitting} from '../javaskell.mjs'

//Example function to translate result
function generateRandNum(){
    //Creates a random number between 0 and 2
    return Math.floor(Math.random() * 3);
    



}

function error(x){
    //Throws an error if the result is not in the translation
    throw new Error(x)
}

//Example of TranslateResults functionResult , translation, and error
console.log(TranslateResults(generateRandNum(), {0: "heads", 1: "tails"}, error));

//Example of PatternSplitting  string, pattern, and type
console.log(PatternSplitting("Hello World", ["greeting", "name"], "words"));