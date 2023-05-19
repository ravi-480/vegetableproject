const navbar=document.querySelector('.navbar');
const menue=document.querySelector("#menue-btn");
const header=document.querySelector(".header-2")
menue.addEventListener("click",()=>{
    menue.classList.toggle('fa-times')
    navbar.classList.toggle('active')
});
window.onscroll=()=>{
    menue.classList.remove('fa-times')
    navbar.classList.remove('active')
    if(window.scrollY > 150){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}

let countdate= new Date("May 30, 2023 15:37:25").getTime();;

function count(){
    let now = new Date().getTime();
    let gap = countdate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 60;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour))
    let m = Math.floor((gap % (hour)) / (minute))
    let s = Math.floor((gap % (minute)) / (second))

    document.getElementById('day').innerText=d;
    document.getElementById('hour').innerText =h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
count();
},1000)
