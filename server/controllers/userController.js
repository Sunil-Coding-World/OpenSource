import { User } from "../models/User.js";

// Get all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",

    });
  }
};

// Get a single user by ID
export const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

// Create a new user
export const createUser = async (req, res, next) => {
  try {
    const { email, password} = req.body;

    // Validate the request body
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Please provide email, password, and role",
      });
    }

    const newUser = await User.create({
      email,
      password,
    });
    console.log("Received user data:", req.body);


    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};


export const updateUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};


// Delete a user by ID
export const deleteUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    
    const deletedUser = await User.findByIdAndRemove(userId);
    
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};


// Find a user by email
export const findUserByEmail = async (req, res, next) => {
  try {
    const userEmail = req.params.email; // Assuming the email is passed as a URL parameter
    
    // Use the findOne method to find a user by email
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
