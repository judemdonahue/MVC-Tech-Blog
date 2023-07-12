const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.user,
      password: req.body.password,
    });

    req.session.userId = newUser.id;
    req.session.username = newUser.user;
    req.session.loggedIn = true;

    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.user,
      },
    });

    if (!user || !user.checkPassword(req.body.password)) {
      res.status(400).json({ message: 'Invalid username or password!' });
      return;
    }

    req.session.userId = user.id;
    req.session.username = user.user;
    req.session.loggedIn = true;

    res.json({ user, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid username or password!' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
