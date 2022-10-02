mainform = document.querySelector('.form1');
popupform = document.querySelector('.form2');
form1Inputs = document.querySelectorAll('.form1 input');
form2Inputs = document.querySelectorAll('.form2 input');
nameval = document.querySelector('.form1 #Name')
emailval = document.querySelector('.form1 #Email')
ageval = document.querySelector('.form1 #Age')
addressval = document.querySelector('.form1 #Address')
phoneval = document.querySelector('.form1 #Phone')
cross = document.querySelector('.cross');
if (popupform.classList.contains('hide')) {
    console.log("hello");
}

function hide() {
    popupform.classList.remove('hide');
    mainform.classList.add('form1move');
}
function show(){
    popupform.classList.add('hide');
    mainform.classList.remove('form1move');
}
form2Inputs.forEach(ele => {
    ele.addEventListener('keyup', match);
    ele.addEventListener('focus', match);
    ele.addEventListener('blur', () => {
        form1Inputs.forEach(e => {
            e.style.backgroundColor = "#e1cccc";
            e.style.color = "#111"
        })
    });

});
function match(event) {

    val = event.target.id;
    console.log(val)
    if (val === 'Name') {
        nameval.value = event.target.value;
        colorFocus(nameval);
    }
    else if (val === 'Email') {
        emailval.value = event.target.value;
        colorFocus(emailval);
    }
    else if (val === 'Age') {
        ageval.value = event.target.value;
        colorFocus(ageval);
    }
    else if (val === 'Address') {
        addressval.value = event.target.value;
        colorFocus(addressval);
    }
    else if (val === 'Phone') {
        phoneval.value = event.target.value;
        colorFocus(phoneval);
    }
}

function colorFocus(e) {
    e.style.backgroundColor = "#6ac86a";
    e.style.color = "#fff"
}