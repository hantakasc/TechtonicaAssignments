//Step 1
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
}

//Step 2
//This will create an obect!
const eventObj1 = new Event(
    'KLOS Golden Gala', //name
    'An evening with hollywood vampires' //description
);

//Step 3 - Creating more objects with different values
const eventObj2 = new Event(
    'Skillet & Sevendust', 
    'Victorious war tour'
);


const eventObj3 = new Event(
    'Jenny Lewis',
    'On the line tour 2019'
);

//Step 4 - Create an empty event array
const eventArray = new Array(); //constructor notation