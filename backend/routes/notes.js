const express = require("express");
const routes = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get all the notes using : GET "api/notes/fetchallnotes"  require Login

routes.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER ERROR ");
  }
});

//ROUTE 2: Add a notes using : POST "api/notes/addnote"  require Login

routes.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter A Valid Title").isLength({ min: 3 }),
    body(
      "description",
      "Description Should be more then 5 Characters"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // IF THERE IS A ERROR , RETURN BAD REQUEST AND THE ERROR
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
      }

      //   Create a New Note
      const note = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("INTERNAL SERVER ERROR ");
    }
  }
);

//ROUTE 3: Update a note using : POST "api/notes/updatenote"  require Login

routes.put(
  "/updatenote/:id",
  fetchuser,
  // [
  //   body("title", "Enter A Valid Title").isLength({ min: 3 }),
  //   body(
  //     "description",
  //     "Description Should be more then 5 Characters"
  //   ).isLength({ min: 5 }),
  // ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // // IF THERE IS A ERROR , RETURN BAD REQUEST AND THE ERROR
      // const result = validationResult(req);
      // if (!result.isEmpty()) {
      //   return res.send({ errors: result.array() });
      // }

      // Create a new Note
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      // Find the note to update
      let note = await Notes.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not Found");
      }

      // Checking the user is as the note user
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
      }
      // Updating the Existing Note
      note = await Notes.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("INTERNAL SERVER ERROR ");
    }
  }
);

//ROUTE 4: Delete a note using : DELETE "api/notes/deletenote/:id"  require Login

routes.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // const { title, description, tag } = req.body;

    // Find the note to delete
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Checking the user is as the note user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    // deleting the Existing Note
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note Has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER ERROR ");
  }
});

module.exports = routes;
