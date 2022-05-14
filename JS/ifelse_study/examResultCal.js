let stdVisa = prompt("Give in Visa Grade: ")
let stdFinal = prompt("Give in Final Grade")

let avg = (stdVisa*0.3)+(stdFinal*0.7)

if(avg>=0 && avg <=30){
    console.log(`Your average grade: ${avg} --> NOT PASSED `)
}
else if(avg>=31 && avg <=49){
    console.log(`Your average grade: ${avg} --> CONDITIONALLY PASSED`)
}
else if(avg>=50 && avg <=84){
    console.log(`Your average grade: ${avg} -->  PASSED`)
}
else if(avg>=85 && avg <=100){
    console.log(`Your average grade: ${avg} --> SUCCESSFULLY PASSED`)
}