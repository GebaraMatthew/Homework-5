var date = moment().format("MMMM, Do, YYYY") 
var currentTime = moment().format('H'); //capital H makes it 24 hour clock
const nineAm = moment().startOf('hour').fromNow(); //test date for debugging
const timeSlot = moment("9:00:00", "hh:mm:ss") //test slot for debugging
const colorHours = {'1': 'past', '2': 'present', '3': "future"} //this is used later to put each section into past present or future
var timeBox = $('.time-block') //grabs each segment
var chime = 0
console.log(currentTime)
console.log(nineAm)
console.log(date)
console.log(timeSlot)
console.log(timeBox)

function hourFinder(){
for (let hourSet = 0; hourSet < timeBox.length; hourSet++) { //loop that finds if a time slot is before, during, or after the current hour
    var element = parseInt(timeBox[hourSet].id);
    console.log(element, currentTime);
    if (element < currentTime){ // these three statements check the time relative to current time, and assign the colors required
        chime = colorHours[1];
        console.log(chime)

    }
    else if (element === currentTime){
        chime = colorHours[2];
        console.log(chime)
    }
    else {
        chime = colorHours[3];
        console.log(chime)
    };
    if (chime === 'past'){ //appends the colored class to the slot
        timeBox[hourSet].classList.add("past")
    }
    else if (chime === 'present'){
        timeBox[hourSet].classList.add("present")
    }
    else {
        timeBox[hourSet].classList.add("future")
    }
}
}
hourFinder() //runs the actual function



