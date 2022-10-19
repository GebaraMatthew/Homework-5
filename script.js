var date = moment().format("MMMM, Do, YYYY")
var currentTime = parseInt(moment().format('hh'));
const nineAm = moment().startOf('hour').fromNow();
const timeSlot = moment("9:00:00", "hh:mm:ss")
const colorHours = {'1': 'past', '2': 'present', '3': "future"}
var timeBox = document.getElementById('hour9')
var chime = 0
console.log(currentTime)
console.log(nineAm)
console.log(date)
console.log(timeSlot)

function hourFinder(){
for (let hourSet = 9; hourSet < 18; hourSet++) { //loop that finds if a time slot is before, during, or after the current hour
    var element = parseInt(hourSet);
    console.log(element, currentTime);
    if (element < currentTime){
        chime = colorHours[1];
        console.log(chime)
        return chime;
    }
    else if (element === currentTime){
        chime = colorHours[2];
        console.log(chime)
        return chime;
    }
    else {
        chime = colorHours[3];
        console.log(chime)
        return chime;
    }

}
}
hourFinder()
if (chime === 'past'){ //appends the class to the slot
    timeBox.classList.add("past")
}
else if (chime === 'present'){
    timeBox.classList.add("present")
}
else {
    timeBox.classList.add("future")
}


