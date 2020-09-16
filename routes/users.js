const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = [{
    id: 1,
    name: 'Itshak Maharat',
  },
  {
<<<<<<< HEAD
    "id": 2,
    "name": "Tom Swalla"
  },
  {
    "id": 3,
    "name": "Ephraim Akale"
  }

];
=======
    id: 2,
    name: 'Yosef Tagawi',
  },
  ];
>>>>>>> 11c43ce450742ba361bd84bf74189e32f58b5f7a
  res.send(users);
});

module.exports = router;
