const { auth, database } = require('../firebase/config');

const authRoute = (req, res) => {
  res.status(200).json({ message: "Auth route connected" })
}

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Mandatory params missing" });
  }

  try {
    const userRecord = await auth.getUserByEmail(email);

    console.log('Successfully logged in user:', userRecord.uid);

    // Fetch user data from the database
    const userSnapshot = await database.ref(`users/${userRecord.uid}`).once('value');
    const userData = userSnapshot.val();

    if (userData) {
      return res.status(200).json({ message: "Successfully logged in", data: userData });
    } else {
      return res.status(404).json({ message: "User data not found" });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(401).json({ message: "Invalid credentials", error });
  }
};

const registerHandler = async (req, res) => {
  const data = req.body;

  if (!data || !data.email || !data.password) {
    return res.status(400).json({ message: "Mandatory params missing" });
  }

  try {
    const userData = await auth.createUser(data);
    console.log('Successfully created new user:', userData.uid);

    await database.ref(`users/${userData.uid}`).set(data);
    console.log('User data saved successfully');
    return res.status(201).json({ message: "Successfully registered", data });
  } catch (error) {
    console.error('Error creating new user:', error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};


module.exports = { authRoute, loginHandler, registerHandler };
