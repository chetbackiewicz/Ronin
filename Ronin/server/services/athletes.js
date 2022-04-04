const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const { router } = require('../app');

router.get('/athletes', function(req, res, next) => {
    res.json({
        athlete: [
            {
                athlete_id:
            }
        ]
    })
})