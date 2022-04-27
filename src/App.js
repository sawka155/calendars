import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { Auths } from "./components/context/auths";
import Calendar from "./components/pages/Calendar";
import Login from "./components/pages/Login";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <AppRouter />
  )
}

export default App