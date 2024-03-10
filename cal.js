function myStopFunction() {
let output = document.getElementById("output");

function myStopFunction() {
    try {
        let result = eval(output.value);
        if (isNaN(result)) {
            throw new Error("INVALID");
        }
        output.value = result;
    } catch (err) {
        alert(err.message);
    }
}
