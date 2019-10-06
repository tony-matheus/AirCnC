const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aircnc:aircnc@cluster0-aywit.mongodb.net/admin?retryWrites=true&w=majority', {
  usenewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', '..', 'uploads')))
app.use(routes);

// routes.post('/sessions', SessionController.store);

// app.get('/thais', (req, res)=>{
//   res.json({ thais: "babaca"})
// })

app.listen(8080)

