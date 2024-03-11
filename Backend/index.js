import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { PythonShell } from "python-shell";
import Chatbot from "./models/chatbot.models.js";
import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));


// -------------------------API Endpoint---------------------------
app.post("/api/create-index", async (req, res) => {
  try {
    let name = req.body.name;
    let desc = req.body.desc;

    const obj = {
      name: name,
      description: desc,
      botId: uuidv4(),
    };

    console.log(obj)

    await Chatbot.create(obj)


// ------------------------Chatbot  Creation Logic--------------
    let options = {
      args: [name, desc],
    };

    PythonShell.run("vector.py", options)
      .then(() => PythonShell.run("app.py", options))
  } catch (error) {
    console.error("Error creating index:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the index" });
  }

  console.log("Chatbot is ready to go...")

  res.redirect('/')
});


// ---------------------Listen the server---------------------------
mongoose.connect("mongodb://localhost:27017/NACO").then(() => {
  app.listen(PORT, (err) => {
    if (err) console.log(err.message);

    console.log(`Server is running on port : http://localhost:${PORT}`);
  });
});
