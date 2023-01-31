const express = require("express");
const router = express.Router();
const controller = require("../controllers/concert");

router.get("/", controller.getConcerts);
router.post("/", controller.createConcert);
router.delete("/", controller.deleteConcerts);

router.get("/id/:id", controller.getConcertById);
router.get("/search/", controller.getConcertSearch);

router.get("/availabletickets/:id", controller.getAvailableTickets);
router.get("/boughtTickets/:id", controller.getBoughtTickets);

router.put("/id/:id", controller.updateConcert);
router.delete("/id/:id", controller.deleteConcert);

module.exports = router;
