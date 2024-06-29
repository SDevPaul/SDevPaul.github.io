
// calculate function //
function calculate() {

    var n1 = parseFloat(document.getElementById("cpl").value); // cost per liter input
    var n2 = parseFloat(document.getElementById("alp").value); // amount of liter purchased
    var result = n1 * n2; // calculating result with multiplication

    // checking if the input is valid //
    if (n1 < 0) {
        document.getElementById("result").innerHTML = "Please input a positive number"; // prompt if the input is a negative number
    } else if (n2 < 0) {
        document.getElementById("result").innerHTML = "Please input a positive number"; // prompt if the input is a negative number
    } else {
        document.getElementById("result").innerHTML = result; // calculates the result if the number is positive
    }
    // let the result be displayed in html //
    return false;
}