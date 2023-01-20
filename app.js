
// For Increment and decrement
//initialising a variable name data
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment 
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement 
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}


// For validating mail
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}