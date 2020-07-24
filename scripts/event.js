var num1 = document.getElementById("num-one");
var num2 = document.getElementById("num-two");
var sum = document.getElementById("add-sum");

num1.addEventListener("input", add);
num2.addEventListener("input", add);

function add(){
    var n1 = parseFloat(num1.value) || 0;
    var n2 = parseFloat(num2.value) || 0;
    sum.innerHTML = n1 + n2;
}