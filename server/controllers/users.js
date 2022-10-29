const token = 'kljhLKJDhflkh3983YFyhedh23iohnfs8D';

exports.addUser = (req, res, next) => {
  const user = new User(req.body);

  user.save().then((user) => res.status(201).json(user));
};

exports.userById = (req, res, next) => {
};

exports.editUser = (req, res, next) => {
  const [stringId, tokenReq] = req.body.accessToken.split('.');
  if (token !== tokenReq) return res.send('token invalid')
 
};

