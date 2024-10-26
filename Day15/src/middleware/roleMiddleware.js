// middlewares/roleMiddleware.js
const authorizeRole = (roles) => {
  return (req, res, next) => {
    const userRoles = req.user.roles;
    if (roles.some((role) => userRoles.includes(role))) return next();
    return res.status(403).send('Forbidden');
  };
};

module.exports = { authorizeRole };
