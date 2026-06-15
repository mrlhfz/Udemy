import express from "express";
var bandName = "";

//file path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//morgan
import morgan from "morgan";
app.use(morgan("tiny"));

//body parser
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));

//band name generator
function bandNameGenerator(req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h2>Your band name is:</h2> <p>${bandName}</p>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
