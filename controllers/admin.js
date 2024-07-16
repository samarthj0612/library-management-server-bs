const { app } = require("firebase-admin");
const { response } = require("../routes/library");

const admin = (req, res) => {
  res.status(200).json({ message: "Admin route connected" })
}

const notification = (req, res) => {
  const data = req.params;
  console.log(data); 
  try{
    res.status(200).json({message: "notification is working", response: data});
  
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }

}

const adminStudentRegistration = (req, res) => {
  res.redirect(registerHandler)
}

const addNotice = (req, res) => {
  const { message, date } = req.body; 
  console.log("hello");
  try {
    res.status(200).json({ message: "Notice scheduled successfully", notice: { message, date } });
  } catch (error) {
    res.status(500).json({ message: "Failed to schedule Notice", error: error.message });
  }
}

const newBookAdded = (req,res) => {
  const data = req.body;
  try {
    res.status(200).json({ message: "Book Added successfully", response: data });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the list.", error: error.message });
  }
  
}

const lostBooks = (req,res) => {
  const data = req.body;
  try {
    res.status(200).json({ message: "Successfully fetched the lost Books list", response: data });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the list of lost Books.", error: error.message });
  }
}

const borrowedBooks = (req,res) => {
  const data = req.body;
  try {
    res.status(200).json({ message: "Successfully fetched the borrowed Books list", response: data });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the list of borrowed Books.", error: error.message });
  }
}
const availableBooks = (req,res) => {
  const data = req.body;
  try {
    res.status(200).json({ message: "Successfully fetched the available Books list", response: data });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the list of available Books.", error: error.message });
  }
}

const branchDetails = (req,res) => {
  const data = req.data;
  try {
    res.status(200).json({ message: "Successfully fetched the Branch Details", response: data });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the Branch Details.", error: error.message });
  }
}

module.exports = { admin , notification, adminStudentRegistration, addNotice, newBookAdded, lostBooks, borrowedBooks, availableBooks, branchDetails}
