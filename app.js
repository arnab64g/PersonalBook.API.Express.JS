const express = require("express")
const app = express();
const userRouter = require("./routes/userRoute");
const gradeRouter = require("./routes/gradeRoute");
const port = 7108
const cors = require("cors");

const db = require("./database/dbconnect");
db.sequelize.sync();

app.use(cors());

app.use('/api', userRouter);
app.use('/api', gradeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});