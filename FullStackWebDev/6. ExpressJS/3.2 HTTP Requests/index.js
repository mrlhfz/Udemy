import express from "express"
const app = express();
const port = 8008;

app.get("/", (req, res) => {
    res.send("<h1>Halu!</h1>");
    console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About me!</h1>");
})

app.listen(8008, () => {
    console.log(`Server running on port ${port}.`);
});