const router = require('express').Router()
const {Yogi} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Yogi.findAll()
    .then(yogis => res.json(yogis))
    .catch(next)
})

//didnt have time to change, assume yogis is yogaStudios