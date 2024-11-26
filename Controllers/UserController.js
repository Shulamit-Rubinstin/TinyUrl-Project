import User  from'../models/User.js';

// // יצירת משתמש חדש
// exports.createUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const newUser = new User({ name, email, password, links: [] });
//     await newUser.save();

//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // שליפת כל המשתמשים
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find().populate('links');
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // שליפת משתמש לפי מזהה
// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).populate('links');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // עדכון משתמש
// exports.updateUser = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // מחיקת משתמש
// exports.deleteUser = async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const UserController = {
    getList: async (req, res) => {
      try {
        const users = await User.find();
        res.json({ users });
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    getById: async (req, res) => {
      try {
        const user = await User.findById(req.params.id);//שליפה לפי מזהה
        res.json(user);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    add: async (req, res) => {
      const { name,email,password,links } = req.body;
     
      try {
        const newUser = await User.create({ name,email,password,links });//הוספת חדש
        res.json(newUser);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    update: async (req, res) => {
      const { id } = req.params;
      try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
          new: true,
        });//עדכון לפי מזהה
        res.json(updatedUser);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    delete: async (req, res) => {
        try {
            const userId = req.params.id;
            const deletedUser = await User.findByIdAndDelete(userId);

            if (!deletedUser) {
                return res.status(404).send({ message: "User not found" });
            }
            res.status(200).send({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).send({ message: "Error deleting user", error });
        }
    }

  
    
  };
  
  export default UserController;