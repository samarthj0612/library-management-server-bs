const library = (req, res) => {
  res.status(200).json({ message: "Library route connected" })
}

module.exports = { library }
