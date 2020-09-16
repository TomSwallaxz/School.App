const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = [{
    id: 1,
    name: 'Itshak Maharat',
  },
  {
    id: 2,
    name: 'Yosef Tagawi',
  },
  ];
  res.send(users);
});

module.exports = router;
