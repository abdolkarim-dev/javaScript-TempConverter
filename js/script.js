 /////////////////////variables //////////////////
 let spanC = document.querySelector('.C')
 let spanF = document.querySelector('.F')
 let input = document.querySelector('.input-conver')
 let result = document.querySelector('.result')
 let convertButton = document.querySelector('.convertButton')
 let resetButton = document.querySelector('.resetButton')
 let changeButton = document.querySelector('.changeButton')

//////////////////Code/////////////////////
convertButton.addEventListener('click', function(){
    if (input.value.trim() === ''){
        result.innerHTML = 'Invalid input. Please enter number'
    }else {
        if (input.placeholder === '°C'){
            let resultC = ((input.value * 1.8) + 32)
            result.innerHTML = input.value+'°C to '+ resultC.toFixed(2)+'°F'
        }else if (input.placeholder === '°F'){
            let resultF = ((input.value - 32) / 1.8 )
            result.innerHTML = input.value+'°F to '+ resultF.toFixed(2)+'°C'
        }else{
            console.log('Invalid input')
            result.innerHTML = 'Invalid input'
        }
    }
})
resetButton.addEventListener('click', function(){
    input.value = ''
    result.innerHTML = ''
})

changeButton.addEventListener('click', function(){
    if (input.placeholder === '°C'){
        document.title = "SalzLearn| Js | °F to °C" 
        input.placeholder = '°F'
        spanC.innerHTML = '°F'
        spanF.innerHTML = '°C'
        input.value = ''
        result.innerHTML = ''
    }else if (input.placeholder === '°F'){
        document.title = "SalzLearn| Js | °C to °F" 
        input.placeholder = '°C'
        spanC.innerHTML = '°C'
        spanF.innerHTML = '°F'
        input.value = ''
        result.innerHTML = ''
    }
})