import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
    changeCurrentPassword,
    getAllPost,
    getAllUser,
    getCurrentUser,
    getExtraDetail,
    loginUser,
    logoutUser,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(upload.single("avatar"), registerUser);

router.route("/login").post(loginUser);

// secure routes
router.route("/all-user/:id").get(getAllUser)
router.route("/logout/:id").post(logoutUser);
router.route("/change-password/:id").post(changeCurrentPassword);
router.route("/:id").get(getCurrentUser);
router.route("/all-post/:id").get(getAllPost);
router.route("/extra-count/:id").get(getExtraDetail);

router
    .route("/avatar")
    .patch( upload.single("avatar"), updateUserAvatar);
router.route("/update-account/:id").patch(updateAccountDetails);
export default router;
