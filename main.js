function calc() {
    var a = Number(document.querySelector("#value1").value);
    var b = Number(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;


//conditional-statement for operations     
    if (op == "add") {
        calculate = a + b;
    } else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    } else if (op == "expo") {
        calculate = a ** b;
    }

alert('Answer is ' + calculate)
}