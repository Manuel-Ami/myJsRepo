const Album = require('../models/Album_model');
const Photo = require('../models/PhotoVault_model');
const catchAsync = require('../utils/catchAsync');
const supabase = require("../src/config/supabase");
const { getCache, setCache, delCache } = require("../utils/cache");

exports.createAlbum = catchAsync(async (req, res) => {
  const { title } = req.body;

  const { data, error } = await supabase
    .from("albums")
    .insert([{ title }])
    .select()
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }


  await delCache("albums:all");

  res.status(201).json(data);
});


exports.getAlbums = catchAsync(async (req, res) => {
  const cacheKey = "albums:all";

  
  const cached = await getCache(cacheKey);
  if (cached) {
    return res.json({ source: "cache", data: cached });
  }


  const { data, error } = await supabase.from("albums").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }


  await setCache(cacheKey, data, 600);

  res.json({ source: "db", data });
});
