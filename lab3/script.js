function char_to_alphabet(text){
    var x = text.toLowerCase()
    var result = ""
    for (var i of x){
        if (i >= 'a' && i <= 'z'){
            var charposition = i.charCodeAt(0) - 96
            result += charposition + " ";
        } 
        
    }
    return result
}
console.log(char_to_alphabet("The sunset sets at twelve o' clock."));
function arrangewords(words) {
    var arr = words.split(" "); 
    arr.sort(function(a, b) {
        return a.match(/\d/) - b.match(/\d/); 
    });

    return arr.join(" "); 
}
console.log(arrangewords("is2 Thi1s T4est 3a"));
console.log(arrangewords("4of Fo1r pe6ople g3ood th5e the2"));
function specialMultiply(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    } else {
     
        return function(x) {
            return args[0] * x;
    }
}
}
console.log(specialMultiply(3, 4)); 
console.log(specialMultiply(3)(4));
function guessingGame(a) {
    var answer = Math.floor(Math.random() * 11); 
    var guesses = 0; 

    return function(guess) {
        if (guesses >= a) {
            return "No more guesses! The answer was " + answer + " Please start a new game.";
        }

        guesses++; 
        if (guess === answer) {
            return "You got it!";
        } else if (guess < answer) {
            return "Your guess is too low!";
        } else {
            return "Your guess is too high!";
        }
    };
}


var game = guessingGame(4); 

console.log(game(1));
console.log(game(8));
console.log(game(5)); 
console.log(game(7)); 
console.log(game(9)); 

var game2 = guessingGame(3); 

console.log(game2(5)); 
console.log(game2(3));
console.log(game2(1));
console.log(game2(7));

