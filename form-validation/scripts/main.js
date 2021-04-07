function formValidation() {

    const firstName = document.querySelector('[data-first-name]');
    const lastName = document.querySelector('[data-last-name]');
    const hidden = document.querySelector('[data-hidden]');
    const hiddenMsg = document.querySelector('.hidden-message');
    const form = document.querySelector('[data-form]');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        
        const firstNameValue = firstName.value.trim(); 
        const lastNameValue = lastName.value.trim();
        if(firstNameValue === '' && lastNameValue === '') {
            firstName.classList.add('error');
            lastName.classList.add('error');
        } else if(firstNameValue === '' && lastNameValue !== '') {
            firstName.classList.add('error');
            lastName.classList.add('success');
        }  else if(firstNameValue !== '' && lastNameValue === '') {
            firstName.classList.add('success');
            lastName.classList.add('error');
        } else if(firstNameValue !== '' && lastNameValue !== '') {
            firstName.classList.add('success');
            lastName.classList.add('success');
            hidden.innerText = firstName.value;
            hiddenMsg.style.visibility = 'visible';
            setTimeout(hideMessage, 5000);
           
        }
    }

    function hideMessage() {
        hiddenMsg.style.visibility = 'hidden'; 
        firstName.classList.remove('success');
        lastName.classList.remove('success');
        firstName.classList.remove('error');
        lastName.classList.remove('error');
        form.reset();
    }

}

formValidation();


