const R4XX = (res, statusCode, errType, message, payload) => {
    return res.status(statusCode).json({
        result: "ERROR",
        errType: errType || "NOT SPECIFIED",
        message: message || "Request failed",
        payload: payload || null
    })
}

module.exports = R4XX;