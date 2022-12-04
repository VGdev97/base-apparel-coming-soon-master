const form = document.getElementById('form')
const emailInput = document.getElementById('emailInput')
const submitButton = document.getElementById('submit-button')

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

submitButton.addEventListener('click',e =>{
    e.preventDefault()

    const emailValue = emailInput.value;
    
    if(emailValue == ''){
        form.classList.add('active')
    }else if(!validateEmail(emailValue)){
        form.classList.add('active')
    }else{
        form.classList.remove('active')
    }



    

})

