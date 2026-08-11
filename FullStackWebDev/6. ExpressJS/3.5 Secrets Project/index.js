import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8008;
const SECRET_PASSWORD = "mendeSia";

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (req.body.password === SECRET_PASSWORD) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.status(401).send("Incorrect password. <a href='/'>Try again</a>");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


