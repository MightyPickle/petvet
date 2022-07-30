const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const signUp = async (req, res) => {
  const {
    first_name, last_name, email, phone, password, user_group,
  } = req.body;

  if (first_name === '' && last_name === '' && email === '' && phone === '' && password === '' && user_group === '') {
    return res.status(400).json({ errorMessage: 'Fill in all fields' });
  }
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        first_name,
        last_name,
        password: hashedPass,
        phone,
        user_group,
      },
    });
    if (!created) return res.status(400).json({ errorMessage: 'User with this email already exists' });
    req.session.user = {
      id: newUser.id,
      user_group: newUser.user_group,
    };
    return res.json({
      id: newUser.id, first_name, last_name, email, phone, user_group,
    });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const signIn = async (req, res) => {
  const { password, email: loginEmail } = req.body;

  if (password === '' || loginEmail === '') return res.status(400).json({ errorMessage: 'Заполните все данные' });
  try {
    const currentUser = await User.findOne({ where: { email: loginEmail } });
    if (!currentUser) return res.status(401).json({ errorMessage: 'Пользователь не найден' });
    const checkPass = await bcrypt.compare(password, currentUser.password);
    if (!checkPass) return res.status(401).json({ errorMessage: 'Неверный пароль' });

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
    return res.status(500).json({ errorMessage: 'Ошибка сервера' });
  }
};

const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) return res.status(500).json({ errorMessage: error.message });

    res.clearCookie('user_sid');

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({ id: user.id, userName: user.userName });
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
