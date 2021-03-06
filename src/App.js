import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import MyTable from "./pages/Table";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login' />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/table' element={<MyTable />} />
    </Routes>
  );
}

export default App;
