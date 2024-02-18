const homePage = (_req, res) => {
  res.status(200).send(`<h1>Welcome to the Home Page.</h1>`);
};
const health = (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Ok",
  });
};

module.exports = { homePage, health };
