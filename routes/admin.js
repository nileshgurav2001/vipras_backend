var express = require("express");
var cookie_parser = require("cookie-parser");
var Admin = require("../models/Admin")
const router = express.Router();



router.post("/login", async (req, res) => {
    let body = req.body;
    let admin = new Admin.Admin();
    admin.email = body.data.email;
    admin.password = body.data.password;
    admin.login().then(result => {
        console.log(result);
        let data = {
            "status": "fail"
        };
        if (result.length > 0) {
            data = {
                "status": "success",
                "data": result
            };
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "data": {

                    "status": "fail"
                }
            };
            res.end(JSON.stringify(  data));
        });
});

module.exports = router;