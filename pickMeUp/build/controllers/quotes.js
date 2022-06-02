//This file is for connecting data with the quotes page.
//Do not use this file to fetch data. Fetch data with the classes imported from the models.

import {
    clearElement,
    createCardHtml,
    insertHtml
}
from "../helpers/helpers.js"

import Quotes from "../models/quotes-model.js"
/**
 * This is the main function
 * 
 * This function runs when the page loads.
 * Grabs a list of quotes from the model
 * Uses a loop to do the following:
 * 1. call createCardHtml to wrap the quote in html
 * 2. call insertHtml to add the cards
 * 
 */
 function main() {
     Quotes.getQuoteList(quotes => {
        clearElement('feed')
         quotes.forEach(quote => {
             let cardHtml = createCardHtml(quote);
             insertHtml('feed', cardHtml)
                
            })
        });

 }

 main()