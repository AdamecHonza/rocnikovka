const express = require("express");
const router = express.Router();
const controller = require("../controllers/concert");

router.get("/", controller.getConcerts);
router.post("/", controller.createConcert);
router.delete("/", controller.deleteConcerts)

router.get("/id/:id", controller.getConcertById);
router.get("/search/", controller.getConcertSearch);
router.put("/:ticket_code", controller.updateConcert);
router.delete("/:ticket_code", controller.deleteConcert);

module.exports = router;