let weight = prompt("Say your weight as kg")
let height = prompt("Say your height as meter")

function obesityCal(weight, height){

    let calculation = weight/(height*height)
    
    if(calculation<18.5) return alert(`Your obesity value: ${calculation}, NOT OBESE, FIT FORM!`)
    if(calculation>=18.5 && calculation<=24.9) return alert(`Your obesity value: ${calculation}, NORMAL`)
    if(calculation>=25 && calculation<=29.9) return alert(`Your obesity value: ${calculation}, FAT!`)
    if(calculation>=30) return alert(`Your obesity value: ${calculation}, OBESE!`)
    else return alert("Check out your entries!")
}

obesityCal(weight, height)