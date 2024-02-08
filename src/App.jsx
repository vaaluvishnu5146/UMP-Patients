import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Appointments from "./Pages/Appointments/Appointments";
import AppLayout from "./Layout/AppLayout";

function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route Component={Login} path="/signin" />
          <Route Component={Signup} path="/signup" />
          <Route Component={Appointments} path="/" />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
