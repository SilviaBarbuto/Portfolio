function sendMail(){
    var params ={
        name: document.getElementById("name").value , 
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value , 
    };

const serviceID= "service_am3dean";
const templateID= "template_k0tcqco";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
        }
    });
});

