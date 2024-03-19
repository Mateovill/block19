//we need to begin by including the data that will be displayed
//The data is inside an array and that array includes the objects of data 
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];
//The remainder of the cards will be created dynamically using the hard coded refrence on the html sheet

//create the card header
function createCardHeader(name) {
    //we need to create the header itself because we need to create every element
    const header = document.createElement('div');
    //we are creating a variable that will create the element of header 1 which includes the name
    const h1 = document.createElement('h1');
    //we need to apply text to the h1
    const text = document.createTextNode(name);
    //we need to apply the class css code to the dynamic header
    header.className = 'header-name';

    //we need to append the text to the h1, so we are going to append the text to the h1
    //and then we are going to append the h1 child tag to the header parent tag 
    h1.append(text);
    header.appendChild(h1);

    return header;
}

//create a card body 
//we are creting a function named createCardBody to ensure that each part of the card will be created
function createCardBody(price, occupation) {
    //we will create the element with the information that we need
    const cardBody = document.createElement('div');
    //this is the text that will be applied to the cardBody
    const text = document.createTextNode(price, occupation);
    //append the text to the cardBody
    cardBody.appendChild(text);
    //we need to apply the class from css code to the dynamic body
    cardBody.className = 'card_body';

    return cardBody;
}

//create the card footer
function createCardFooter() {
    const cardFooter = document.createElement('div')
    const button = document.createElement('button')
    const buttonText = document.createTextNode('Contact')

    cardFooter.className ='card-footer';
    button.className ='btn';

    button.appendChild(buttonText);
    cardFooter.appendChild(button);

    return cardFooter
}

//create a function that creates cards
function createCard(freelancer) {
    //should be able to create 2 things: card, header, body and footer(button). it should be wrapped on a variable tag because we want to manupulate the variable
    const card = document.createElement('div');
    //creates an instance of the element for the specified tag
    //we want to apply the .card from css into the card that we are creating in the java
    card.className = 'card' //we write this out at a string and not as .card bc when the browser is reading the info, it reads it as a string 

    //we will create the header and then envoke the function that is in charge of creating the header
    const header = createCardHeader(freelancer.name);
    //we will create the body and then envoke the function that is in charge of creating the body
    const cardBody = createCardBody(freelancer.price, freelancer.occupation);
    //we will create the footer and then envoke the function that is in charge of creating the footer
    const cardFooter = createCardFooter( );

    //append all elements to the card
    card.appendChild(header)
    card.appendChild(cardBody)
  card.appendChild(cardFooter)

   const grid = document.querySelector('.content_grid');
   grid.appendChild(card);
}

//We need to create a loop - forEach
    freelancers.forEach((freelancer)=> {
        createCard(freelancer);
    });
