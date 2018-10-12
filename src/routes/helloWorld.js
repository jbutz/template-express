const express = require('express');
const router = express.Router();


router.get('/hello', function (req, res) {
    res.status(200)
        .json({
            hello: 'world',
        });
});

module.exports = router;
