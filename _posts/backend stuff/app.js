const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ejs = require("ejs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const uri = "mongodb://localhost:27017";
const dbName = "chatapp";

app.get("/", async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const messages = await db.collection("messages").find().toArray();
    res.render("index", { messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving messages");
  } finally {
    client.close();
  }
});

app.post("/message", async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    await db.collection("messages").insertOne(req.body);
    res.status(201).send();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving message");
  } finally {
    client.close();
  }
});

app.listen(4001, () => console.log("Server listening on port 4001"));
