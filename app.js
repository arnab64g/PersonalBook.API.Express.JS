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
require("dotenv").config();
const port = process.env.PORT;

db.sequelize.sync();

app.use(cors());

app.use('/api/User', userRouter);
app.use('/api/Grade', gradeRouter);
app.use('/api/Semester', semesterRouter);
app.use('/api/Course', courseRouter);
app.use('/api/SecondaryResult', secondaryRoute);
app.use('/api/Result', resultRoute);
app.use('/api/Expense', expenseRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});