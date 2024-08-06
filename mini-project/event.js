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
