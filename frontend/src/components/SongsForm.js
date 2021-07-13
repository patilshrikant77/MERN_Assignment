import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import FileBase from "react-file-base64";
import {
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from "@material-ui/core";

// import { makeStyles } from "@material-ui/core/styles";
import { createSong, updateSong } from "../actions/songsActions";

// const useStyles = makeStyles((theme) => ({
//   file: {
//     marginTop: "15px",
//   },
// }));

const SongsForm = ({ currentId, setCurrentId, open, handleClose }) => {
  const dispatch = useDispatch();
  // const classes = useStyles();

  const initialState = {
    id: "",
    title: "",
    danceability: "",
    energy: "",
    mode: "",
    acousticness: "",
    tempo: "",
    Duration_ms: "",
    Num_sections: "",
    Num_segments: "",
  };

  const [songData, setSongData] = useState(initialState);

  const songDetails = useSelector((state) =>
    currentId ? state.songs.find((c) => c._id === currentId) : null
  );

  useEffect(() => {
    if (songDetails) setSongData(songDetails);
  }, [songDetails]);

  const clearData = () => {
    setSongData(initialState);
    setCurrentId(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    if (currentId === 0) dispatch(createSong(songData));
    else dispatch(updateSong(currentId, songData));
    clearData();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Song Playlist Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`To ${
            currentId === 0 ? "add" : "update"
          } your contact details from here`}
        </DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="id"
          label="Id"
          type="text"
          fullWidth
          value={songData.id}
          onChange={(e) => setSongData({ ...songData, id: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="title"
          type="text"
          fullWidth
          value={songData.title}
          onChange={(e) => setSongData({ ...songData, title: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="danceability"
          label="Danceability"
          type="text"
          fullWidth
          value={songData.danceability}
          onChange={(e) =>
            setSongData({ ...songData, danceability: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="energy"
          label="Energy"
          type="text"
          fullWidth
          value={songData.energy}
          onChange={(e) => setSongData({ ...songData, energy: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="mode"
          label="Mode"
          type="text"
          fullWidth
          value={songData.mode}
          onChange={(e) => setSongData({ ...songData, mode: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="acousticness"
          label="Acousticness"
          type="text"
          fullWidth
          value={songData.acousticness}
          onChange={(e) =>
            setSongData({ ...songData, acousticness: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="tempo"
          label="Tempo"
          type="text"
          fullWidth
          value={songData.tempo}
          onChange={(e) => setSongData({ ...songData, tempo: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="Duration_ms"
          label="Duration_ms"
          type="text"
          fullWidth
          value={songData.duration_ms}
          onChange={(e) =>
            setSongData({ ...songData, duration_ms: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="Num_sections"
          label="Num_sections"
          type="text"
          fullWidth
          value={songData.num_sections}
          onChange={(e) =>
            setSongData({ ...songData, num_sections: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="Num_segments"
          label="Num_segments"
          type="text"
          fullWidth
          value={songData.num_segments}
          onChange={(e) =>
            setSongData({ ...songData, num_segments: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="Num_bars"
          label="Num_bars"
          type="text"
          fullWidth
          value={songData.num_bars}
          onChange={(e) =>
            setSongData({ ...songData, num_bars: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="class"
          label="Class"
          type="text"
          fullWidth
          value={songData.class}
          onChange={(e) => setSongData({ ...songData, class: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="valence"
          label="Valence"
          type="text"
          fullWidth
          value={songData.valence}
          onChange={(e) =>
            setSongData({ ...songData, valence: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="liveness"
          label="Liveness"
          type="text"
          fullWidth
          value={songData.liveness}
          onChange={(e) =>
            setSongData({ ...songData, liveness: e.target.value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          id="key"
          label="Key"
          type="text"
          fullWidth
          value={songData.key}
          onChange={(e) => setSongData({ ...songData, key: e.target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="loudness"
          label="loudness"
          type="text"
          fullWidth
          value={songData.loudness}
          onChange={(e) =>
            setSongData({ ...songData, loudness: e.target.value })
          }
        />

        <TextField
          autoFocus
          margin="dense"
          id="instrumentalness"
          label="Instrumentalness"
          type="text"
          fullWidth
          value={songData.instrumentalness}
          onChange={(e) =>
            setSongData({ ...songData, instrumentalness: e.target.value })
          }
        />

        <TextField
          autoFocus
          margin="dense"
          id="time_signature"
          label="Time_signature"
          type="text"
          fullWidth
          value={songData.time_signature}
          onChange={(e) =>
            setSongData({ ...songData, time_signature: e.target.value })
          }
        />

        {/* <div className={classes.file}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setSongData({ ...songData, selectedImage: base64 })
            }
          />
        </div> */}
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          {`${currentId === 0 ? "Add" : "Update"} Song`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SongsForm;
