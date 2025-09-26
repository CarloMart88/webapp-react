import Default_layout from "../layouts/Default_layout";
import HomePage from "../pages/homePage";
import DetailMovie from "../pages/DetailMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import GlobalContext from "./contexts/globalContext";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Default_layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/api/movies/:id" element={<DetailMovie />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
