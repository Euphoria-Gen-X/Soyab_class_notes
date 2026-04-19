const Express = require("express");
const Base = require("./controller/base.controller");
const userRouter = require("./router/user.router");


const app = Express();

app.get('/', Base);
// app.get('/profile/:username/:age', Profile);
app.use('/api/v1/user', userRouter);

app.listen(5000, () => {
  console.log('Server is running on http://127.0.0.1:5000');
});