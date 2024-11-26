import Link from "../Models/Link.js";

// הוספת קליק חדש
export const addClick = async (req, res) => {
  try {
    const { id } = req.params;
    const { ipAddress, targetParamValue } = req.body;

    const link = await Link.findById(id);
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    link.clicks.push({ ipAddress, targetParamValue });
    await link.save();

    res.status(201).json({ message: "Click added successfully", link });
  } catch (err) {
    res.status(500).json({ message: "Error adding click", error: err.message });
  }
};

// פילוח קליקים לפי ערכי מקורות (target values)
export const getClicksByTarget = async (req, res) => {
  try {
    const { id } = req.params;

    const link = await Link.findById(id);
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    const clicksByTarget = link.clicks.reduce((acc, click) => {
      const target = click.targetParamValue || "Unknown";
      acc[target] = (acc[target] || 0) + 1;
      return acc;
    }, {});

    res.json({ clicksByTarget });
  } catch (err) {
    res.status(500).json({ message: "Error fetching clicks by target", error: err.message });
  }
};
