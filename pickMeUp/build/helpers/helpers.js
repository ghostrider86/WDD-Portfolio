//Helper functions used in multiple files

/**
 * Removes all child nodes from an element
 * 
 * Takes the nodeId, selects it, and clears the contents
 * 
 * @param {string} nodeId
 */
function clearElement(nodeId) {
    document.getElementById(nodeId).innerHTML = "";
}

/**
 * This is a function for rendering text in the card format to match the card snippet
 * 
 * Take data from js object in this form: 
 * (we might change this depending on data format we get from the api)
 * {
 * title: value,
 * text: value,
 * cite: value,
 * }
 * Make it match the card snippet format in snippets/snippets.html
 * return the html snippet
 * 
 * @param {object} data
 * @returns {string}
 */
function createCardHtml(data) {
    return `
    <div class="card" id="output">
        <h3>${data.title}</h3>
        <q class="quote">${data.text}</q>
        <p class="citation">${data.cite}</p>
    </div>`
}

/**
 * This is a special function for rendering a meme
 * Should match the card snippet format as far as container classes go
 * 
 * Take data from js object in this form: (subject to change)
 * {
 * href: value
 * }
 * 
 * @param {object} data
 * @return {string}
 */
function createMemeHtml(data) {
    return `
    <div class="card img">
        <img src="${data.href}" alt="meme image">
    </div>`
    
}
/**
 * This is a function for inserting html into the document
 * 
 * Takes the id of a parent node and an html string as arguments
 * inserts the html as a child of the parent node
 * 
 * @param  {string} parentNodeId
 * @param {string} html
 */
function insertHtml(parentNodeId, html) {
    document.getElementById(parentNodeId).innerHTML += html;
}

export {
    clearElement,
    createCardHtml,
    createMemeHtml,
    insertHtml
}