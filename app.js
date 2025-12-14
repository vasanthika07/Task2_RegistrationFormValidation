const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("register", { error: null, success: null });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.render("register", {
      error: "All fields are required!",
      success: null
    });
  }

  if (password.length < 6) {
    return res.render("register", {
      error: "Password must be at least 6 characters",
      success: null
    });
  }

  res.render("register", {
    error: null,
    success: "Registration Successful!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
