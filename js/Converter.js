const main = document.querySelector('#unitType');
const userInput = document.querySelector('#input');
const userResult = document.querySelector('#result');
let inputVal = 0;
let usrInput = 0;
let value ;
let id;

let units = {
    length:['Millimeter','Centimeter','Meter','Kilometer'],
    area:['Square Meter','Square Inch','Square Foot','Acre'],
    temperature:['Celcius','Fahrenheit','Kelvin'],
}

function qSelector(){
    const inp = document.querySelectorAll('input');
    for(let i=0; i<inp.length; i++){
        let inputVal = inp[i];    
        console.log("inputVal: ",inputVal);
        inputVal.addEventListener("input", function(e){
            value = e.target.value;
            console.log(e.target.id+":"+value);
            console.log("Input Here :"+input.id);
            id = e.target.id;
            Calculate();
        });
     }
     return inputVal;
}

let valIn = 0;
window.addEventListener("DOMContentLoaded", function(){
    console.log('Js File loaded here.');
    valIn = qSelector();
  
    const main = document.querySelector('#unitType');
    inputType.addEventListener("change",takeInput);
    resultType.addEventListener("change",result);

    function takeInput() {
            Calculate("input");
    }

    function result() {
            Calculate("result");
    }

    function Change(){
        let selected_option = units[this.value] || units.area;

        while(inputType.options.length > 0 && resultType.options.length > 0){
            inputType.options.remove(0);
            resultType.options.remove(0);
        }

        Array.from(selected_option).forEach(function(ele){
            let option1 = new Option(ele, ele);
            let option2 = new Option(ele, ele);
            inputType.appendChild(option1);
            resultType.appendChild(option2);
        })
        console.log("unit Change ended!");
    }    
    Change();
    main.addEventListener("change",Change);
}) 

function Calculate(typeOfInput){
    console.log("value is: ", value);
    console.log("id is: ", id);
    let inputTypeValue1 = inputType.value;
    let resultTypeValue1 = resultType.value;
    let inputTypeValue2 = resultType.value;
    let resultTypeValue2 = inputType.value;
    let option = inputTypeValue1 + "-" +resultTypeValue1;
    let option2 = inputTypeValue2 + "-" +resultTypeValue2;

        switch(main.value){
                case "length":
                    switchMethod(typeOfInput,length1,length2,option,option2); 
                    break;
                case "area":
                    switchMethod(typeOfInput,area1,area2,option,option2); 
                    break;
                case "temperature":
                    switchMethod(typeOfInput,temp1,temp2,option,option2); 
                    break;
                default : 
                    return "Invalid Input"; 
        }    
}

function switchMethod(id,method1,method2,option1,option2){
        if(id =="input"){
             method1(option1)
        }
        else{
             method2(option2)
        }
}

function unitMultiply(input1,input2){
    let answer = input1 * input2;;
    return answer;
}
 
function length1(option){
    switch(option){
        case "Meter-Kilometer" :              
                userResult.value =  unitMultiply(userInput.value,0.001);
                console.log(userResult.value);
                break;
        case "Meter-Centimeter" :
                userResult.value =  unitMultiply(userInput.value,100);
                console.log(userResult.value);
                break;
        case "Meter-Meter" :
                userResult.value = userInput.value;                        
                console.log(userResult.value);
                break;
        case "Meter-Millimeter":
                userResult.value =  unitMultiply(userInput.value,1000);
                console.log(userResult.value);
                break;
        case "Centimeter-Centimeter" :
                userResult.value = userInput.value;                        
                console.log(userResult.value);
                break;
        case "Centimeter-Kilometer":
                userResult.value =  unitMultiply(userInput.value,0.0001);
                console.log(userResult.value);
                break;
        case "Centimeter-Meter":
                userResult.value =  unitMultiply(userInput.value,100);
                console.log(userResult.value);
                break;
        case "Centimeter-Millimeter":
                userResult.value =  unitMultiply(userInput.value,10);
                console.log(userResult.value);
                break;
        case "Millimeter-Millimeter" :
                userResult.value = userInput.value;                        
                console.log(userResult.value);
                break;
        case "Millimeter-Kilometer":
                userResult.value =  unitMultiply(userInput.value,0.0001);
                console.log(userResult.value);
                break;
        case "Millimeter-Meter":
                userResult.value =  unitMultiply(userInput.value,0.001);
                console.log(userResult.value);
                break;
        case "Millimeter-Centimeter":
                userResult.value =  unitMultiply(userInput.value,0.1);
                console.log(userResult.value);
                break;
        case "Kilometer-Kilometer" :
                userResult.value = userInput.value;                        
                console.log(userResult.value);
                break;
        case "Kilometer-Millimeter":
                userResult.value =  unitMultiply(userInput.value,1e+6);
                console.log(userResult.value);
                break;
        case "Kilometer-Meter":
                userResult.value =  unitMultiply(userInput.value,1000);
                console.log(userResult.value);
                break;
        case "Kilometer-Centimeter":
                userResult.value =  unitMultiply(userInput.value,100000);
                console.log(userResult.value);
                break;
    }
}

