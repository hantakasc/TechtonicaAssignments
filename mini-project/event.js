//Step 8 - Add different ticket types with different prices by creating TicketType class
class TicketType {
    constructor(ticketName, price){
        this.ticketName = ticketName;
        this.price = price; 
    }
}

//Step 1
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
    //Step 9 - Add TicketType class
    addAvailableTickets(ticketName, price){
        const newTicket = new TicketType(ticketName, price);
        this.availableTickets.push(newTicket);
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

//Step 5 - Push objects created into the array!
//Pushing a single object
//eventArray.push(eventObj1);
//Pushing multiple obejcts
eventArray.push(eventObj1, eventObj2, eventObj3);

//Step 6 - Check the elements pushed
//console.log(eventArray);

//Step 7 - Iterate though the eventArray 
//forEach() to iterate through objects
//.innerHTML to return the HTML code from js file to the target element of the page
document.addEventListener('DOMContentLoaded', () => {
    //handler when the dom is fully loaded to prevent javascript from running before the document is finished loading
    let html = '';
    eventArray.forEach((item) => {
        html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
});

//Step 9 1/2 - Add available tickets to event
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);