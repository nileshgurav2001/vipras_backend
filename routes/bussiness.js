var express = require("express");
var cookie_parser = require("cookie-parser");
var Bussiness = require("../models/Bussiness")
const router = express.Router();

router.post("/save", async (req, res) => {
    let body = req.body;
    let bussiness = new Bussiness.Bussiness();
    bussiness.id = body.data.id;
    bussiness.name = body.data.name;
    bussiness.title = body.data.title;
    bussiness.address = body.data.address;
    bussiness.cityid = body.data.cityid;
    bussiness.pincode = body.data.pincode;
    bussiness.description = body.data.description;
    bussiness.joinedate = body.data.joinedate;
    bussiness.expirydate = body.data.expirydate;
    bussiness.status = body.data.status;
    bussiness.email = body.data.email;
    bussiness.mobileno = body.data.mobileno;
    bussiness.password = body.data.password;
    
    bussiness.save().then(result => {
        console.log(result);
        let data = {
        "data": {
            "status": "success",
            'data': result
          
        }
    }
    res.end(JSON.stringify(data));
   },
   err => {
       let data = {
           "data": {
               
               "status": "fail"
            }
        };
           res.end(JSON.stringify(data));
        });
    });


    router.post("/list", async (req, res) => {
        let body = req.body;
        let bussiness = new Bussiness.Bussiness();
        
        bussiness.list().then(result => {
            console.log(result);
            let data = {
            "data": {
                "status": "success",
                'data': result
              
            }
        }
        res.end(JSON.stringify(data));
       },
       err => {
           let data = {
               "data": {
                   
                   "status": "fail"
                }
            };
               res.end(JSON.stringify(data));
            });
        });
    

        router.post("/delete", async (req, res) => {
            let body = req.body;
            let bussiness = new Bussiness.Bussiness();
            bussiness.id = body.data.id;
            
            bussiness.delete().then(result => {
                console.log(result);
                let data = {
                "data": {
                    "status": "success",
                    'data': result
                  
                }
            }
            res.end(JSON.stringify(data));
           },
           err => {
               let data = {
                   "data": {
                       
                       "status": "fail"
                    }
                };
                   res.end(JSON.stringify(data));
                });
            });


            
        router.post("/get", async (req, res) => {
            let body = req.body;
            let bussiness = new Bussiness.Bussiness();
            bussiness.id = body.data.id;
            
            bussiness.get().then(result => {
                console.log(result);
                let data = {
                "data": {
                    "status": "success",
                    'data': result,
                  
                }
            }
            res.end(JSON.stringify(data));
           },
           err => {
               let data = {
                   "data": {
                       
                       "status": "fail"
                    }
                };
                   res.end(JSON.stringify(data));
                });
            });
        
    


module.exports = router;
