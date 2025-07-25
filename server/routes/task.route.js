const { Router } = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  smartAssignTask,
} = require("../controllers/task.controller");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = Router();

router.route("/create").post(isAuthenticated, createTask);
router.route("/").get(isAuthenticated, getTasks);
router.route("/update/:id").put(isAuthenticated, updateTask);
router.route("/delete/:id").delete(isAuthenticated, deleteTask);
router.route("/:id/assign-smart").put(isAuthenticated, smartAssignTask);

module.exports = router;
