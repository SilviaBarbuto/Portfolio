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
        alert("your message sent successfylly");
    })
    .catch((err) => console.log(err));
}

document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const navUL = document.querySelector('nav ul');
    navUL.style.display = navUL.style.display === 'block' ? 'none' : 'block';
  });
  