const attachUser = (req,res,next) => {
    req.user = {
        id: 1,
        name: "Yuandi"
    }
    next()
}

const checkApiKey = (req,res,next) => {
    const apiKey = req.headers["x-api-key"]
    if(apiKey !== "secret123"){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    next()
}

module.exports = {
    attachUser,
    checkApiKey
}