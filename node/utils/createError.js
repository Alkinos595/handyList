const messages = {
    "400": "Invalid data",
    "401": "Authentication required",
    "403": "Insufficient permissions"
}

exports.createError = function (code, message) {
    if (!message) {
        message = messages[code]
    }

    return {
        code: code,
        message: message
    }
}