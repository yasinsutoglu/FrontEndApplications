let fullName = prompt("Enter Your Name, Please!")

document.querySelector("#myName").innerHTML=fullName;



//1.yontem
// let today= new Date;
// let myDate = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}  ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} `;

// let myClock = document.querySelector("#myClock")

// myClock.innerHTML = myDate;


//2.yontem

function showTime(){
    let date = new Date();
    let today = date.getDay();
    let gun;

    switch(today){
        case 0:
            gun="Pazar"
        break;

        case 1:
            gun="Pazartesi"
        break;

        case 2:
            gun="Sali"
        break;

        case 3:
            gun="Carsamba"
        break;

        case 4:
            gun="Persembe"
        break;

        case 5:
            gun="Cuma"
        break;

        case 6:
            gun="Cumartesi"
        break;
    }

    let time = date.toLocaleString('tr-TR');
    return document.querySelector("#myClock").innerHTML=`${time} ${gun}`;
}


showTime();
setInterval(showTime,1000);