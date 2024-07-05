const auth = (req, res) => {
  res.status(200).json({ message: "Auth route connected" })
}

module.exports = { auth };
