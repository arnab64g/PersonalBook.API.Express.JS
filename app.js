const express = require("express")
const app = express();
const userRouter = require("./routes/userRoute");
const gradeRouter = require("./routes/gradeRoute");
const cors = require("cors");
const db = require("./database/dbconnect");
require("dotenv").config();
const port = process.env.PORT;
db.sequelize.sync();

app.use(cors());

app.use('/api', userRouter);
app.use('/api', gradeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});