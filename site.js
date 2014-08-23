

$(document).ready(function(){

	// click to view the numbers
   $("button").on("click", getInput);

});
//find the Fizz, Buzz and FizzBuzz
  function getNumber(){
  for( var i= 1; i<101; i++){   

        if((i%5==0) && (i%3==0))
          { $(".num").append(i + " Fizzbuzz" + "<br>");}

     //divisible by  3 
        else if (i%3==0)
          { $(".num").append(i + " Fizz" + "<br>");}

   //divisible by  5
        else if(i%5==0) 
         { $(".num").append(i + " buzz" + "<br>");}

   //all else
        else { $(".num").append(i + "<br>");}  
		}
}
//get the number from user
  function getInput() {
    var custInput = $(".datainput");
    var input = custInput.val();

  if ((input !== "") && ($.trim(input) !== "")) {
    getNumber(input);
    custInput.val("");
  }
  else alert("Please enter a number between 1 and 100");
}




