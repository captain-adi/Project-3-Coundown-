console.log("HIII");
let h = 0, m = 0, s = 0;
let seconde = document.getElementById("seconde");
let minute = document.getElementById("minute");
let hours = document.getElementById("hours");
let startbtn = document.getElementById("start_btn");

startbtn.addEventListener("click", function () {
     

    let start = () => {
        console.log("hiii");
        s = s + 1;
    
        minute.innerHTML = m ;
        seconde.innerHTML = s;
        hours.innerHTML = h;
        if (seconde.innerHTML == "60") {
            m = m +1;
            minute.innerHTML = m;
            s = 0;
        }
        if (m == "60") {
            m = 0;
            h = h + 1;
            hours.innerHTML = h;
        }
    }
    let sta = setInterval(start, 1000);
    
     document.getElementById("clear_btn").addEventListener("click",function(){
               hours.innerHTML = 0 ;minute.innerHTML=0 ;seconde.innerHTML = 0;
               clearInterval(sta);
            })
  
  document.getElementById("stop_btn").addEventListener('click',function(){
    clearInterval(sta)
  })
    
})