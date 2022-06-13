const form = document.getElementById('form');
const fName = document.getElementById('fname');
const mName = document.getElementById('mname');
const lName = document.getElementById('lname');
const address = document.getElementById('address');
const contact = document.getElementById('contact');
const birthday = document.getElementById('dob');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});






const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    // inputControl.classList.add('error');
    // inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    // inputControl.classList.add('success');
    // inputControl.classList.add('error');
}

const validateInputs = () => {
    const fnameValue = fName.value.trim();
    const mnameValue = mName.value.trim();
    const lnameValue = lName.value.trim();
    const addressValue = address.value.trim();
    const contactValue = contact.value.trim();
    const genders = document.getElementsByName('gender');

    let selectedBtn;

    // validation for bdate
    var userBirthDate = new Date();
    var todayYear = (new Date()).getFullYear(); // Always use FullYear!!
    var cutOff19 = new Date(); // should be a Date
    cutOff19.setFullYear(todayYear - 18); // ...
    var cutOff95 = new Date();
    cutOff95.setFullYear(todayYear - 95);
    if (userBirthDate > cutOff19) {
        dobErrMsg.innerText = "You have to be older than 17";
    } else if (userBirthDate < cutOff95) {
        dobErrMsg.innerText = "You have to be younger than 95";
    } else {
        dobErrMsg.innerHTML = "";
    }

    // validation for gender
    for (const gender of genders) {
        if (gender.checked) {
            selectedBtn = gender.value;
        }
    }
    if (genders[0].checked == false && genders[1].checked == false) {
        document.getElementById('message').innerHTML = 'Select gender'
    }

    // validation for persong info
    if (fnameValue === '') {
        setError(fName, 'First Name is required');
    }

    if (lnameValue === '') {
        setError(lName, 'Last Name is required');
    }

    if (addressValue === '') {
        setError(address, 'Address is required');
    }

    if (contactValue === '') {
        setError(contact, 'Phone number is require');
    }

    // validation for med-history
    let checkboxes = document.querySelectorAll(`input[name="med-history"]`);
    let chkBox = [];

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            chkBox.push(checkbox.value);
        }
    }


    // validaiton for symptoms
    let symptoms = document.querySelector('#symptoms');
    let selectedValues = [...symptoms.options]
        .filter(option => option.selected)
        .map(option => option.text);

    let questions = document.getElementsByName('chk');

    if (questions[0].checked == false && questions[1].checked == false) {
        document.getElementById('message1').innerHTML = 'Select gender'
    }


    const result = `Patient Information \n First Name : ${fnameValue} \n Middle Name : ${mnameValue} \n Last Name : ${lnameValue} \n Address : ${addressValue} \n Birthday : ${userBirthDate} \n Contact : ${contactValue}\n Gender : ${selectedBtn}\n Medical History : ${chkBox} \n Current Symptoms : ${selectedValues} `
    alert(result)

    // alert(chkBox)
}