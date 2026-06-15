//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

//var
var passwordTrue = false;

//express + port
import express from "express";
//body parser 
import bodyParser from "body-parser";
//file path
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8008;



app.use(bodyParser.urlencoded({extended:true}));

//password checker
function passwordChecker(req, res, next) {
    const password = req.body["password"];
    if (password === "LOLOL") {
        passwordTrue = true;
    }
    next();
}
app.use(passwordChecker);

//morgan
import morgan from "morgan";
app.use(morgan("tiny"));

//node
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(passwordTrue) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});

//listen

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
