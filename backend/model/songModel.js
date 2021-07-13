import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  id: String,
  title: String,
  danceability: "",
  energy: "",
  key: "",
  loudness: "",
  mode: "",
  acousticness: "",
  instrumentalness: "",
  liveness: "",
  valence: "",
  tempo: "",
  duration_ms: "",
  time_signature: "",
  num_bars: "",
  num_sections: "",
  num_segments: "",
  class: "",
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Song = mongoose.model("songsplaylist", songSchema);

export default Song;