function length2(option2){
    switch(option2){
        case "Meter-Kilometer" :
                userInput.value = Number(userResult.value) * 0.001;
                break;
        case "Meter-Centimeter":
                userInput.value =  unitMultiply(userResult.value,100);
                console.log(userInput.value);
                break;
        case "Meter-Millimeter":
                userInput.value =  unitMultiply(userResult.value,1000);
                console.log(userInput.value);
                break;          
        case "Centimeter-Kilometer":             
                userInput.value =  unitMultiply(userResult.value,0.00001);
                console.log(userInput.value);
                break;
        case "Centimeter-Meter":
                userInput.value =  unitMultiply(userResult.value,100);
                console.log(userInput.value);
                break;
        case "Centimeter-Millimeter":
                userInput.value =  unitMultiply(userResult.value,10);
                console.log(userInput.value);
                break;
        case "Millimeter-Kilometer":
                userInput.value =  unitMultiply(userResult.value,0.00001);
                console.log(userInput.value);
                break;
        case "Millimeter-Meter":
                userInput.value =  unitMultiply(userResult.value,0.001);
                console.log(userInput.value);
                break;
        case "Millimeter-Centimeter":
                userInput.value =  unitMultiply(userResult.value,0.1);
                console.log(userInput.value);
                break;
        case "Kilometer-Millimeter":               
                userInput.value =  unitMultiply(userResult.value,1e+6);
                console.log(userInput.value);
                break;
        case "Kilometer-Meter":
                userInput.value =  unitMultiply(userResult.value,1000);
                console.log(userInput.value);
                break;
        case "Kilometer-Centimeter":
                userInput.value =  unitMultiply(userResult.value,100000);
                console.log(userInput.value);
                break;
    }
    
}
function area1(option){
    switch(option){
        case "Square Inch-Square Foot" :              
                userResult.value =  unitMultiply(userInput.value,144);
                console.log(userResult.value);
                break;
        case "Square Inch-Square Meter" :              
                userResult.value =  unitMultiply(userInput.value,0.00064516);
                console.log(userResult.value);
                break;
        case "Square Inch-Acre" :              
                userResult.value =  unitMultiply(userInput.value,1.5942e-7);
                console.log(userResult.value);
                break;
        case "Square Inch-Square Inch" :              
                userResult.value =userInput.value;
                console.log(userResult.value);
                break; 
        case "Square Meter-Square Foot" :              
                userResult.value =  unitMultiply(userInput.value,10.7639);
                console.log(userResult.value);
                break;  
        case "Square Meter-Square Meter" :              
                userResult.value =userInput.value;
                console.log(userResult.value);
                break;  
        case "Square Meter-Square Inch" :              
                userResult.value =  unitMultiply(userInput.value,1550);
                console.log(userResult.value);
                break; 
        case "Square Meter-Acre" :              
                userResult.value =  unitMultiply(userInput.value,0.000247105);
                console.log(userResult.value);
                break; 
        case "Square Foot-Square Inch" :              
                userResult.value =  unitMultiply(userInput.value,144);
                console.log(userResult.value);
                break;  
        case "Square Foot-Square Foot" :              
                userResult.value =userInput.value;
                console.log(userResult.value);
                break;  
        case "Square Foot-Square Meter" :              
                userResult.value =  unitMultiply(userInput.value,0.092903);
                console.log(userResult.value);
                break; 
        case "Square Foot-Acre" :              
                userResult.value =  unitMultiply(userInput.value,2.2957e-5);
                console.log(userResult.value);
                break;
        case "Acre-Square Foot" :              
                userResult.value =  unitMultiply(userInput.value,43560);
                console.log(userResult.value);
                break;  
        case "Acre-Acre" :              
                userResult.value = userInput.value;
                console.log(userResult.value);
                break;  
        case "Acre-Square Meter" :              
                userResult.value =  unitMultiply(userInput.value,4046.86);
                console.log(userResult.value);
                break; 
        case "Acre-Square Inch" :              
                userResult.value =  unitMultiply(userInput.value,6.273e+6);
                console.log(userResult.value);
                break;                
    }       
}

