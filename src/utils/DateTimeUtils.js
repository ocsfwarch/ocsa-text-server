
/**
 * 
 * @returns Monday, December 4, 2023
 */
function getLocalDate() {
    const date = new Date()
    const test = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    ).format(date)

    console.log(`Current = ${test}, New = ${getLocalDateFromString(test)}`)

    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    ).format(date)
}

function getLocalDateFromString(dateString) {
    const date = new Date(dateString)

    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    ).format(date)
}

module.exports = getLocalDate


