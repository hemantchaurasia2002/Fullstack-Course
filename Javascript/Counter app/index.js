// document.getElementById("count").innerText = 5

// let count = 0
// console.log(count)

// let myAge = 35
// console.log(myAge)

// let myAge = 35
// let humanDogRatio = 7
// let myDogAge = myAge*humanDogRatio
// console.log(myDogAge)
//-------------------------------------------------------------------
// initialize the count as 0
// listen for clicks on the increment btn
// increment the count variable when the button is clicked
// change the count in the HTML to reflect the new count
let countEl =  document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save (){
    console.log(count)
}
