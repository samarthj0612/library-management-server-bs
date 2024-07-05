const { firestore } = require("../firebase/config");

const library = (req, res) => {
  res.status(200).json({ message: "Library route connected" })
}

const addLibrary = async (req, res) => {
  const data = req.body;

  try {
    const result = await firestore.collection('libraries').doc().set(data);

    res.status(200).json({ message: "Library successfully added", response: result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
}

module.exports = { library, addLibrary }
