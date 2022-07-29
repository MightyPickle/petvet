const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const signUp = async (req, res) => {
  const { userName, password, email } = req.body;
  console.log(req.body);

  const hashedPass = await bcrypt.hash(password, 10);

  if (userName && password && email) {
    try {
      const newUser = await User.create({
        name: userName,
        password: hashedPass,
        email,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
      };
      return res.json({ id: newUser.id, userName: newUser.name });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  const { password, email } = req.body;

  if (password && email) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      const checkPass = await bcrypt.compare(password, currentUser.password);
      if (currentUser && checkPass) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };
        console.log({ id: currentUser.id, userName: currentUser.name });
        return res.json({ id: currentUser.id, userName: currentUser.name });
      }
      return res.sendStatus(401);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.clearCookie('user_sid');

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({ id: user.id, userName: user.userName });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
