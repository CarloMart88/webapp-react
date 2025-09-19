import Default_layout from "../layouts/Default_layout";
import HomePage from "../pages/homePage";
import DetailMovie from "../pages/detailMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default_layout />}>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
