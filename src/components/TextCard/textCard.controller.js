/**
 * Defines the text card router controller
 */

const fs = require('fs').promises
const getLocalDate = require('../../utils/DateTimeUtils')

async function getTextCard(_, res) {
    const currentDate = getLocalDate()

    let data = {
        id: 0,
        header: currentDate,
        data: "",
    }

    try {
        const textCards = await readTextCardFile()
        const currentCard = textCards.find((card) => card.header === currentDate)
        if ( currentCard ) data = currentCard

    } catch(err) {
        console.log(err)
    }

    //let results = null

    //try {
    //    results = await fs.readFile('./files/textCards.json')       
    //    results = JSON.parse(results) 
    //} catch (error) {
    //    results = data
    //}

    res.json(data)
}

async function saveTextCard(req, res) {
    console.log(`saveTextCard is running... ${req.body.id}`)
    const data = req.body
    let newTextCards = []

    try {
        const textCards = await readTextCardFile()
        if (textCards) {
            if (data.id === 0) {
                const id = textCards[textCards.length - 1].id
                data.id = id + 1
                newTextCards = [...textCards, data]
            } else {
                newTextCards = textCards.map((card) => {
                    if ( card.id === data.id ) {
                        return data
                    }

                    return card
                })
            }
        } else {
            data.id = 1
            newTextCards.push(data)
        }

        writeTextCardFile(newTextCards)

    } catch(err) {
        console.log(err)
    }
    res.json(data)
}

async function readTextCardFile(){
    const textCards = fs.readFile('./files/textCards.json')
    .then((results) => JSON.parse(results))    
    .catch((err) => console.log(err.message))   
    return textCards
}

async function writeTextCardFile(content){
    fs.writeFile('./files/textCards.json', JSON.stringify(content), err => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = { getTextCard, saveTextCard }
