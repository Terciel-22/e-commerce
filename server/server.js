import Express from "express";
import cors from "cors";
import mysql from "mysql";

const app = Express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

app.use(Express.json());
app.use(cors());

app.listen(8000,()=>{
    console.log("Connected to backend!");
});


app.get("/", (req,res)=>{
    res.json("Potra");
});

app.get("/message", (req,res)=>{
    const q = "SELECT * FROM messages"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    });
});

app.post("/message", (req,res)=>{
    const q = "INSERT INTO messages (`first_name`,`last_name`,`email`,`message`) VALUES (?)";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.message
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        else return res.json("Successfully posted!");
    });
});