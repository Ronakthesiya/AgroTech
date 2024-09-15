import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    addPost,
    deletePost,
    editPostDetail,
    editPostImage,
    getAllPost,
    getCurrentUserAllPost,
    getPost,
} from "../controllers/post.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();


router.route("/get-all-post/:userId").get(getCurrentUserAllPost)
router.route("/get-all-post").get(getAllPost);
router.route("/add-post/:userId").post(upload.single("image"),addPost);
router.route("/image/:id").patch(editPostImage);
router.route("/post-details/:id").patch(editPostDetail);
router.route("/delete/:id").delete(deletePost);
router.route("/post/:id").get(getPost);

export default router
