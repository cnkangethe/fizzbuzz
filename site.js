

$(document).ready(function(){

	// click to view the numbers
   $("button").on("click", getNumber);
    $(".click").toggle();

   function getNumber() {
   text ="";
   for (var i= 1; i < 101; i++){
   	//divisible by both 3 and 5
   if((i%5==0) && (i%3==0)){
   text  += i +" Fizzbuzz" + "<br>"}

   //divisible by  3 
   else if (i%3==0){
   text += i + " Fizz"+ "<br>" }

   //divisible by  5
   else if(i%5==0) {
   text += i + " Buzz" + "<br>"}

   //all else
   else (text += i + "<br>" );
		
	}
	 document.getElementById("num").innerHTML = text;
    }

});


