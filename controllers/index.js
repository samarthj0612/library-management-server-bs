
const { messaging, database } = require("firebase-admin");
const { getDoc, doc } = require('firebase-admin/firestore');
const { firestore } = require("../firebase/config");
// const { VIRTUAL_SCROLL_STRATEGY } = require("@angular/cdk/scrolling");


const root = (req, res) => {
  res.status(200).json({ message: "Server is successfully connected" });
};

const library = async (req, res) => {
  console.log(req.params.id);
  try {
    const libraryRef = firestore.collection('libraries').doc(req.params.id);
    const doc = await libraryRef.get();
    if (!doc.exists) {
      console.log('No such document!');
      return res.status(404).json({ message: "Library not found" });
    } else {
      console.log('Document data:', doc.data());
      return res.status(200).json({ message: "Library details retrieved successfully", libraryDetails: doc.data() });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const userHomepage = async (req, res) => {
  const username = req.params.username;
  console.log(username);

  try {
    const userRef = firestore.collection('users').where('username', '==', username);
    const snapshot = await userRef.get();
    
    if (snapshot.empty) {
      console.log('No matching documents.');
      return res.status(404).json({ message: "User not found" });
    } 

    let userData;
    snapshot.forEach(doc => {
      userData = doc.data();
    });

    res.status(200).json({ message: "userHomepage is working", response: userData });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const branchDetails = async (req, res) => {
  const branchId = req.params.branchId;

  try {
    const branchRef = firestore.collection('branches').doc(branchId);
    const branchDoc = await branchRef.get();

    if (!branchDoc.exists) {
      return res.status(404).json({ message: "Branch not found" });
    }

    res.status(200).json({ message: "Branch details retrieved successfully", branchDetails: branchDoc.data() });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const studentDetailsPage = async (req, res) => {
  const studentId = req.params.studentId;

  try {
    const studentRef = firestore.collection('students').doc(studentId);
    const studentDoc = await studentRef.get();

    if (!studentDoc.exists) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student details retrieved successfully", studentDetails: studentDoc.data() });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const renewalDateReminder = async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);

  try {
    const renewalRef = firestore.collection('renewals').where('userId', '==', userId);
    const snapshot = await renewalRef.get();

    if (snapshot.empty) {
      console.log('No matching documents.');
      return res.status(404).json({ message: "No renewals found for this user" });
    }

    let renewalDates = [];
    snapshot.forEach(doc => {
      renewalDates.push(doc.data());
    });

    res.status(200).json({ message: "Successfully fetched renewal dates.", response: renewalDates });
  } catch (error) {
    res.status(500).json({ message: "Failed to get renewal date.", error: error.message });
  }
};


module.exports = { root, library, userHomepage, branchDetails, studentDetailsPage, renewalDateReminder };
