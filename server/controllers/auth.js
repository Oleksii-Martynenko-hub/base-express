const bcrypt = require('bcryptjs');


exports.sendOtp = (req, res, next) => {
  const {origin, referer} = req.headers;
  return res.send({origin, referer})
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  
};
