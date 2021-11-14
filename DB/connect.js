const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://pulkit:pulkit2012@nodeexpressprojects.cvvaz.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => console.log(err));
