import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Home from "./Pages/Home";

import "./App.css";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={<Login />}
//         />
//         <Route
//           path="signup"
//           element={<SignUp />}
//         />
//       </Routes>
//     </>
//   );
// }

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/login"
        element={<Login />}></Route>
      <Route
        path="/signup"
        element={<SignUp />}></Route>
      <Route
        path="/home"
        element={<Home />}></Route>
    </Route>
  )
);

// export default router;
