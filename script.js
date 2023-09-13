// function validation(){
//     var name = document.getElementById("name").value;
//     var subject = document.getElementById('subject').value;
//     var number = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
//     var text;

//     var error_message = document.getElementById('error_message');

//     error_message.style.padding = "10px";

//     if(name.length < 5){
//         text = "Please Enter Valid Name";
//         error_message.innerHTML = text;
//         return false;
//     }

//     return false;
// }

function validation(){
 var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var number = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    // var message = document.getElementById("message").value;
    var text;

    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    if(name.length < 5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length < 5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length !=10){
        text = "Please Enter Valid Contact";
        error_message.innerHTML = text;
        return false;
    }

    
    return false;
}