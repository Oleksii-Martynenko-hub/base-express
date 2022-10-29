const bcrypt = require('bcryptjs');


exports.sendOtp = (req, res, next) => {
  const headers = req.headers;
  console.log("🚀 ~ headers", headers);
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  
};
