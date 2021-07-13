import express from "express";
const router = express.Router();
import {
  createSongs,
  getSongs,
  deleteSongs,
  deleteMultiSongs,
  updateSongs,
} from "../controller/songController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createSongs);
router.route("/").get(protect, getSongs);
router.route("/:id").delete(protect, deleteSongs).put(protect, updateSongs);
router.route("/delete").post(protect, deleteMultiSongs);

export default router;
