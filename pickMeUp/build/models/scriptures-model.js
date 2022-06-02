//this file is for getting data about scriptures
import data from "../data/lds-scriptures.js"

/**
 * A class for handling data fetching and manipulation for scriptures
 * 
 * Add methods and properties that you need to fetch scripture data
 * and format it the way you need to work with it.
 * Please document any methods you add.
 */
class Scriptures {
    constructor() {
        
    }
    
   //gets a single random scripture
    //cb: a callback that is executed when the data has finished fetching
    static getRandomScripture(cb) {
        let index = Math.floor(Math.random() * data.length)
        let scripture = {
            title: '',
            text: data[index].scripture_text,
            cite: data[index].verse_title
        }
        cb(scripture)
    }
    //Gets a list of scriptures
    //cb: a callback that is executed when the data has finished fetching
    static getScriptureList(cb) {
        return data.map(scripture => {
            return {
                title: '',
                text: scripture.scripture_text,
                cite: scripture.verse_title
            }
        })
    }
}

export default Scriptures;