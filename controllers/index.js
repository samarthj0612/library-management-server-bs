
const { messaging, database } = require("firebase-admin");
const { getDoc, doc } = require('firebase-admin/firestore');
const { firestore } = require("../firebase/config");


const root = (req, res) => {
  res.status(200).json({ message: "Server is successfully connected" })
}

// const library = (req,res) => {
//   const data = req.params.id;
//   console.log(data);

//   try{
//     // const result = logic

//     res.status(200).json({ message: "This is Library", response: data });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong", error: error });
//   }
//   }



const library = async (req, res) => {
  console.log(req.params.id);

  try {
    const libraryRef = firestore.collection('libraries').doc(req.params.id);
  const doc = await libraryRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }
  } catch (error) {
    console.log(error.message);
  }

  res.send("Done")
};


const userHomepage = (req, res) => {
  const data = req.params.id.username;
  console.log(data);

  try{
    res.status(200).json({message: "userHomepage is working", response: data});
  
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
}


const branchDetails = async (req, res) => {
  const branchId = req.params.branchId;

  try {
    // Fetch branch details from Firestore
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
    // Fetch student details from Firestore
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

  

module.exports = { root, library, userHomepage, branchDetails, studentDetailsPage }
