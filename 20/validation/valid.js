let phoneNumber = '+380161232435'; //12
let shortPhoneNumber = '0621231223'; // 9

let phoneRegex = /^\+?\d{9,12}$/;

// if(phoneRegex.test(shortPhoneNumber)){
//     alert('Valid');
// }
// else{
//     alert('Invalid');
// }

let emailValue = 'test_user@gmail.com';
let emailRegex = /^[a-zA-Z._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;

if(emailRegex.test(emailValue)){
    alert('Valid email');
}
else{
    alert('Invalid email');
}