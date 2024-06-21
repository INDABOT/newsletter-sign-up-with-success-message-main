const submitBtn = document.getElementById('btn');
const email = document.getElementById('mailInput');
const form = document.getElementById('form');
const small = document.querySelector('small')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value;

    if(!validateEmail(emailVal) || emailVal=== "") {
        email.classList.add("error");
        small.innerText = "valid mail required"
    }else {
        email.classList.remove('error');
        small.innerText ='';
    }

});

function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  