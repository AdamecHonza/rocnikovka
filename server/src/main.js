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


app.get("/", async (req, res) => {
    try {
        const authData = await pb.admins.authWithPassword(process.env.DB_ADMIN_EMAIL, process.env.DB_ADMIN_PASS);
        const resultList = await pb.collection('addresses').getList(1, 50);
        res.json(resultList.items   )
    } catch (err) {
        console.error(err)
        res.status(err.status).send(err.data)
    }
})


app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} http://localhost:${PORT}/`)
);
