function validate () {
    const errors = [];
    //get values from the form
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const zip = document.getElementById('zip').value;
    const age = document.getElementById('age').value;
    const agreed = document.getElementById('yes').checked;
    const opt_in = document.getElementById('opt_in').checked;

    //for debugging
    console.log(fname, lname, email, zip, age, agreed, opt_in);
}