const router = require("express").Router();

// Home route
router.get('/', (req, res) => {
    res.send('Welcome to InnerFriend');
  });

module.exports = router