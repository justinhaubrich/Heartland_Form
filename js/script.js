function validate () {
    const errors = [];
    //get values from the form
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const zip = document.getElementById('zip').value.toString();
    const age = parseInt(document.getElementById('age').value);
    const agreed = document.getElementById('yes').checked;
    const opt_in = document.getElementById('opt_in').checked;
    const message_div = document.getElementById("message");

    //regexes for validation
    const name_regex = /^[a-z.'-]+$/i;
    const email_regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const zip_regex = /^\d{5}(?:[-\s]\d{4})?$/;

    check_input(fname, lname, email, zip, age, agreed);

    //check errors and display results to user
    if (errors.length > 0) {
        //there were errors
        let message_html = (errors.length === 1)? "<span class='bold'>Hold on, there is an issue.</span><br>":"<span class='bold'>Hold on, there are some issues.</span><br>";
        errors.forEach( (error) => {
            //place the error message
            if (error.field !== "terms") {
                let div = document.querySelector(`#form_wrapper #${error.field} ~ .validation_message`);
                div.innerText = error.msg;
            } else {
                let div = document.getElementsByClassName('terms_error')[0];
                div.innerText = error.msg;
            }
        });
        message_div.innerHTML = message_html;
    } else {
        //there were no errors
        message_div.innerText = "Thank you, your information has been received.";
        message_div.style.paddingBottom = "0px";
        document.querySelector('#form_wrapper #heartland_form').innerHTML = "";
        document.querySelector('#required_notice').remove();
    }

    //for debugging
    console.log(fname, lname, email, zip, age, agreed, opt_in);

    function check_input (fname, lname, email, zip, age, agreed) {
        if (fname.match(name_regex) === null || fname.length < 2)  {
            errors.push({field:"fname", msg: "You did not enter a valid first name."});
            let el = document.querySelector('.input_wrapper.fname .input_icon'); 
            el.classList.remove('valid');
            el.classList.add('invalid');
        } else {
            //add the icon to the input
            let el = document.querySelector('.input_wrapper.fname .input_icon'); 
            el.classList.remove('invalid');
            el.classList.add('valid');
            //clear the validation message
            let msg = document.querySelector('.input_wrapper.fname .validation_message');
            msg.innerText = "";
        }
        if (lname.match(name_regex) === null || lname.length < 2) {
            errors.push({field: "lname", msg:"You did not enter a valid last name."});
            let el = document.querySelector('.input_wrapper.lname .input_icon'); 
            el.classList.remove('valid');
            el.classList.add('invalid');
        } else {
            //add the icon to the input
            let el = document.querySelector('.input_wrapper.lname .input_icon'); 
            el.classList.remove('invalid');
            el.classList.add('valid'); 
            //clear the validation message
            let msg = document.querySelector('.input_wrapper.lname .validation_message');
            msg.innerText = "";
        }
        if (email.match(email_regex) === null) {
            errors.push({field: "email", msg:"You did not enter a valid email address."});
            let el = document.querySelector('.input_wrapper.email .input_icon'); 
            el.classList.remove('valid');
            el.classList.add('invalid');
        } else {
            //add the icon to the input
            let el = document.querySelector('.input_wrapper.email .input_icon'); 
            el.classList.remove('invalid');
            el.classList.add('valid'); 
            //clear the validation message
            let msg = document.querySelector('.input_wrapper.email .validation_message');
            msg.innerText = "";
        }
        if (zip.match(zip_regex) === null) {
            errors.push({field:"zip",msg:"You did not enter a valid zip code."});
            let el = document.querySelector('.input_wrapper.zip .input_icon'); 
            el.classList.remove('valid');
            el.classList.add('invalid');
        } else {
            //add the icon to the input
            let el = document.querySelector('.input_wrapper.zip .input_icon'); 
            el.classList.remove('invalid');
            el.classList.add('valid');
            //clear the validation message
            let msg = document.querySelector('.input_wrapper.zip .validation_message');
            msg.innerText = "";
        }
        if (isNaN(age) || age < 18 || age > 110) {
            if (isNaN(age)) {
                errors.push({field: "age", msg:"You must enter your age."});
            }
            if (age <18) {
                errors.push({field: "age", msg:"You must be at least 18."});
            }
            if (age > 110) {
                errors.push({field: "age", msg:"You must be enter a valid age."});
            }
            //add the icon to the input
            let el = document.querySelector('.input_wrapper.age .input_icon'); 
            el.classList.remove('valid');
            el.classList.add('invalid');
        } else {
            //add the icon to the input
            let el = document.querySelector('.input_wrapper.age .input_icon'); 
            el.classList.remove('invalid');
            el.classList.add('valid');
            //clear the validation message
            let msg = document.querySelector('.input_wrapper.age .validation_message');
            msg.innerText = "";
        }
       
        if (!agreed) {
            errors.push({field: "terms", msg: "You must agree to our terms of service."});
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

function remove_msg () {
    let div = window.event.target.parentElement.querySelector('.validation_message');
    div.innerText = "";
}