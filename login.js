function validate(){
    var username=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(username==="chandu"&&pass==="123"){
        alert("successfully registered");
    }
    else{
        alert("Incorrect credentials");
    }
}
