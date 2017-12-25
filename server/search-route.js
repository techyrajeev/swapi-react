const express   = require('express');
const jwt       = require('jsonwebtoken');
const swapi     = require('./sw-api');
const jwtSecret = "This is secret";
let router      = express.Router();

router.post('/', (req, res) => {
    let decoded  = "";
    let authToken = req.headers["authorization"];

    try {
       decoded = jwt.verify(authToken, jwtSecret);
       console.log("Auth decoded:"+JSON.stringify(decoded));
    } catch(err) {
        console.log(err);
    }

    const { searchTerm } = req.body;

    console.log("Searchig for -->"+searchTerm);

    const searchParam = {"search": searchTerm};

    console.log(searchParam);

    swapi.searchPlanet(searchParam)
        .then((data) => {
            console.log(data);
            return data.results;
        })
        .then((planets) => {
            res.json({ planets });
        })
        .catch((error) => {
            console.log(error);
            res.status(401).json({ errorDesc: 'Error occurred while searching' });
        });
});

module.exports = router;
