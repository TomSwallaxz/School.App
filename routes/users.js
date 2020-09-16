const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = [{
    id: 1,
    name: 'Itshak Maharat',
  },
  {
    id: 3,
    name: 'Ephraim',
  },
  {
    id: 2,
    name: 'Tom Swalla',
  },

];

  res.send(users);
});

module.exports = router;
