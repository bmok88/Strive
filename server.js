const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(2000, () => {
  console.log('Calendar server up and running on port 2000');
});

const appID = 'a2af49ca';
const appKey = '0c0ba6d3d11fd75a6714f159d648db1e';
