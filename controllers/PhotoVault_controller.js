const PhotoVault = require("../models/PhotoVault_model");
const catchAsync = require('../utils/catchAsync');
const supabase = require("../src/config/supabase");
const { getCache, setCache, delCache } = require("../utils/cache");

exports.uploadPhoto = async (req, res) => {
  const { albumId } = req.body;
  const file = req.file;

  if (!albumId) {
    return res.status(400).json({ error: "Album ID is required" });
  }

  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  
  const fileName = `${albumId}/${Date.now()}-${file.originalname}`;

  const { error: uploadError } = await supabase.storage
    .from("photos")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (uploadError) {
    return res.status(400).json({ error: uploadError.message });
  }

  
  const { data: publicUrl } = supabase.storage
    .from("photos")
    .getPublicUrl(fileName);

  
  const { error: dbError } = await supabase
    .from("photos")
    .insert([
      {
        album_id: albumId,
        photo_url: publicUrl.publicUrl,
      },
    ]);

  if (dbError) {
    return res.status(400).json({ error: dbError.message });
  }

  res.status(201).json({
    message: "Photo uploaded",
    url: publicUrl.publicUrl,
  });
};



exports.getPhotosByAlbum = async (req, res) => {
  const { albumId } = req.params;
  const cacheKey = `album:${albumId}:photos`;


  const cached = await getCache(cacheKey);
  if (cached) {
    return res.json({ source: "cache", data: cached });
  }


  const { data, error } = await supabase
    .from("photos")
    .select("*")
    .eq("album_id", albumId);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  
  await setCache(cacheKey, data, 300);

  res.json({ source: "db", data });
};


exports.getPhotos = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const isAdmin = req.user.role === "admin";

  let query = {};

  if (!isAdmin) {
    query = {
      $or: [
        { visibility: "public" },
        { userId }
      ],
    };
  }


  const photos = await PhotoVault.find(query).lean();
  res.json({ photos });
});

exports.deletePhoto = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  const isAdmin = req.user.role === "admin";

  const photo = await PhotoVault.findById(id);
  if (!photo) return res.status(404).json({ message: "Photo not found" });

  
  if (!isAdmin && photo.userId.toString() !== userId) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  
  const { error } = await supabase.storage.from("UserImages").remove([photo.photoUrl]);
  if (error) {
    return res.status(500).json({ message: "Failed to delete file from storage", error });
  }

  
  await PhotoVault.deleteOne();

  res.status(204).send();
}); 
