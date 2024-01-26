import { Footer, Header } from "../Components/Layout";
import { Home } from "../Pages";
import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";

function App() {
  return (
    <div className="text-success">
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
