const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const Contact = require("./models");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(morgan("dev"));

const PORT = process.env.PORT || 3005;
const connectToDB = require("./dbConnection");
connectToDB();
// app.use("/user", Router)
// app.use("/recipe", Router)
app.post("/add", async (request, response) => {
  const addContact = await Contact({ ...request.body });
  await addContact.save();
  response.send("added");
});

app.get("/contact/:id", async (request, response) => {
  const { id } = request.params;
  const getContact = await Contact.findById(id);
  response.send(getContact);
});
app.put("/update/:id", async (request, response) => {
  const { id } = request.params;
  const updateProduct = await Contact.findByIdAndUpdate(
    id,
    {
      ...request.body,
    },
    { runValidators: true },
    { new: true }
  );
  response.send(updateProduct);
});
app.get("/", async (request, response) => {
  const allContacts = await Contact.find();
  response.send(allContacts);
});
app.delete("/delete/:id", async (request, response) => {
  const { id } = request.params;
  const deleteItem = await Contact.findByIdAndDelete(id);
  response.send("deleted");
});
app.listen(PORT, () =>
  console.log(`server is runing on http://localhost:${PORT}`)
);
