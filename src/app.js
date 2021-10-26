import express from 'express';
import path from 'path';

//import user from './api/user/router/userRouter';
//import memo from './api/memo/router/memoRouter';
import autoRoute from './autoRoute';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../client/build')));

//app.use('/api/user', require('./api/user/router/userRouter'))
autoRoute({ app });

app.get("*", (req,res) => {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;

