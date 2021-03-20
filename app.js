const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    // 從資料庫可能會拿到一個array物件
    const languages = [
        { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
        { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
        { name: "C++", rating: 6.6, popularity: 7.7, trending: "same" },
        { name: "PHP", rating: 2.5, popularity: 4.7, trending: "decreasing" },
        { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "same" },
      ];
    res.render("index.ejs", { languages }); // render用來處理和解釋ejs
});

app.get("/response", (req, res) => {
    let { fullname, age } = req.query;
    res.render("respond.ejs", {fullname, age});
    res.send("感謝你的提交")
})

app.listen(3000, () => {
    console.log("伺服器在port3000上");
})