// var randomNumber1 = ((Math.floor(Math.random()*6))+1);//creates a number between 0 a(nd 0.99
// if ( randomNumber1 = 1 )
// var x1 = document.getElementsByClassName("img1");
// console.log(x1);
//
// if ( randomNumber1 = 2 )
// var x2 = document.getElementsByClassName("img2");
// console.log(x2);
//
// if ( randomNumber3 = 3 )
// var x3 = document.getElementsByClassName("img3");
// console.log(x3);
//
// if ( randomNumber1 = 4 )
// var x4 = document.getElementsByClassName("img4");
// console.log(x4);
//
// if ( randomNumber1 = 5 )
// var x5 = document.getElementsByClassName("img5");
// console.log(x5);
//
// if ( randomNumber1 = 6 )
// var x6 = document.getElementsByClassName("img6");
// console.log(x6);


// Set HTML blocks into variables
// var number1 = document.getElementById('img1');
// var number2 = document.getElementById('img2');
// var number3 = document.getElementById('img3');
// var number4 = document.getElementById('img4');
// var number5 = document.getElementById('img5');
// var number6 = document.getElementById('img6');

// put images in an array
var numbers =  [];
for ( i = 0; i <= 5; i ++ ) {
 numbers[i] = document.getElementById('img' + ( i + 1 ));
}
 console.log(numbers);
//clicking on button

document.getElementById('button').onclick = function() {rollDice()};

function rollDice() {
  document.getElementsByClassName('container')[0].innerHTML = '';

}

// clean the content from container

// // Create a random number between 1-6;
var randNum1 = Math.floor(Math.random() * 5) + 1;
var randNum2 = Math.floor(Math.random() * 5) + 1;
// // select container element
var parentElement = document.getElementsByClassName('container')[0];
console.log(parentElement);
for ( y = 0; y <= 5; y ++ ) {
  if ( randNum1 === y) {
    parentElement.appendChild(numbers[y]);
  }
}
// for ( x = 0; x <= 5; x ++) {
//     if ( randNum2 === x) {
//     parentElement.appendChild(numbers[x])[1];
// }
// }
console.log(parentElement);

// switch(randNum) {
//   case 1:
//     parentElement.appendChild(number1);
//     break;
//   case 2:
//     parentElement.appendChild(number2);
//     break;
//   case 3:
//     parentElement.appendChild(number3);
//     break;
//   case 4:
//     parentElement.appendChild(number4);
//     break;
//   case 5:
//     parentElement.appendChild(number5);
//     break;
//   case 6:
//     parentElement.appendChild(number6);
//     break;
//   default:
//     console.log('Out of the case?');
// }
