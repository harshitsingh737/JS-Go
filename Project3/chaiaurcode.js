const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') // both are same


setInterval(function(){
    const date= new Date();
    clock.innerHTML=date.toLocaleTimeString();
} , 1000)