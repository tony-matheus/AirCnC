const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aircnc:aircnc@cluster0-aywit.mongodb.net/admin?retryWrites=true&w=majority', {
  usenewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log("Server Running"))

