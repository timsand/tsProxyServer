const express = require('express');
const app = express();
const path = require('path')
const port = 8222;
const htmlFile = path.join(__dirname);
const cors = require('cors');


app.use(cors());


app.use(express.json());


app.use(express.static(htmlFile))



app.listen(port, () => {
  console.log('listening on ' + port);
})