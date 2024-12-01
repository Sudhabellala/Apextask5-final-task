document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Bakery Bliss!');

    const heroButton = document.querySelector('.hero .btn');
    heroButton.addEventListener('click', () => {
        alert('Redirecting to Products Page...');
        window.location.href = 'products.html';
    });
});

// Form validation

function disp1(){
    var fname=document.getElementById("firstname").value;
    if(fname==""){
        document.getElementById("para1").innerHTML="Enter First Name";
        document.getElementById("para1").style.color="red";
        return false;
    }
    else{
        document.getElementById("para1").style.display="none";
        return true;
    }
}

function disp2(){
    var lname=document.getElementById("lastname").value;
    if(lname==""){
        document.getElementById("para2").innerHTML="Enter Last Name";
        document.getElementById("para2").style.color="red";
        return false;
    }
    else{
        document.getElementById("para2").style.display="none";
        return true;
    }
}

function disp3(){
    var newpass=document.getElementById("password").value;
    if(newpass==""){
        document.getElementById("para3").innerHTML="Enter password";
        document.getElementById("para3").style.color="red";
        return false;
    }
    else{
        document.getElementById("para3").style.display="none";
        return true;
    }
}

function disp4(){
    var pass=document.getElementById("confirmpassword").value;
    if(pass==""){
        document.getElementById("para4").innerHTML="Enter confirm password";
        document.getElementById("para4").style.color="red";
        return false;
    }
    else{
        document.getElementById("para4").style.display="none";
        return true;
    }
}

function disp5(){
    var mail=document.getElementById("email").value;
    if(mail==""){
        document.getElementById("para5").innerHTML="Enter email";
        document.getElementById("para5").style.color="red";
        return false;
    }
    else{
        document.getElementById("para5").style.display="none";
        return true;
    }
}

function disp(){
    var first=document.getElementById("firstname").value;
    var last=document.getElementById("lastname").value;
    var pass1=document.getElementById("password").value;
    var pass2=document.getElementById("confirmpassword").value;
    var email=document.getElementById("email").value;
    const hasNumbers=/\d/;
    if (hasNumbers.test(first) || hasNumbers.test(last)) {
        document.getElementById("error1").innerHTML="Numbers are not allowed in first name and last name";
        document.getElementById("error1").style.color="red";
        return false;
    } 
    if(first =="" || last=="" ||  pass1=="" || pass2=="" || email==""){
        document.getElementById("error1").innerHTML="! Enter All The Fields"
        document.getElementById("error1").style.color="red";
        return false;
    }
    else if(pass1 === pass2){
        return true;
    }
    else{
        document.getElementById("error1").innerHTML="! Passwords do not match"
        document.getElementById("error1").style.color="red";
        return false;
    }
}

let cart = [];
let totalPrice = 0;

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        listItem.className = 'list-group-item';
        cartItems.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

document.querySelectorAll('.buy').forEach(button => {
    button.addEventListener('click', event => {
        const productName = event.target.getAttribute('data-name');
        const productPrice = parseFloat(event.target.getAttribute('data-price'));
        cart.push({ name: productName, price: productPrice });

        updateCart();
    });
});
