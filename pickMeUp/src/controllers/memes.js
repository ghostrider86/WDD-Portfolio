//this file is for connecting data with the memes page
//Do not use this file to fetch data. Fetch data with the classes imported from the models.


import {
    clearElement,
    createMemeHtml,
    insertHtml
}
from "../helpers/helpers.js"
import Memes from "../models/memes-model.js"

/**
 * This is the main function
 * 
 * This function runs when the page loads.
 * Grabs a list of scriptures from the model
 * Uses a loop to do the following:
 * 1. call createMemeHtml to wrap the meme in html
 * 2. call insertHtml to add the cards
 * 
 */
 function main() {

     Memes.getMemesUrl(memes => {
         clearElement('feed')
         memes.forEach(meme => {
             
             let cardHtml = createMemeHtml(meme);
                 insertHtml('feed', cardHtml)
         })
     })
   


 }

 main()