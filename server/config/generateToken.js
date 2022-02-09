const jwt = require('jsonwebtoken')

const generateToken = (addressEmail) => {
    return jwt.sign({ data: addressEmail }, process.env.SECRETKEY, { expiresIn: '20s' });
}
const RefreshToken = (addressEmail) => {
    return jwt.sign({ data: addressEmail }, process.env.REFRESHKEY, { expiresIn: '30d' });
}

module.exports = { generateToken, RefreshToken }