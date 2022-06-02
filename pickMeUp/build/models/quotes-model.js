//this file is for getting & formatting data about quotes


/**
 * A class for handling data fetching and manipulation for quotes
 * 
 * Add methods and properties that you need to fetch quote data
 * and format it the way you need to work with it.
 * Please document any methods you add.
 */
 class Quotes {
    constructor() {}
    static singleQuoteUrl = "https://reddit-reflector.herokuapp.com/zenquotes/random"
    static manyQuotesUrl = "https://reddit-reflector.herokuapp.com/zenquotes/quotes"
     static getRandomQuote(cb) {
        fetch(this.singleQuoteUrl).then(response => response.json()).then(response => {
            let quote = {
               title: "",
               text: response[0].q,
               cite:response[0].a
            }
           cb(quote);
         })
     }
    //Gets a list of quotes
    //cb: a callback that is executed when the data has finished fetching
    static getQuoteList(cb) {
       let endList = [];
       fetch(this.manyQuotesUrl).then(response => response.json()).then(response => {
          response.forEach(quote => {
             
             endList.push({
                title: "",
                text: quote.q,
                cite: quote.a
              })
           })
           cb(endList)
       })
   }
}

export default Quotes;