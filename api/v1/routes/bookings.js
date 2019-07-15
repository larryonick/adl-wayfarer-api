import express from "express";
import controller from "../controllers/controller";
const router = express.Router();

/*GET all bookings */
router.get("/api/bookings", controller.bookings);

/*GET user bookings */
router.get("/api/bookings/user/:username", controller.user_bookings);

// console.log(router);

module.exports = router;
