mainform = document.querySelector('.form1');
popupform = document.querySelector('.form2');
form1Inputs = document.querySelectorAll('.form1 input');
form1Label = document.querySelectorAll('.form1 label');
form2Inputs = document.querySelector('.form2 input');
form2Label = document.querySelector('.form2 #label');
cross = document.querySelector('.cross');
inputLabel = document.getElementById('label');
inputValue = document.getElementById('value');

function hide() {
    popupform.classList.remove('hide');
    mainform.classList.add('form1move');
}
function show(){
    popupform.classList.add('hide');
    mainform.classList.remove('form1move');
}
form2Label.addEventListener('keyup',match);
inputValue.addEventListener('blur', () => {
    inputLabel.value=null;
    inputValue.value=null;
    form1Inputs.forEach(e => {
        e.style.backgroundColor = "#e1cccc";
        e.style.color = "#111"
        e.style.transform = "scale(1)"
    })
})
function match(event) {
    val = event.target.value.toLowerCase();
    form1Label.forEach(ele => {
        lowerEle = ele.textContent.toLowerCase();
        if (val === lowerEle) {
            parent = ele.nextElementSibling;
            inp = parent.children[0];
            console.log(inp);
            colorFocus(inp);
            
            inputValue.addEventListener('keyup',(e)=>{
                if (val === ele.textContent.toLowerCase()) {
                    inp.value = e.target.value;
                }
               
            })
            
            
        }
    });

}

function colorFocus(e) {
    e.style.backgroundColor = "#6ac86a";
    e.style.color = "#fff"
    e.style.transform = "scale(1.1)"
}













