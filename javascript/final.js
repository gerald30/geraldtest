function register(){

var x = [];
x[0]= document.getElementById("name").value;
x[1]= document.getElementById("lname").value;
x[2]= document.getElementById("email").value;
x[3]= document.getElementById("password").value;
x[4]= document.getElementById("cpassword").value;


if(x[3] == x[4]){


	var h = [];
	h[0] = "<span style='color:red'>Please type a name!</spam>"
	h[1] = "<span style='color:red'>Please type a last name!</spam>"
	h[2] = "<span style='color:red'>Please type a email!</spam>"
	h[3] = "<span style='color:red'>Please type a password!</spam>"
	h[4] = "<span style='color:red'>Please confirm a password!</spam>"

	var divs = ["mname", "mlname", "memail", "mpassword", "mcpassword"];

	for(i in x){

		var error = h[i];
		var div = divs[i];
			if(x[i] == ""){
			document.getElementById(div).innerHTML = error;
			} else {
			document.getElementById(div).innerHTML = "ok";
					}
	}

document.getElementById("mmname").innerHTML = "your Name is " + x[0] + "<br>" + 
"your Last Name is " + x[1] + "<br>" +
"your Email is " + x[2] + "<br>" +
"and your password is " + x[3];



} else { 
document.getElementById("mmname").innerHTML = "your password is not match with your confirm password";
}
}