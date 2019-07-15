import express from "express";
import controller from "../controllers/controller";
const router = express.Router();

/*GET all trips */
router.get("/api/trips", controller.trips);

/* Create new trips*/

router.post("/api/trips", controller.createTrip);

module.exports = router;
