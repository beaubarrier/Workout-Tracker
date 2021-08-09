var router = require('express').Router();
var db = require('../models/workout');

router.get("/api/workouts", function (req, res) {
    db.find({})
        .then(records => {
            console.log("get", records)
            res.json(records)
        })
})

router.put("/api/workouts/:id", function (req, res) {
    db.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(records => {
            console.log("put", records)
            res.json(records)
        })
})

router.post("/api/workouts/", function (req, res) {
    db.create(req.body)
        .then(records => {
            console.log("post", records)
            res.json(records)
        })
})

router.get("/api/workouts/range", function (req, res) {
    db.find({}).limit(14)
        .then(records => {
            console.log("get", records)
            res.json(records)
        })
})


module.exports = router;
