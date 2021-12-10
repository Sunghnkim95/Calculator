let heldValue = null;
let heldOperation = null;
let nextValue = null;

$(".digits button").click(function(){

    let result = $(this).text(); //this takes the letter form of num n define to result
    
    if (nextValue === null){
        nextValue = "0"
    }

    // nextValue = nextValue * 10
    nextValue = nextValue + result;

    console.log(nextValue);

    // $('.next-value').text(nextValue); *another way to update val*
    
    //update next Value

    updateDisplay();
  });


//**function used to update value
function showValue(location, value) {
  if (value === null) {
    $(location).text('');
  } 
  else {
    $(location).text( Number(value));
  }
}


//**function used to update display
function updateDisplay() {
  showValue('.held-value', heldValue);
  showValue('.next-value', nextValue);
}

//                ADD CLICK FUNCTION
$('.add').click(function(){
  $('.next-operation').text('+')

  setHeldOperation(add);
}); 

//                SUBTRACT CLICK FUNCTION

$('.subtract').click(function(){
  $('.next-operation').text('-')

  setHeldOperation(subtract);
}); 

//                MULTIPLY CLICK FUNCTION

$('.multiply').click(function(){
  $('.next-operation').text('*')

  setHeldOperation(multiply);
}); 

//                DIVIDE CLICK FUNCTION

$('.divide').click(function(){
  $('.next-operation').text('/')

  setHeldOperation(divide);
}); 

//                CLICK
$('.equals').click(function(){
  $('.next-operation').text('')

  setHeldOperation(null);
});


function add(x, y) {
  return Number(x) + Number(y)

}

function subtract(x, y) {
  return Number(x) - Number(y)
}

function multiply(x, y) {
  return Number(x) * Number(y)
}

function divide(x, y) {
  return Number(x) / Number(y)
}


function setHeldOperation(operation) {
  if(heldOperation !== null){
    heldValue = heldOperation(heldValue, nextValue);
  }
  else if(nextValue !== null){
    heldValue = nextValue;
  }
  heldOperation =  operation;
  nextValue = null;

  updateDisplay();
}


                      //** Clear all Function
function clearAll(){
  heldValue = null;
  heldOperation = null;
  nextValue = null;

  updateDisplay();
} //assigning the func

$('.clear-all').click(function(){
  clearAll();
}); //calling the func


                        //** Clear entry Function
function clearEntry(){
  nextValue = null;

  updateDisplay();
} //assigning the func

$('.clear-entry').click(function(){
  clearEntry();
}); //calling the func
