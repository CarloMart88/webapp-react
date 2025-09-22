import Default_layout from "../layouts/Default_layout";
import HomePage from "../pages/homePage";
import DetailMovie from "../pages/DetailMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default_layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/api/movies/:id" element={<DetailMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
