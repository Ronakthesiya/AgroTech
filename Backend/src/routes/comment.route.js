import { Router } from "express";
import {
    addComment,
    deleteComment,
    getAllCommentOfPost,
} from "../controllers/comment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/add-comment/:userId/:postId").post(addComment);
router.route("/delete-comment/iId").delete(deleteComment);
router.route("/all-comment/:postId").get(getAllCommentOfPost)

export default router;
