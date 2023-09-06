let celcicsInput = document.querySelector('celcius > input')
let fahrenheitInput = document.querySelector('fahrenheit > input')
let kelvinInput = document.querySelector('kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

letcelciusInput.addEventListener('input', function(){

    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp * (9/5)) + 32
    let kTemp = cTemp + 273.15 

    fahrenheitInput.value =  roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

letfahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp -32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value =  roundNumber(kTemp)
})

letkelvinInput.addEventListener('input',function(){
    let kTemp =  parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15 ) * (9/5) + 32

    celciusInput.value=roundNumber(cTemp)
    fahrenheitInput.value=roundNumber(fTemp)
})

btn.addEventListener('click',()=> {
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})


/*** 
let celsius = 
            document.getElementById('celsius');
        let fahrenheit = 
            document.getElementById('fahrenheit');
        let kelvin = 
            document.getElementById('kelvin');
        celsius.oninput = function () {
            let f = (parseFloat(celsius.value) * 9) / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));
  
            let k = (parseFloat(celsius.value) + 273.15);
            kelvin.value = parseFloat(k.toFixed(2));
        }
        fahrenheit.oninput = function () {
            let c = ((parseFloat(
                fahrenheit.value) - 32) * 5) / 9;
            celsius.value = parseFloat(c.toFixed(2));
  
            let k = (parseFloat(
                fahrenheit.value) - 32) * 5 / 9 + 273.15;
            kelvin.value = parseFloat(k.toFixed(2));
        }
        kelvin.oninput = function () {
            let f = (parseFloat(
                kelvin.value) - 273.15) * 9 / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));
  
            let c = (parseFloat(kelvin.value) - 273.15);
            celsius.value = parseFloat(c.toFixed(2));
        }     
        ***/