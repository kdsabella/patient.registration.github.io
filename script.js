const name1 = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    if (name1.value == 'patient' && password.value == 'patient123') {
        document.location.href = "patient.html"
    }

    if (name1.value === '' || name1.value == null) {

        alert('Please input your name')

    }
    if (password.value.length <= 8) {
        alert('Password must be longer than 8 characters')

    }
    if (password.value.length >= 15) {
        alert('Password must be less than 15 characters')

    }


    e.preventDefault();
})