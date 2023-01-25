const express = require("express");
const router = express.Router();
const controller = require("../controllers/ticket");

router.get("/", controller.getTickets);
router.post("/", controller.createTicket);
router.delete("/", controller.deleteTickets)

router.get("/ticket_code/:ticket_code", controller.getTicketByCode);
router.get("/id/:id", controller.getTicketById);
router.put("/:ticket_code", controller.updateTicket);
router.delete("/:ticket_code", controller.deleteTicket);

module.exports = router;