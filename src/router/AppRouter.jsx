//Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Screens
import { LadingScreen } from "../components/screen/LadingScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
