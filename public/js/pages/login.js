const loginForm=document.getElementById('login-form');
const mailEl=document.getElementById('email');
const passwordEl=document.getElementById('password');
const emailErrorsEl = document.getElementById( 'email-errors' );
const passwordErrorsEl = document.getElementById( 'password-errors' );


const validatePassword = () => {
                
    let errors = []; // to hold the error message

    // Inputs elements have value property - the current value they hold. Other kind of element do not have value property
    const password = passwordEl.value.trim();
    console.log( password );

    if( password === '' ) {
        errors.push( 'Password is required' );
        return errors[0];
    }

    // minimum 8 characters
    if( password.length < 8 ) {
        errors.push( 'Minimum 8 characters' );
    }

    // > 1 uppercase
    // /[A-Z]/ -> new RegExp( '[A-Z]' )
    if( /[A-Z]/.test( password ) === false ) {
        errors.push( 'At least 1 uppercase' );
    }

    // > 1 lowercase
    if( /[a-z]/.test( password ) === false ) {
        errors.push( 'At least 1 lowercase' );
    }
    
    // > 1 special character
    if( /[&%$#@!~}{}\[\];:]/.test( password ) === false ) {
        errors.push( 'At least 1 special character' );
    }

    // > 1 digit
    if( /[0-9]/.test( password ) === false ) {
        errors.push( 'At least 1 digit' );
    }

    return errors.join( ', ' );

   
};
function bindListeners(){
    loginForm.addEventListener('submit',function(event){
        event.preventDefault();
        const passwordErrors = validatePassword();
                const emailErrors = validateEmail();
                
                emailErrorsEl.textContent = emailErrors;
                passwordErrorsEl.textContent = passwordErrors;

                // do not proceed if there are errors
                if( passwordErrors || emailErrors ) {
                    return;
                }
            
                // all good!
                // collect the values in the way the backend expects
                // code to submit the form...
                const credentials = {
                    email: mailEl.value.trim(),
                    password: passwordEl.value.trim()
                };
                fetch('https://mymeetingsapp.herokuapp.com/')
        });
};
document.addEventListener('DOMContentLoaded',function(){

    validatePassword();
})