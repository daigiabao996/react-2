import React from "react";
import Navbar from "./components/NavBar/Navbar";
import PrivateWrapper from "./components/wrapper/PrivateWrapper";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import NewPoll from "./pages/NewPoll";
import Poll from "./pages/Poll";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { receiveInitialData } from "./actions/initialData";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveInitialData());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/add" element={<NewPoll />} />
          <Route path="/questions/:id" element={<Poll />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
