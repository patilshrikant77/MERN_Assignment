import React, { useState } from "react";
import Header from "../components/Header";
import SongsForm from "../components/SongsForm";
import SongsTable from "../components/SongsTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../actions/songsActions";

const Songs = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useState(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Header userInfo={userInfo} />
      <SongsForm
        open={open}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <SongsTable
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        setCurrentId={setCurrentId}
      />
    </div>
  );
};

export default Songs;
