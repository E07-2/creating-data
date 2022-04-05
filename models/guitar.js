import mongoose from "mongoose";

const guitarSchema = new mongoose.Schema({
  name: String,
  stock: Number,
  imageUrl: String,
  price: Number,
  discount: Boolean,
  colour: String,
});

// name of variable does not matter
// the string we pass into the model, should reflect the name of our collection
const Guitars = mongoose.model("guitars", guitarSchema);

export default Guitars;
