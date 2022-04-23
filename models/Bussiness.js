const Database = require("../models/Database");

class Bussiness {
    id = 0;
    name = "";
    email = "";
    password = "";
    mobileno = "";
    title = "";
    address = "";
    cityid = "";
    pincode = "";
    description = "";
    joinedate = "";
    expirydate = "";
    status = ""
    query = "";
    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.name = "";
        this.mobileno = "";
        this.email = "";
        this.password = "";
        this.title = "";
        this.address = "";
        this.cityid = "";
        this.pincode = "";
        this.description = "";
        this.joinedate = "";
        this.expirydate = "";
        this.status = ""

    }



    save = () => {
        if (this.id == 0) {

            this.query = "INSERT INTO bussinesses (name, title, address, cityid, pincode, description, joinedate, expirydate, email, mobileno, password, status) ";
            this.query += " VALUES ('" + this.name + "','" + this.title + "','" + this.address + "','" + this.cityid + "','" + this.pincode + "','" + this.description + "','" + this.joinedate + "','" + this.expirydate + "','" + this.email + "','" + this.mobileno + "','" + this.password + "','open')";
        }
        else {

            this.query = "UPDATE bussiness SET  name='" + this.name + "', title='" + this.title + "' , address = '" + this.address + "', cityid = '" + this.cityid + "', pincode = '" + this.pincode + "', description = '" + this.description + "',joinedate = '" + this.joinedate + "',expirydate = '" + this.expirydate + "',email = '" + this.email + "',mobileno = '" + this.mobileno + "',password = '" + this.password + "',pincode = '" + this.status + "' ";
            this.query += " WHERE id =" + this.id;
        }

        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err)
                };
                resolve(result);
            });
        });

    }


    list = () => {
        this.query = "SELECT * FROM bussinesses ";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }


    delete = ()=>{

        this.query = "DELETE FROM bussinesses ";
        this.query += " WHERE id = '"+ this.id + "' ";                
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });         
    }


    get=()=>{
        this.query = "SELECT * FROM bussinesses ";
        this.query += " WHERE id = '"+ this.id + "' ";                
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });  

    }





}

module.exports = {

    Bussiness: Bussiness

}