function area2(option2){
    switch(option2){
        case "Square Foot-Square Inch" :              
                userInput.value =  unitMultiply(userResult.value,144);
                console.log(userInput.value);
                break;
        case "Square Inch-Square Foot" :              
                userInput.value =  unitMultiply(userResult.value,144);
                console.log( userInput.value.value);
                break;
        case "Square Inch-Square Meter" :              
                userInput.value =  unitMultiply(userResult.value,0.00064516);
                console.log( userInput.value.value);
                break;
        case "Square Inch-Acre" :              
                userInput.value =  unitMultiply(userResult.value,1.5942e-7);
                console.log( userInput.value.value);
                break;
        case "Square Inch-Square Inch" :              
                userInput.value =userResult.value;
                console.log( userInput.value.value);
                break; 
        case "Square Meter-Square Foot" :              
                userInput.value =  unitMultiply(userResult.value,10.7639);
                console.log( userInput.value);
                break;  
        case "Square Meter-Square Meter" :              
                userInput.value =userResult.value;
                console.log( userInput.value);
                break;  
        case "Square Meter-Square Inch" :              
                userInput.value =  unitMultiply(userResult.value,1550);
                console.log( userInput.value);
                break; 
        case "Square Meter-Acre" :              
                userInput.value =  unitMultiply(userResult.value,0.000247105);
                console.log( userInput.value);
                break; 
        case "Square Foot-Square Inch" :              
                userInput.value =  unitMultiply(userResult.value,144);
                console.log( userInput.value);
                break;  
        case "Square Foot-Square Foot" :              
                userInput.value =userResult.value;
                console.log( userInput.value);
                break;  
        case "Square Foot-Square Meter" :              
                userInput.value =  unitMultiply(userResult.value,0.092903);
                console.log( userInput.value);
                break; 
        case "Square Foot-Acre" :              
                userInput.value =  unitMultiply(userResult.value,2.2957e-5);
                console.log( userInput.value);
                break;
        case "Acre-Square Foot" :              
                userInput.value =  unitMultiply(userResult.value,43560);
                console.log( userInput.value);
                break;  
        case "Acre-Acre" :              
                userInput.value =userInput.value;
                console.log( userInput.value);
                break;  
        case "Acre-Square Meter" :              
                userInput.value =  unitMultiply(userResult.value,4046.86);
                console.log( userInput.value);
                break; 
        case "Acre-Square Inch" :              
                userInput.value =  unitMultiply(userResult.value,6.273e+6);
                console.log( userInput.value);
                break;  
    }    
}

function temp1(option){
        switch(option){
            case "Celcius-Fahrenheit" :              
                userResult.value =  (userInput.value * ( 9/5)) + 32;
                console.log(userResult.value);
                break;
            case "Celcius-Kelvin" :              
                userResult.value =  userInput.value + 273.15;
                console.log( userResult.value.value);
                break;
            case "Celcius-Celcius" :              
                userResult.value =userInput.value;
                console.log( userResult.value.value);
                break; 
            case "Fahrenheit-Celcius" :              
                userResult.value = (userInput.value - 32) * (5/9);
                console.log( userResult.value);
                break;  
            case "Fahrenheit-Fahrenheit" :              
                userResult.value =userInput.value;
                console.log( userResult.value);
                break;  
            case "Fahrenheit-Kelvin" :              
                userResult.value = (userInput.value - 32) *( 5/9) + 273.15;
                console.log( userResult.value);
                break; 
            case "Kelvin-Fahrenheit" :              
                userResult.value = (userInput.value - 273.15) * (9/5) + 32;
                console.log( userResult.value);
                break; 
            case "Kelvin-Celcius" :              
                userResult.value =  userInput.value - 273.15;
                console.log( userResult.value);
                break;  
            case "Kelvin-Kelvin" :              
                userResult.value =userInput.value;
                console.log( userResult.value);
                break;  
        }
}

function temp2(option2){
        switch(option2){
            case "Celcius-Fahrenheit" :              
                    userInput.value =  (userResult.value * ( 9/5)) + 32;
                    console.log(userInput.value);
                    break;
            case "Celcius-Kelvin" :              
                    userInput.value =  userResult.value + 273.15;
                    console.log( userInput.value.value);
                    break;
            case "Celcius-Celcius" :              
                    userInput.value =userResult.value;
                    console.log( userInput.value.value);
                    break; 
            case "Fahrenheit-Celcius" :              
                    userInput.value = (userResult.value - 32) * (5/9);
                    console.log( userInput.value);
                    break;  
            case "Fahrenheit-Fahrenheit" :              
                    userInput.value =userResult.value;
                    console.log( userInput.value);
                    break;  
            case "Fahrenheit-Kelvin" :              
                    userInput.value = (userResult.value - 32) *( 5/9) + 273.15;
                    console.log( userInput.value);
                    break; 
            case "Kelvin-Fahrenheit" :              
                    userInput.value =  (userResult.value - 273.15) * (9/5) + 32;
                    console.log( userInput.value);
                    break; 
            case "Kelvin-Celcius" :              
                    userInput.value = userResult.value - 273.15;
                    console.log(userInput.value);
                    break;  
            case "Kelvin-Kelvin" :              
                    userInput.value = userResult.value;
                    console.log( userInput.value);
                    break;  
        }
}