const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const signUp = async (req, res) => {
  const {
    first_name, last_name, email, phone, password, user_group,
  } = req.body;

  const hashedPass = await bcrypt.hash(password, 10);

  if (first_name !== '' && last_name !== '' && email !== '' && phone !== '' && password !== '' && user_group !== '') {
    try {
      const newUser = await User.create({
        first_name,
        last_name,
        password: hashedPass,
        email,
        phone,
        user_group,
      });
      req.session.user = {
        id: newUser.id,
        user_group: newUser.user_group,
      };
      return res.json({
        id: newUser.id, first_name, last_name, email, phone, user_group,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  const { password, email: loginEmail } = req.body;

  if (password && loginEmail) {
    try {
      const currentUser = await User.findOne({ where: { email: loginEmail } });
      const checkPass = await bcrypt.compare(password, currentUser.password);
      if (!currentUser && !checkPass) return res.sendStatus(401);
      req.session.user = {
        id: currentUser.id,
        user_group: currentUser.user_group,
      };
      const {
        id, first_name, last_name, email, phone, user_group,
      } = currentUser;
      return res.json({
        id, first_name, last_name, email, phone, user_group,
      });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
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
