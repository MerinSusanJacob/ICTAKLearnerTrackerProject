const auth = (req, res, next) => {
  if (req.body.role != 'placementofficer' || req.params.role != 'placementofficer') {
    return next(); // Continue to the next middleware or route handler
  } else {
    return res.json({ message: "Unauthorized! Admin or Training Head access only." });

  }
}


module.exports = auth;
