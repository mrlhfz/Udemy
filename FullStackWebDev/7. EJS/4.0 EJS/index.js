import express from "express";

const app = express();
const port = 3000;
let today = new Date().getDay();
const WEEKENDS = [0, 6];

app.get("/", (req, res) => {
  let type = "a weekday";
  let adv = "its time to be sad"
  
  if (WEEKENDS.includes(today)) {
    res.render("index.ejs", {
      type: "the weekend",
      adv: "its time to be sad but on a weekend"
    })
  } 
  res.render("index.ejs", {
    dayType: type,
    advice: adv
  })

})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
})