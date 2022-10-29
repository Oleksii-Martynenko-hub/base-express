const bcrypt = require('bcryptjs');

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  
};

exports.getOrigin = (req, res, next) => {
  const {origin, referer} = req.headers;
  
  return res.json({origin, referer})
};
