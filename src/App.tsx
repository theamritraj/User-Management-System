import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserManagement from "./pages/userManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;