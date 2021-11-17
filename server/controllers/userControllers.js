const User = require('../models/userModels');

const userController = {};

userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {

    if (err)
      return next(
        'Error in userController.getAllUsers: ' + JSON.stringify(err)
      );

    res.locals.users = users;
    return next();
  });
};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) return next('Missing username or password in userController.createUser.');

  User.create({ username, password }, (err, user) => {
    if (err) {
      return res.render('../client/signup', { error: err });
    } else {
      res.locals.user = user;
      return next();
    }
  })

};
/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = (req, res, next) => {
  User.findOne({username: req.body.username}, (err, foundObj) => {
    if (err) return next(err);
    if (foundObj === null || foundObj.password !== req.body.password) return res.redirect('/signup'); // must return because does not actually send thread of execution to signup route
    if (foundObj.password === req.body.password) {
      res.locals.user = foundObj;
      res.locals.mongodb = foundObj._doc._id
      next();
    }
  })
  
}

module.exports = userController;
