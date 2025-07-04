import { Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Lost from "./Lost";
import Page404 from "./Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/lost" element={<Lost />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
