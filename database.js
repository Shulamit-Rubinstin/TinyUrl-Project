import mongoose from "mongoose";

// Replace the uri string with your connection string.
const uri =
"mongodb+srv://Shulamit:Shulamit7854@cluster0.96b6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const uriLocal = "mongodb://localhost:27017/cluster0.96b6h.mongodb.net/";

const connectDB = async () => {
  await mongoose.connect(uri);
};
const database = mongoose.connection;
mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id;
    }
  });
  

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

export default connectDB;
