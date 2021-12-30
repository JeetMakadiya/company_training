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

// select theme code
let select = document.getElementById('select_menu');
let html = document.querySelector('html');

function changeTheme(bgColor, fontColor){
    html.style.backgroundColor = bgColor;
    html.style.color = fontColor;
}

select.addEventListener('change',() => (select.value === "dark_mode")?changeTheme('black','white'):changeTheme('lightblue','black'));

// simple calender
let select2 = document.getElementById('select_month');
let showMonth = document.getElementById('show_month');
let dayList = document.getElementById('day_list');

function createCalender(month, days){
    showMonth.textContent = month;
    let listItem = document.createElement('li');
}

select2.addEventListener('change',() => {

});