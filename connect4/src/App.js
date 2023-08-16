import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import RecordList from "./components/recordList";
import Game from "./components/game";
import Create from './components/create';

export default function Board() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Game />}/>
        <Route path="/highscore" element={<RecordList/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </>
  );
}
