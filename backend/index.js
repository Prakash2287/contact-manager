const express = require("express");
const bodyParser = require("body-parser");
const client = require("./db");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const contactModel = require("./schema");
app.use(bodyParser.json());
app.use(cors());
const getCurrentDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return currentDate;
};

const getMongoCollectionOfContacts = async () => {
  const mongoClient = await client();
  currentClientInstance = mongoClient;
  const db = mongoClient.db("contact-information");
  const collection = db.collection("contacts");
  return collection;
};

app.post("/add-contact", async (req, res) => {
  const { name, contactNumber, country, tag, dateOfBilling } = req.body;
  const collection = await getMongoCollectionOfContacts();

  try {
    const newContact = await collection.insertOne({
      name,
      contactNumber,
      country,
      tag,
      dateOfBilling,
      dateOfCreation: getCurrentDate(),
    });
    res.status(201).json({ message: "Contact added successfully" });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/all-contacts", async (req, res) => {
  const collection = await getMongoCollectionOfContacts();
  const allRecords = await collection.find({}).toArray();
  res.status(200).json({ allRecords });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
