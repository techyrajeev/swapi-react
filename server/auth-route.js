const express   = require('express');
const jwt       = require('jsonwebtoken');
const swapi     = require('./sw-api');
const jwtSecret = "This is secret";
const router    = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const searchParam = {"search": username};

  swapi.searchUser(searchParam)
      .then((data) => {
          console.log(data);
          return data.results[0];
      })
      .then((people) => {
          console.log(people);
          if(people && people.name == username && people.birth_year == password) {
              const token = jwt.sign({
                  username
              }, jwtSecret);
              res.json({ token });
          } else {
              res.status(401).json({errorDesc: 'Invalid Credentials'});
          }
      })
      .catch((error) => {
          console.log(error);
          res.status(401).json({ errorDesc: 'Invalid Credentials' });
      });
});

module.exports = router;
