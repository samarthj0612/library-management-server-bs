const admin = (req, res) => {
  res.status(200).json({ message: "Admin route connected" })
}

module.exports = { admin }
