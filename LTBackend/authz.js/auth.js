//Middleware to authenticate Admin and Training Heads
const auth = (req, res, next) => {
  if (req.body.role === 'Admin' || req.params.role === 'Admin' || req.body.role === 'Training Head' || req.params.role === 'Training Head') {
    return next(); // Continue to the next middleware or route handler
  } else {
    return res.json({ message: "Unauthorized! Admin or Training Head access only." });

  }
}

module.exports = auth;
