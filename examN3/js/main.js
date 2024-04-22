var elFrom = document.querySelector('.form-js')
var elUserName = document.querySelector('.input-username')
var elUserPassword = document.querySelector('.input-password')


function myFunction(){
    var NameValue = elUserName.value
    var PasswordValue = elUserPassword.value
    var elParagraph = document.querySelector('.error-code')
    console.log(NameValue)
    if(NameValue === 'Muslimbek' && PasswordValue === '1234'){
        window.location.href = 'book.html'
    }
    else{
        elParagraph.innerHTML = 'Forgot password?'
    }
    console.log('dddd');
}


// Search Input Making start





