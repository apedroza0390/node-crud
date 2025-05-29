require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(require("./src/routes/home.route"));

app.listen(PORT, () => console.log('Server listen on http://localhost:' + PORT));