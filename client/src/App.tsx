import {Route, Routes} from "react-router-dom";

import YourInformationPage from "@/pages/index";
import ErrorPage from "@/pages/error.tsx";
import CancerStatusPage from "@/pages/cancer-status.tsx";
import LoginPage from "@/pages/login-page.tsx";
import SignupPage from "@/pages/signup-page.tsx";

function App() {
  return (
      <Routes>
        <Route element={<YourInformationPage/>} path="/"/>
        <Route element={<ErrorPage/>} path="/error"/>
        <Route element={<CancerStatusPage/>} path="/cancer-status"/>
        <Route element={<LoginPage/>} path="/login"/>
        <Route element={<SignupPage/>} path="/signup"/>
      </Routes>
  );
}

export default App;
