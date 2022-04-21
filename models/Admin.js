const Database = require("../models/Database");

class Admin {
    id = 0;
    name = "";
    email = "";
    password = "";
    mobileno = "";
    query = "";
    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.name = "";
        this.mobileno = "";
        this.email = "";
        this.password = "";
    }

    // register() {

    //     this.query = "INSERT INTO admin (name,email,password) ";
    //     this.query += "VALUES ('" + this.name + "','" + this.email + "','" + this.password + "')";
    //     return new Promise((resolve, rejects) => {

    //         this.db.query(this.query, (err, result) => {
    //             this.db.close();
    //             if (err) {
    //                 return rejects(err);
    //             }
    //             resolve(result);
    //             console.log(result);
    //         });
    //     });
    // }

    login() {
        this.query = "SELECT id, username, email FROM admin ";
        this.query += "WHERE email = '" + this.email.replace(/'/g, "''") + "' AND password = '" + this.password.replace(/'/g, "''") + "'";
        console.log(this.query);
        return new Promise((resolve, rejects) => {
            this.db.query(this.query, (err, result) => {
                console.log(result);
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
                console.log(result);
            });
        });
    }

}

module.exports = {

    Admin: Admin

}