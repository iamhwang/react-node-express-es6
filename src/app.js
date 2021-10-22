import express from 'express';
import path from 'path';

/* ROUTE */
//import userLogin from './api/user/userLogin/apiUserLogin';
import user from './api/user/ApiUser';
import memo from './api/memo/ApiMemo';

/* SETTING */
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user/", user);

app.use("/api/memo/", memo);
app.use(express.static(path.join(__dirname, '../client/build')));


app.get("*", (req,res) => {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
