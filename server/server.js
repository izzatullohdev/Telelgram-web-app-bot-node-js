const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
// ejs
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

const startServer = () => {
  return new Promise((resolve, reject) => {
    try {
      app.listen(3000, () => {
        console.log("Server 3000-portda ishlayapti");
        resolve();
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = startServer; 
