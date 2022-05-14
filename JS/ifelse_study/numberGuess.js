var ranNumber = Math.floor(Math.random()*10)
var guess = prompt("Give in a number and Guess!")

if(guess === ranNumber && guess!=null) alert("Bravoo!!")
else if(guess=="") alert("empty entry!")
else if(guess==null) alert("You retract from giving an entry")
else {
    alert("Try Again:((, Random Number: "+ ranNumber)
}