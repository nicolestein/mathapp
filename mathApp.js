var button = document.getElementById('solve');
button1.addEventListener("click", );

function solve() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var formula1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var formula2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
     if (isNaN(a)) || (isNaN(b)) || (isNaN(c)) == true {
        message.textContent = "The value " + input + " is not a number.";
        message.style.color = "red";
}
