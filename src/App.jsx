import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./shared/components/Dashboard";
import Home from "./features/home/Home";
import Profile from "./features/profile/Profile";
import Boards from "./features/boards/Boards";
import Settings from "./features/settings/Settings";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/boards" element={<Boards />} />
          <Route exact path="/settings" element={<Settings />} />
        </Route>
        <Route
                    path="*"
                    element={
                        <div className="px-8 py-5">
                            <h1>Not found.</h1>
                        </div>
                    }
                />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
