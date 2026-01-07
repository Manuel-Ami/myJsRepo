const redis = require("../src/config/redis");

exports.getCache = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

exports.setCache = async (key, value, ttl = 300) => {
  await redis.set(key, JSON.stringify(value), {
    EX: ttl, 
  });
};

exports.delCache = async (key) => {
  await redis.del(key);
};
