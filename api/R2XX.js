const R2XX = (res, statusCode, message, payload) => {
    return res.status(statusCode).json({
        result: "SUCCESS",
        message: message || "Successful Response",
        payload: payload || null
    })
}

module.exports = R2XX;