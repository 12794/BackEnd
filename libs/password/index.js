const jwt = require('jsonwebtoken');
const expiresIn = parseInt(process.env.JWT_PASSWORD_TEMP) * 1000;

module.exports = {
  jwtSign : async (payload)=>jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {expiresIn}
  ),
  jwtVerify: async (token)=>jwt.verify(token, process.env.JWT_SECRET)
}
