let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Function to safely evaluate math expression
function safeEval(expr) {
    try {
        // Allow only numbers and operators
        if (/^[0-9+\-*/.%() ]+$/.test(expr)) {
            return new Function('return ' + expr)();
        } else {
            return "Error";
        }
    } catch {
        return "Error";
    }
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;

        if (btnText === '=') {
            string = safeEval(string).toString();
            input.value = string;
        } 
        else if (btnText === 'AC') {
            string = "";
            input.value = "";
        } 
        else if (btnText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += btnText;
            input.value = string;
        }
    });
});
