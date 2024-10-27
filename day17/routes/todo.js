const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

// CREATE a new TODO item
router.post("/", async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Error creating TODO item" });
  }
});

// READ all TODO items
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Error fetching TODO items" });
  }
});

// UPDATE a TODO item
router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTodo) return res.status(404).json({ error: "TODO not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: "Error updating TODO item" });
  }
});

// DELETE a TODO item
router.delete("/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).json({ error: "TODO not found" });
    res.json(deletedTodo);
  } catch (err) {
    res.status(500).json({ error: "Error deleting TODO item" });
  }
});

// DELETE multiple TODO items
router.delete("/", async (req, res) => {
  try {
    const { ids } = req.body;
    await Todo.deleteMany({ _id: { $in: ids } });
    res.json({ message: "TODO items deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting multiple TODO items" });
  }
});

module.exports = router;
