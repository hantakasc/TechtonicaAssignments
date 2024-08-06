//HELLO EVERYONE! :)
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
    //Step 11 - Add allTickets that returns a string that represents all ticket types and prices
    allTickets(){
        return "All tickets: " + this.availableTickets.map
        ((ticket, index) => `${index + 1}. ${ticket.ticketName} 
        ($${ticket.price})`).join(" ")
    }
    //Step 13 - Add searchTickets to specify the lower and upper bounds of price range
    searchTickets(low, high){
        const eligibleTickets = this.availableTickets.filter(ticket => ticket.price >= low && ticket.price <= high);
        if (eligibleTickets.length === 0){
            return "No tickets available"
        }
        return "Eligible tickets: " + eligibleTickets.map((ticket,index) => `${index + 1 }. ${ticket.ticketName} ($${ticket.price})`). join(" ")
    }
    //Challenge - Get cheapest ticket! HAHAHA
    getCheapestTicket(){
        if(this.availableTickets.length === 0){
            return "No tickets available"
        }
        const cheapestTicket = this.availableTickets.reduce((min, ticket) => ticket.price < min.price ? ticket : min);
        return `Cheapest Ticket: ${cheapestTicket.ticketName} ($${cheapestTicket.price})`
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

//Step 12 - call allTickets to display the ticket types
 //document.addEventListener('DOMContentLoaded', () => {
     //let html = '';
     //eventArray.forEach((event) => {
       //html += `<li>${event.name} - ${event.description} - ${event.allTickets()}</li>`;
     //});
    //document.querySelector('#event').innerHTML = html;
  //});
  
  //Step 14 - View the search tickets
  document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((event) => {
        html += `<li> ${event.name} - ${event.description} - ${event.searchTickets(0, 100)}</li>`
    })
    document.querySelector('#event').innerHTML = html;
}) 

//Step 9 1/2 - Add available tickets to event
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

//Step 10 - Add different types to every one of the events
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);


//test cases for searchTickets function
//console.log("Test case 1:", eventObj3.searchTickets(0,250))
//test case for cheapest ticket
console.log("Event 1:", eventObj1.getCheapestTicket())//returns the cheapest ticket