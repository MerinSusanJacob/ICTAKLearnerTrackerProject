//Middleware to authenticate Admin and Placement Officers
const authpl = (req, res, next) => {
  if (req.body.role === 'Admin' || req.params.role === 'Admin' || req.body.role === 'Placement Officer' || req.params.role === 'Placement Officer') {
    return next(); // Continue to the next middleware or route handler
  } else {
    return res.json({ message: "Unauthorized! Admin or Placement Officer access only." });

  }
}

module.exports = authpl;
