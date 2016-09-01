function DEL(){
	Current = "0";
	document.case.display.value = Current;
}
function run1(){
	document.case.display.value += "1"
};
function run2(){
	document.case.display.value += "2"
};
function run3(){
	document.case.display.value += "3"
};
function run4(){
	document.case.display.value += "4"
};
function run5(){
	document.case.display.value += "5"
};
function run6(){
	document.case.display.value += "6"
};
function run7(){
	document.case.display.value += "7"
};
function run8(){
	document.case.display.value += "8"
};
function run9(){
	document.case.display.value += "9"
};
function run0(){
	document.case.display.value += "0"
};
function Plus(){
	document.case.display.value += "+"
};
function Minus(){
	document.case.display.value += "-"
};
function Divide(){
	document.case.display.value += "/"
};
function Multiply(){
	document.case.display.value += "*"
};
function Dot(){
	document.case.display.value += "."
};
function C(){
	document.case.display.value += " "
};
function c(val) {
    document.getElementById("d").value=val;
}
function back() {
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
}
};
function e() { 
try { 
    c(eval(document.getElementById("d").value)) 
} 
catch(e) {
    c('Error') 
} 
};