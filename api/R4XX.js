const R4XX = (res, statusCode, message, payload) => {
    return res.status(statusCode).json({
        result: "ERROR",
        message: message || "Request failed",
        payload: payload || null
    })
}

module.exports = R4XX;