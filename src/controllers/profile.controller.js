const getProfile = (_req, res) => {
  res.status(200).json({
    success: true,
    message: "I am Private Profile Route.",
  });
};
module.exports = getProfile;
