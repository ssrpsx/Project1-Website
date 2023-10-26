function calculator(){
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var btn = document.getElementById("btn1");
    // คำนวณ
    var bmi = weight / (height/100*height/100);
    // แสดงผล
    var resultbmi = document.getElementById("result");
    resultbmi.innerHTML = bmi.toFixed(2)
}
function toggle1(){
    var popup1 = document.getElementById('popup1');
    popup1.classList.toggle('active');
}
function toggle2(){
    var popup2 = document.getElementById('popup2');
    popup2.classList.toggle('active');
}
function toggle3(){
    var popup3 = document.getElementById('popup3');
    popup3.classList.toggle('active');
}
function toggle4(){
    var popup4 = document.getElementById('popup4');
    popup4.classList.toggle('active');
}
function toggle5(){
    var popup5 = document.getElementById('popup5');
    popup5.classList.toggle('active');
}
