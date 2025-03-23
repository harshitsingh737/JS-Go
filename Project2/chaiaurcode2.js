const form = document.querySelector('form')
// Form can be subbmited by post type or get type.


// this usecase will give you empty value . We need the value when we submit the form 
// const height = parseInt(document.querySelector('height').value)

form.addEventListener('submit',function(e){
    e.preventDefault(); 

    const height = parseInt(document.querySelector('#height').value);  // the value that we get is in the string so we need to parse it into int.
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${weight}`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.6){
            message.innerHTML = 'You are under weight'
        }
        else if(bmi > 18.6 && bmi <  24.9)
        {
            message.innerHTML = 'you are normal'
        }
        else{
            message.innerHTML = 'you are over weight'
        }
    }

    

})