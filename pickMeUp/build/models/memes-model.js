// This file is for getting data about memes


/**
 * A class for handling data fetching and manipulation for memes
 * 
 * Add methods and properties that you need to fetch meme data
 * and format it the way you need to work with it.
 * Please document any methods you add.
 */
class Memes {
    static subreddit = "programmerhumor";
     static url = `https://reddit-reflector.herokuapp.com/reddit/${this.subreddit}`;
    constructor() {
    }
    //gets a single random meme
    //cb: a callback that is executed when the data has finished fetching
    static getRandomMeme(cb) {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                let index = Math.floor(Math.random() * data.data.children.length);
                let url = data.data.children[index].data.url
                
                cb({
                    href: url
                }) 
         })
    }
    //Gets a list of meme links
    //cb: a callback that is executed when the data has finished fetching
    static getMemesUrl(cb) {
        fetch(this.url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    console.log('error')
                }
            })
            .then(data => {
                let urls = [];
                data.data.children.forEach((child, index) => {
                    urls.push({ href: child.data.url })
                    
                })
                cb(urls)
            })
    }
}


export default Memes;