const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.EMAIL_API_KEY);

const app = express();
const PORT = process.env.PORT | 3000;

const concertRouter = require("./routes/concert");
const ticketRouter = require("./routes/ticket");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/concert", concertRouter);
app.use("/api/ticket", ticketRouter);

// app.get("/", (req, res) => {
//   const msg = {
//     to: "proces.env.EMAIL_RECIEVER", // Change to your recipient
//     from: "process.env.EMAIL_SENDER", // Change to your verified sender
//     subject: "Sending with SendGrid is Fun",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//     text: "negr negr negr"
//   };
//   sgMail
//     .send(msg)
//     .then(() => {
//       res.status(200).send("GUT");
//       console.log("Email sent");
//     })
//     .catch((error) => {
//       res.status(500).send("NOT GUT");
//       console.error(error);
//     });
// });

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} http://localhost:${PORT}/`)
);
