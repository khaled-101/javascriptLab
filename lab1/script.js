// function sort(a, b, c) {
//     if (a > b && a > c) {
//         if (b > c) {
//             alert(a + ", " + b + ", " + c);
//         } else {
//             alert(a + ", " + c + ", " + b);
//         }
//     } else if (b > c && b > a) {
//         if (a > c) {
//             alert(b + ", " + a + ", " + c);
//         } else {
//             alert(b + ", " + c + ", " + a);
//         }
//     } else {
//         if (a > b) {
//             alert(c + ", " + a + ", " + b);
//         } else {
//             alert(c + ", " + b + ", " + a);
//         }
//     }
// }

// var a = 3;
// var b = 2;
// var c = -7;
// sort(a, b, c);
// function fizz() {
//     for (var i = 1; i <= 100; i++) {
//         if ((i % 3 == 0) && (i % 5 == 0)) {
//             console.log("FizzBuzz"); 
//         } else if (i % 3 == 0) {
//             console.log("Fizz"); 
//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i); 
//         }
//     }
// }
// fizz();
// function sum() {
//     var sum = 0 
//         for (var i = 1; i <= 1000; i++) {
//             if ((i % 3 == 0) && (i % 5 == 0)) {
//                 sum += i
//             } 
         
//         }
//         console.log(sum)
//     }
//     sum();
function guess() {
    let a = 7
    counter = 1
    while (true){
        var guess = prompt("enter your guess ")
        if (parseInt(guess) == a){
            console.log("Good Work")
            break;
        }
        else {
        if (counter == 3 ){
            console.log("Game over no tries left !")
            break
        }
            var choice = confirm("Wrong answer wanna try again yes//No ")
            if (choice == true){
                counter ++
            }
            else {
                console.log("Game over")
                break;
            }
        }
    } 
}
guess()



