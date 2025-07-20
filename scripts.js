let displaybox = document.getElementById("display");
let buttons = document.querySelectorAll('button');
let str = '';
let arr = Array.from(buttons);

const operators = ['+', '-', '*', '/', '%'];

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText.trim();
        if (value === '=') {
            str = eval(str);
            displaybox.value = str;
        } 
        else if (value === 'AC') {
            str = '';
            displaybox.value = str;
        } 
        else if (value === 'DEL') {
            str = str.slice(0, -1);
            displaybox.value = str;
        } 
        else if (operators.includes(value)) {
            // Prevent consecutive operators
            if (str === '' || operators.includes(str.slice(-1))) {
                return; // Do nothing
            } 
            else {
                str += value;
                displaybox.value = str;
            }
        } 
        else {
            str += value;
            displaybox.value = str;
        }
    });
});