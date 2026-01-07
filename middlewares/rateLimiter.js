const redis = require("../src/config/redis");

module.exports = (options) => {
  const { windowSeconds, maxRequests, keyPrefix } = options;

  return async (req, res, next) => {
    try {
      const ip = req.ip;
      const key = `${keyPrefix}:${ip}`;

      
      const current = await redis.incr(key);

      
      if (current === 1) {
        await redis.expire(key, windowSeconds);
      }

      if (current > maxRequests) {
        return res.status(429).json({
          error: "Too many requests. Please try again later.",
        });
      }

      next();
    } catch (err) {
      
      console.error("Rate limiter error:", err);
      next();
    }
  };
};
