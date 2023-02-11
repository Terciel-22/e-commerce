import Express from "express";
import cors from "cors";
import mysql from "mysql";
import md5 from "md5";

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
    res.json("Get data needed in home page");
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

app.post(
    "/signup",
    (req, res) => {
        const {signUpUsername,signUpEmail,signUpPassword} = req.body;
        const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
        const values = [
            signUpUsername,
            signUpEmail,
            md5(signUpPassword)
        ];
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err)
            else return res.json("Successfully registered.");
        });
    },
);

app.post(
    "/login",
    (req, res) => {
        const {loginEmail,loginPassword} = req.body;
        const q = "SELECT * FROM users WHERE email = ? AND password = ?";
        db.query(q,[loginEmail,md5(loginPassword)],(err,data)=>{
            if(err) return res.json(err)
            else return res.json(data);
        });
    },
);

app.get(
    "/checkemail",
    (req, res) => {
        const {email} = req.query;
        const q = "SELECT * FROM users WHERE email = ?";
        const values = [email];
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err)
            return res.json(data);
        });
    },
);
