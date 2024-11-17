
import Link from'../models/Link.js';

// // יצירת קישור חדש
// exports.createLink = async (req, res) => {
//   try {
//     const { originalUrl } = req.body;
//     const newLink = new Link({ originalUrl });
//     await newLink.save();
//     res.status(201).json(newLink);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating link', error });
//   }
// };

// // שליפת קישורים
// exports.getLinks = async (req, res) => {
//   try {
//     const links = await Link.find();
//     res.status(200).json(links);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching links', error });
//   }
// };

const LinkController = {
    getList: async (req, res) => {
      try {
        const links = await Link.find(); //ללא סינון
        res.json({ links });
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    getById: async (req, res) => {
      try {
        const link = await Link.findById(req.params.id); //שליפה לפי מזהה
        res.json(link);
        console.log("lll");
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    getLinkById: async (id) => { // פונקציה חדשה לשליפה לפי מזהה
      try {
        const link = await Link.findById(id);
        return link;
      } catch (e) {
        throw new Error(e.message);
      }
    },
  
    add: async (req, res) => {
      const { originalUrl, targetParamName, targetValues } = req.body;
      try {
        const newLink = await Link.create({ originalUrl, targetParamName, targetValues }); //הוספת חדש
        res.json(newLink);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    update: async (req, res) => {
      const { id } = req.params;
      try {
        const updatedLink = await Link.findByIdAndUpdate(id, req.body, {
          new: true,
        }); //עדכון לפי מזהה
        res.json(updatedLink);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    delete: async (req, res) => {
      const { id } = req.params;
      try {
        const deleted = await Link.findByIdAndDelete(id); //מחיקה לפי מזהה
        res.json(deleted);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    getClicksByTarget: async (req, res) => { // פונקציה חדשה לפילוח קליקים לפי מקורות
      try {
        const link = await Link.findById(req.params.id);
        if (!link) {
          return res.status(404).send('Link not found');
        }
  
        const clicksByTarget = link.clicks.reduce((acc, click) => {
          const targetValue = click.targetParamValue || "unknown";
          if (!acc[targetValue]) {
            acc[targetValue] = 0;
          }
          acc[targetValue]++;
          return acc;
        }, {});
  
        res.json({ clicksByTarget });
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    }
  };
  
  export default LinkController;