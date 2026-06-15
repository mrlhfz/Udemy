import express from "express";

const app = express();
const port = 8008;

app.get("/", (req, res) => {
    const d = new Date();
    let day = d.getDay();

    let type = "a weekday";
    let adv = "let's work hard";
    
    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "let's have fun";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
