const root = (req, res) => {
  res.status(200).json({ message: "Server is successfully connected" })
}

module.exports = { root }
