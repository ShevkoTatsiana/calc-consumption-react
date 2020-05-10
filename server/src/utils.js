const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

function getUserId(context) {
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const { userId } = jwt.verify(token, APP_SECRET)
        return userId
    }

    throw new Error('Not authenticated')
}

function getResultId(context) {
    console.log(context);
    // const Result = context.request.get('Result')
    // if (Result) {
    //     const token = Authorization.replace('Bearer ', '')
    //     const { userId } = jwt.verify(token, APP_SECRET)
    //     return userId
    // }
    //
    // throw new Error('Not authenticated')
    return 'cka0t26mfgeev0918ppdr48pw'
}

module.exports = {
    APP_SECRET,
    getUserId,
    getResultId,
}