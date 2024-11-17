import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  // המזהה ייווצר אוטומטית בעת ביצוע הפנייה (לא נשמור אותו)
});

const Link = mongoose.model('Link', linkSchema);

export default link;
