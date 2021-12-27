function functionOne(arg1, arg2) {
    return arg1 * arg2;
}
document.getElementById("p1").innerHTML = functionOne(11, 20);

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

let element1 = document.getElementById('p2');
var arr = ["Jeet",21,true];
var element2 = "";
for(let i=0;i<arr.length;i++){
    element2 += "<li>"+arr[i]+"</li>";
}
element1.innerHTML = element2;