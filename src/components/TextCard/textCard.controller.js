/**
 * Defines the text card router controller
 */

async function getTextCard(_, res) {
    const data = {
        id: 1,
        header: "Monday, December 4, 1958",
        data: "SUCCESS",
    }

    res.json({data})
}

module.exports = { getTextCard }
