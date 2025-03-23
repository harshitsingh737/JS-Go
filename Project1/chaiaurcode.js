const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector('body')
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click' ,function(e){
        console.log(e);
        console.log(e.target);  // e.target will give you the target form where the event is happening..... Specifically, event.target gives you a reference to the DOM element that was the "target" of the event, meaning the element where the event occurred. 
        if(e.target.id === 'grey')
        {
            body.style.backgroundColor = e.target.id;   // or I can write it as 'grey'
        }

        if(e.target.id ==='white')
        {
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow')
        {
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue')
        {
            body.style.backgroundColor = e.target.id;
        }
        
    }) 
});