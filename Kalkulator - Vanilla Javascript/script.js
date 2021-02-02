// pobieramy elementy


// pierwszy czlon dzialania
const currentNumber = document.querySelector('.currentNumber');
// drugi czlon dzialania
const previousNumber = document.querySelector('.previousNumber p')
// znak matematyczny + - : * ^
const mathSign = document.querySelector('.mathSign');
// klawisze z numerami
const numbersButtons = document.querySelectorAll(".number");
// klawisze z operatorami
const operatorsButtons = document.querySelectorAll(".operator");
// klawisz =
const equalsButton = document.querySelector(".equals");
// klawisz C
const clearButton = document.querySelector(".clear");
/////////////////////////////////////////////////////////////////////

// zmienna przechowujaca wynik

let result = "";

//


// funkcja Wyświetlania liczb na ekranie

function displayNumbers() {

  // mala instrukcja kiedy klikniemy przecinek czy tam kropke zeby pojawilo nam sie 0. automatycznie
  if(this.textContent === '.' && currentNumber.innerHTML === ''){
    currentNumber.innerHTML = '0'
  }
  
  // i instrukcja zeby nie mozna bylo dac wecej przecinkow bo widzialem ze....
  if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;  

  // a teraz poprostu wyswietlanie kliknietej liczby na ekranie
   currentNumber.innerHTML += this.textContent;

 

}


// funkcja zajmująca się operatorami
function operate() {

  if(currentNumber.innerHTML === '') return;
 else {
  mathSign.innerHTML = this.textContent;
  previousNumber.innerHTML = currentNumber.innerHTML;
  currentNumber.innerHTML = '';
 }
  
  

}

// funkcja odpalana znakiem rownosci obliczanie i pokazanie wyniku

function showResult() {
// przypiszemy sobie dane do zmiennych zeby miec bardziej czytelna instrukcje
 let operator = mathSign.innerHTML;
 let a = Number(currentNumber.innerHTML); 
 let b = Number(previousNumber.innerHTML);

 // instrukcja warunkowa switch
    switch(operator) {
       case "+":
       result =  a + b;
       break;
       case "-":
       result = a - b;
       break;
       case ":":
       result = b / a;
       break;
       case "x":
       result = a * b;
       break;
       case "2^":
       result = b ** a ;
       break;      
     
         
  
    
    /// 
  }
    // wyswietlajac result czyscimy nasz znak arytmetyczny i previous number
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}



// funkcja czyszcząca wszystko

function clearScreen() {

currentNumber.innerHTML = '';
previousNumber.innerHTML = '';
mathSign.innerHTML = '';
result = '';


}




// NASLUCHIWANIE PRZYCISKOW 
//
///////////////////////////////////////////////
// nasluchiwanie na przyciski z operatorami
operatorsButtons.forEach((button) => button.addEventListener("click", operate));

// nasluchiwanie na przycisk Equals
equalsButton.addEventListener("click", showResult);

// nasluchiwanie na przycisk Clear
clearButton.addEventListener("click", clearScreen);

// Nasłuchiwanie na przyciski z liczbami
numbersButtons.forEach((button) =>
  button.addEventListener("click", displayNumbers)
);
