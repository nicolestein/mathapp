var button = document.getElementById('solve');
button.addEventListener('click', () => {
    document.getElementById('solutions').textContent = solveQF();
});

function changeElementClass(id, className) {
    var el = document.getElementById(id);
    el.className = className;
}

function solveQF() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var formula1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var formula2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    if (isNaN(a))||(isNaN(b))||(isNaN(c)) == true {
        changeElementClass("solutions", "invalid");
        return "You entered an incorrect value for either A, B, or C. Please try again.";
    } else if {
        changeElementClass("solutions", "real");
        return "The roots to the quadratic are " + formula1 + " and " + formula2;
    }
}
