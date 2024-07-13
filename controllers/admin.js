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

module.exports = { admin , notification, adminStudentRegistration}
