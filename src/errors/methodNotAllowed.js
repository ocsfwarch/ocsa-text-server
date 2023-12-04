/**
 * Express API Method Not Allowed Handler
 */

function methodNotAllowed(request, _, next){
    next({
        status: 405,
        message: `${request.method} not allowed for ${request.originalUrl}`
    })
}

module.exports = methodNotAllowed

