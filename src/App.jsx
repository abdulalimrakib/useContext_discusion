// import { Route, Routes } from "react-router-dom";
// import ErrorPage from "./components/ErrorPage";

import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";



function App() {
  return (
    <UserContextProvider>
      {/* <Routes>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes> */}
      <h1>prectice for context API</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
