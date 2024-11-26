import mongoose from "mongoose";

// סכימת קליק
const clickSchema = new mongoose.Schema(
  {
    insertedAt: { type: Date, default: Date.now },
    ipAddress: { type: String },
    targetParamValue: { type: String, default: "" },
  },
  { _id: false }
);

// סכימת לינק
const linkSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  targetParamName: { type: String, default: "t" }, // שם פרמטר הטירגוט (לדוגמה: t)
  targetValues: { type: [String], default: [] }, // ערכי מקורות
  clicks: { type: [clickSchema], default: [] }, // מערך קליקים
  isActive: { type: Boolean, default: true },
});

const Link = mongoose.model("Link", linkSchema);

export default Link;
