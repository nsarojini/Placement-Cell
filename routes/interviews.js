const express = require("express");
const router = express.Router();

const interviewController = require("../controllers/interviews_controller");

// -------- Get requests ----------
router.get("/add-interview", interviewController.addInterview);

router.get("/deallocate/:studentId/:interviewId", interviewController.deallocate);

// -------- Post Requests ---------
router.post("/create", interviewController.create);

router.post("/enroll-in-interview/:id", interviewController.enrollInInterview);



module.exports = router;
