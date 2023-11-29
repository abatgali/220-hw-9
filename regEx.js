let stringText = document.getElementById('string')
let zipText = document.getElementById('zip')
let ccText = document.getElementById('ccard')
let phoneText = document.getElementById('phone')
console.log(zipText)

// regex

function validateString() {
    
    let vs1 = /ralph/i;
    // i: case insensitive
    let vs2 = /^(cat)/;
    // ^ beginning
    let vs3 = /dog$/
    // $ ending constraint

    // document.getElementById('stringAns').innerText = vs1.test(stringText.value)
    // document.getElementById('stringAns').innerText = vs2.test(stringText.value)
    document.getElementById('stringAns').innerText = vs3.test(stringText.value)

}
stringText.addEventListener('blur', validateString);


function validateZip() {
    
    let vz1 = /^[0-9]{5}$/;
    // only digits 0 to 9 can be entered 5 times only for beginning and end
    let vz2 = /^\d{5}$/;
    // any digit / 0-9 just shortform of 0-9
    let vz3 = /^([0-9]{5}) ([0-9]{4}?)$/;
    
    // to cover the dash or space in between
    let vz4 = /^([0-9]{5})([- ]?[0-9]{4})?$/;

    document.getElementById('zipAns').innerText = vz4.test(zipText.value)

}
zipText.addEventListener('blur', validateZip);

function validateCC() {
    
    let vz1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)$/;

    document.getElementById('ccAns').innerText = vz1.test(ccText.value)

}
zipText.addEventListener('blur', validateCC);


function validatePhone() {
    
    let vz1 = //;

    document.getElementById('phoneAns').innerText = vz1.test(phoneText.value)

}
zipText.addEventListener('blur', validateCC);