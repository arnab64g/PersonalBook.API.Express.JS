const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");
const gradeRouter = require("./routes/gradeRoute");
const semesterRouter = require("./routes/semesterRoute");
const courseRouter = require("./routes/courseRoute");
const secondaryRoute = require("./routes/secondaryRoute");
const expenseRoute = require("./routes/expenseRoute");
const resultRoute = require("./routes/resultRoute");
const cors = require("cors");
const db = require("./database/dbconnect");
const port = 3000;

db.sequelize.sync();

app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/grade', gradeRouter);
app.use('/api/semester', semesterRouter);
app.use('/api/course', courseRouter);
app.use('/api/secondaryResult', secondaryRoute);
app.use('/api/result', resultRoute);
app.use('/api/expense', expenseRoute);


app.listen(port, () => {
 
  console.log(`Example app listening on port ${port}`)
}); 