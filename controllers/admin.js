// const { app, firestore } = require("firebase-admin");
const { response } = require("../routes/library");
const { firestore } = require("../firebase/config");

const admin = (req, res) => {
  res.status(200).json({ message: "Admin route connected" })
}




const notification = async (req, res) => {
  const { message } = req.body;
  const timestamp = new Date();
  try {
    await firestore.collection("notifications").add({ message, timestamp });
    res.status(200).json({ message: "Notification added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const adminStudentRegistration = (req, res) => {
  res.redirect('/register');
};

const addNotice = async (req, res) => {
  const { message, date } = req.body;
  try {
    await firestore.collection("notices").add({ message, date });
    res.status(200).json({ message: "Notice scheduled successfully", notice: { message, date } });
  } catch (error) {
    res.status(500).json({ message: "Failed to schedule notice", error: error.message });
  }
};
const newBookAdded = async (req, res) => {
  try {
    const snapshot = await firestore.collection("books").get();
    const newBooksList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json({ message: "Successfully fetched the list of new books", response: newBooksList });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the list of new books.", error: error.message });
  }
};


const lostBooks = async (req, res) => {
  try {
    const snapshot = await firestore.collection("lostBooks").get();
    const lostBooksList = snapshot.docs.map(doc => doc.data());
    res.status(200).json({ message: "Successfully fetched the lost books list", response: lostBooksList });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the list of lost books.", error: error.message });
  }
};

const borrowedBooks = async (req, res) => {
  try {
    const snapshot = await firestore.collection("borrowedBooks").get();
    const borrowedBooksList = snapshot.docs.map(doc => doc.data());
    res.status(200).json({ message: "Successfully fetched the borrowed books list", response: borrowedBooksList });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the list of borrowed books.", error: error.message });
  }
};

const availableBooks = async (req, res) => {
  try {
    const snapshot = await firestore.collection("availableBooks").get();
    const availableBooksList = snapshot.docs.map(doc => doc.data());
    res.status(200).json({ message: "Successfully fetched the available books list", response: availableBooksList });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the list of available books.", error: error.message });
  }
};

const branchDetails = async (req, res) => {
  try {
    const snapshot = await firestore.collection("branchDetails").get();
    const branchDetailsList = snapshot.docs.map(doc => doc.data());
    res.status(200).json({ message: "Successfully fetched the branch details", response: branchDetailsList });
  } catch (error) {
    res.status(500).json({ message: "Failed to get the branch details.", error: error.message });
  }
};
module.exports = { admin , notification, adminStudentRegistration, addNotice, newBookAdded, lostBooks, borrowedBooks, availableBooks, branchDetails}
