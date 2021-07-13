import React from "react";
import { Button, Card, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MaterialTable from "material-table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSong,
  deleteSongs,
  fetchJsonData,
  importJsonData,
} from "../actions/songsActions";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  card: {
    margin: "10px",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: "1.96rem",
  },
}));

const SongsTable = ({ handleClickOpen, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const songs = useSelector((state) => state.songs);
  //const jData = useSelector((state) => state.jData);

  // console.log(jData);
  //const songs = useSelector((state) => state.songs);

  const delSong = (id) => {
    dispatch(deleteSong(id));
  };

  const delSongs = (idArr) => {
    dispatch(deleteSongs(idArr));
  };

  /*const importData = (input) => {
    console.log(input);
    const { id } = input;
    console.log(id);
    const props = Object.keys(input);
    console.log(props);
    let resultToimport = Object.keys(id).map((key) => {
      let obj = {};
      props.forEach((prop) => {
        obj = {
          ...obj,
          [prop]: input[prop][key] ? input[prop][key] : "",
        };
      });
      return obj;
    });

    if (resultToimport.length > 0) {
      resultToimport.forEach((item) => {
        dispatch(createSong(item));
      });
    }
    
  };*/

  const handleClickImport = async (e) => {
    //console.log("import logic");
    await dispatch(fetchJsonData());
    dispatch(importJsonData());

    // setTimeout(() => {
    //   console.log("importData", jData);
    //   importData(jData);
    // }, 3000);

    // const jData = useSelector((state) => state.jData);
  };

  return (
    <>
      <div style={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add Song
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleClickImport}
        >
          Import Data To Normalize DB and Display
        </Button>
      </div>
      <Card>
        <MaterialTable
          title="Songs  Playlist"
          columns={[
            { title: "Index", render: (rowData) => rowData.tableData.id + 1 },

            { title: "Id", field: "id" },
            { title: "Title", field: "title" },
            { title: "Danceability", field: "danceability" },
            { title: "Energy", field: "energy" },
            { title: "key", field: "key" },
            { title: "loudness", field: "loudness" },
            { title: "Mode", field: "mode" },
            { title: "Acousticness", field: "acousticness" },
            { title: "Instrumentalness", field: "instrumentalness" },
            { title: "Valence", field: "valence" },
            { title: "Liveness", field: "liveness" },
            { title: "Tempo", field: "tempo" },
            { title: "Duration_ms", field: "duration_ms" },
            { title: "Num_sections", field: "num_sections" },
            { title: "Num_segments", field: "num_segments" },
            { title: "Class", field: "class" },
            { title: "Num_bars", field: "num_bars" },

            { title: "Time_signature", field: "time_signature" },
            {
              title: "Edit/Delete",
              field: "edit",
              render: (rowData) =>
                rowData && (
                  <>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        setCurrentId(rowData._id);
                        handleClickOpen();
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        delSong(rowData._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ),
            },
          ]}
          data={songs}
          actions={[
            {
              tooltip: "Remove All Selected Songs",
              icon: "delete",
              onClick: (evt, data) => delSongs(data.map((a) => a._id)),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            selection: true,
          }}
        />
      </Card>
    </>
  );
};

export default SongsTable;
