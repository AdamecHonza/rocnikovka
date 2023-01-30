const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT | 3000;

const concertRouter = require("./routes/concert");
const ticketRouter = require("./routes/ticket");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use("/api/concert", concertRouter);
app.use("/api/ticket", ticketRouter);




app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} http://localhost:${PORT}/`)
);
