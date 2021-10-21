import express from 'express';
import path from 'path';

/* ROUTE */
import userLogin from './api/user/userLogin/api_userLogin';

/* SETTING */
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user/", userLogin);
app.use(express.static(path.join(__dirname, '../client/build')));


app.get("*", (req,res) => {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
