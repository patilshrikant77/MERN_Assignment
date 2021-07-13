import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Song from "../model/songModel.js";

const createSongs = asyncHandler(async (req, res) => {
  const {
    id,
    title,
    danceability,
    energy,
    key,
    loudness,
    mode,
    acousticness,
    instrumentalness,
    liveness,
    valence,
    tempo,
    duration_ms,
    time_signature,
    num_bars,
    num_sections,
    num_segments,
    class: _class,
  } = req.body;

  //console.log(req.body);

  const newSongs = new Song({
    user: req.user._id,
    id,
    title,
    danceability,
    key,
    loudness,
    energy,
    mode,
    acousticness,
    instrumentalness,
    liveness,
    valence,
    tempo,
    duration_ms,
    time_signature,
    num_bars,
    num_sections,
    num_segments,
    class: _class,
  });

  //console.log(newSongs);

  try {
    await newSongs.save();
    res.status(201).json(newSongs);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

const getSongs = asyncHandler(async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

const deleteSongs = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Incorrect ID");
  }
  await Song.findByIdAndRemove(id);
  res.json({ message: "song deleted successfully." });
});

const deleteMultiSongs = asyncHandler(async (req, res) => {
  if (req.body.length > 0) {
    await Song.deleteMany({
      _id: {
        $in: req.body,
      },
    });
    res.json({ message: "songs are deleted successfully." });
  } else {
    res.status(400).json({ message: "No Ids found" });
  }
});

const updateSongs = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  //console.log(req);
  const {
    id,
    title,
    danceability,
    key,
    loudness,
    energy,
    mode,
    acousticness,
    instrumentalness,
    liveness,
    valence,
    tempo,
    duration_ms,
    time_signature,
    num_bars,
    num_sections,
    num_segments,
    class: _class,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No songs with id: ${_id}`);

  const existSongs = await Song.findById(_id);
  existSongs.id = id || existContact.id;
  existSongs.title = title || existContact.title;
  existSongs.danceability = danceability || existContact.danceability;
  existSongs.energy = energy || existContact.energy;
  existSongs.mode = mode || existContact.mode;
  existSongs.acousticness = acousticness || existContact.acousticness;
  existSongs.tempo = tempo || existContact.tempo;
  existSongs.duration_ms = duration_ms || existContact.duration_ms;
  existSongs.num_sections = num_sections || existContact.num_sections;
  existSongs.key = key || existContact.key;
  existSongs.duration_ms = duration_ms || existContact.duration_ms;
  existSongs.loudness = loudness || existContact.loudness;
  existSongs.num_segments = num_segments || existContact.num_segments;
  existSongs.instrumentalness =
    instrumentalness || existContact.instrumentalness;
  existSongs.time_signature = time_signature || existContact.time_signature;
  existSongs.liveness = liveness || existContact.liveness;
  existSongs.valence = valence || existContact.valence;
  existSongs.num_bars = num_bars || existContact.num_bars;
  existSongs.class = _class || existContact.class;

  const updatedSongs = await existSongs.save();

  res.json(updatedSongs);
});

export { createSongs, getSongs, deleteSongs, deleteMultiSongs, updateSongs };
