
// references to express and router 
let express = require('express');
let router = express.Router();
// let burger = require('../models/burger.js');


// Requiring our burger model
var db = require("../models");

// passing burger data into function 
module.exports = function(app) {
router.get('/', function (req, res) {
    db.burger.findall({}).then(function (result) {
        // console.log("hb object"+JSON.stringify(hbBurger));
        res.render('index', { burger: result })

    })
});

}
// router.put('/burgers/update', function (req, res) {
//     console.log(req);
//     burger.update(req.body.burger_id, function (result) {
//         console.log(result);
//         res.redirect('/');
//     });
// });

// router.post('/burgers/create', function (req, res) {
//     burger.create(req.body.burger_name, function (result) {
//         res.redirect('/');
//     })
// })

module.exports = router;