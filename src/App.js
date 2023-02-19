import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewPerson from "./components/AddNewPerson";
import Home from "./components/Home";
import RetrieveInfo from "./components/RetrieveInfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<AddNewPerson />} />
          <Route path="/retriev" element={<RetrieveInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
