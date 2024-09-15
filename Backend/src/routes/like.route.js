import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getAllLikedPost, toggleLike } from "../controllers/like.controller.js";

const router = Router();


router.route("/toggle-like/:userId/:postId").post(toggleLike);
router.route("/all-like-post/:userId").get(getAllLikedPost);

export default router;
