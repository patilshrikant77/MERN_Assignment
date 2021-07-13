import {
  SONG_CREATE,
  SONG_DELETE,
  SONG_DELETE_ALL,
  SONG_FETCH_ALL,
  SONG_UPDATE,
} from "../constants/songContsant";

export const songsReducer = (songs = [], action) => {
  switch (action.type) {
    case SONG_FETCH_ALL:
      return action.payload;
    case SONG_CREATE:
      //console.log("SONG_CREATE", songs);
      return [...songs, action.payload];

    case SONG_UPDATE:
      return songs.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );

    case SONG_DELETE:
      return songs.filter((c) => c._id !== action.payload);

    case SONG_DELETE_ALL:
      return songs.filter(function (c) {
        return action.payload.indexOf(c._id) === -1;
      });

    default:
      return songs;
  }
};

/**
 *
 *
 *
 *
 */
