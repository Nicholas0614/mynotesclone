import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage.";
import AddNewPage from "./pages/AddNewPage";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddNewPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/edit" element={<EditNote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
