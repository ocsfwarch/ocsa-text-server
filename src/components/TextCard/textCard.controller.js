/**
 * Defines the text card router controller
 */

const fs = require('fs').promises

async function getTextCard(_, res) {
    const data = {
        id: 0,
        header: "Monday, December 4, 1958",
        data: "",
    }

    let results = null

    try {
        results = await fs.readFile('./files/textCards.json')       
        results = JSON.parse(results) 
    } catch (error) {
        results = data
    }

    res.json(results)
}

async function saveTextCard(req, res) {
    console.log('saveTextCard is running...')
    const data = req.body

    if (data.id === 0){
        data.id = 999
    }
    //const data = {
    //    id: 0,
    //    header: "Monday, December 4, 1958",
    //    data: "",
    //}
    res.json(data)
}

module.exports = { getTextCard, saveTextCard }
