import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import Signin from "./components/registration/Signin";
import Signup from "./components/registration/Signup";
import Home from "./pages/home/Home";
import TaskManager from "./pages/taskmanagement/TaskManager";
import Dashboard from "./pages/dashboard/Dashboard";
import RequireAuth from "./utils/RequireAuth";
import "./styles/main.scss";
import "./App.css";
function App() {
  const auth = useSelector((state) => state.auth);

  const authenticatedRoutes = useMemo(
    () => (
      <>
        <Route
          path="/taskmanager"
          element={
            <RequireAuth>
              <TaskManager />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </>
    ),
    []
  );

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={!auth.currentUser ? <Signin /> : <Dashboard />}
          />
          <Route
            path="/signup"
            element={!auth.currentUser ? <Signup /> : <Dashboard />}
          />
          {authenticatedRoutes}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
