function validEmail(str) {
  //your JS code here.
  var checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
   return checkEmail; 
	
	
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
