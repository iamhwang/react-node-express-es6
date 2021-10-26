import express from 'express';
import path from 'path';

import autoRoute from './autoRoute';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../client/build')));

autoRoute({ app });

app.get("*", (req,res) => {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
