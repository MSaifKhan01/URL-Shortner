const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers.authorization || null;
  console.log("Token:", token);

  if (token) {
    jwt.verify(token, "jammi", (err, decoded) => {
      if (err) {
        console.error("Error verifying token:", err);
        res.status(401).send({ msg: "Token verification failed" });
      } else {
        console.log("Decoded:", decoded);
        req.UserID = decoded.UserID;
        next();
      }
    });
  } else {
    res.status(401).send({ msg: "Login First" });
  }
};

module.exports = auth;
