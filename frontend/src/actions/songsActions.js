import axios from "axios";

import {
  SONG_CREATE,
  SONG_UPDATE,
  SONG_DELETE,
  SONG_DELETE_ALL,
  SONG_FETCH_ALL,
  JSONDATA_FETCH_ALL,
} from "../constants/songContsant";

export const createSong = (form) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/songs", form, config);
    dispatch({ type: SONG_CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/songs", config);
    dispatch({ type: SONG_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchJsonData = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("playlist.json");
    dispatch({ type: JSONDATA_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const importJsonData = () => async (dispatch, getState) => {
  try {
    //console.log(getState());
    const { jData: input } = getState();

    //console.log("import json", input);
    const { id } = input;
    //console.log(id);
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
  } catch (error) {
    console.log(error);
  }
};

export const deleteSong = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/songs/${id}`, config);
    dispatch({ type: SONG_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSongs = (idArr) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`/songs/delete`, idArr, config);
    dispatch({ type: SONG_DELETE_ALL, payload: idArr });
  } catch (error) {
    console.log(error);
  }
};

export const updateSong = (id, form) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/songs/${id}`, form, config);
    console.log(data);
    dispatch({ type: SONG_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
