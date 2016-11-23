var express = require('express'),
    router = express.Router(),
    mongojs = require('mongojs'),
    db = mongojs(MONGODB_URI, ['tasks']);

router.get('/tasks', function(req, res, next) {
    db.tasks.find(function(err, tasks) {
        if (err) res.send(err);
        res.json(tasks);
    });
});

module.exports = router;
console.log(MONGODB_URI);