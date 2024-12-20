const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 requests per `window`
  message: "Too many requests, please try again later."
});

module.exports = rateLimiter;