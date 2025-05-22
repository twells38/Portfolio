
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
