
/**
 * 
 * @returns Monday, December 4, 2023
 */
function getLocalDate() {
    const date = new Date()

    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    ).format(date)
}

module.exports = getLocalDate


