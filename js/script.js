function validate () {
    const errors = [];
    //get values from the form
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const zip = document.getElementById('zip').value;
    const age = parseInt(document.getElementById('age').value);
    const agreed = document.getElementById('yes').checked;
    const opt_in = document.getElementById('opt_in').checked;

    //regexes for validation
    const name_regex = /^[a-z.'-]+$/i;
    const email_regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const zip_regex = /^\d{5}(?:[-\s]\d{4})?$/;

    check_input(fname, lname, email, zip, age, agreed);

    //check errors and display results to user
    if (errors.length > 0) {
        //there were errors
    } else {
        //there were no errors
    }

    //for debugging
    console.log(fname, lname, email, zip, age, agreed, opt_in);

    function check_input (fname, lname, email, zip, age, agreed) {
        if (fname.match(name_regex) === null) {
            errors.push("You did not enter a valid first name.");
        }
        if (lname.match(name_regex) === null) {
            errors.push("You did not enter a valid last name.");
        }
        if (email.match(email_regex) === null) {
            errors.push("You did not enter a valid email address");
        }
        if (zip.match(zip_regex) === null) {
            errors.push("You did not enter a valid zip code.");
        }
        if (isNaN(age)) {
            errors.push("You must enter your age.");
        }
        if (age < 18) {
            errors.push("You must be at least 18 years old.");
        }
        if (age > 110) {
            errors.push("You did not enter a valid age.");
        }
        if (!agreed) {
            errors.push("You must agree to our terms of service.");
        }
    }
    console.log(errors);
}

function toggle_dark_mode() {
    const p = document.querySelector('.style-toggle p');
    const body = document.body;
    const form_wrapper = document.getElementById('form_wrapper');
    const form_wrapper_top = document.getElementById('form_wrapper_top');
    const isDarkMode = (form_wrapper.classList.contains('dark')) ? true : false ;
    if (isDarkMode) {
        form_wrapper.classList.remove('dark');
        form_wrapper_top.classList.remove('dark');
        p.innerText = "Switch to Dark Mode";
        p.style.color = "#121212";
        body.style.backgroundColor = "#FFF";
    } else {
        form_wrapper.classList.add('dark');
        form_wrapper_top.classList.add('dark');
        p.innerText = "Switch to Light Mode";
        p.style.color = "#FFF";
        body.style.backgroundColor = "#424242";
    }
}