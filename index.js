const express = require("express");
const PORT = process.env.PORT || 4200;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/db");
const taskRoutes = require("./routes/task");
const counterpartyRoutes = require("./routes/counterparty");
const groupRoutes = require("./routes/group");
const adminRoutes = require("./routes/admin");
const getAdmin = require("./routes/getadmin");
const addToArchive = require("./routes/addToArchive");
const databaseRoutes = require("./routes/database");
const listenerRoutes = require("./routes/listener");
const courseRoutes = require("./routes/course");
const dealsRoutes = require("./routes/deal");
const settingsRoutes = require("./routes/settings");
const eventsRoutes = require("./routes/event")
const testsRoutes = require("./routes/saveTest")
const app = express();

mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log({ database_error: err });
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/api/files", databaseRoutes);
app.use("/api/archive", addToArchive);
app.use("/api/getAdmin", getAdmin);
app.use("/api/admin", adminRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/counterparty", counterpartyRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/listeners", listenerRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/deals", dealsRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/events", eventsRoutes)
app.use("/api/tests", testsRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
