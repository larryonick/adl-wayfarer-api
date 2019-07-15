import express from "express";
import controller from "../controllers/controller";
const router = express.Router();

/*GET all trips */
router.get("/api/users/", controller.users);
module.exports = router;
