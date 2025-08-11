
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appStyle = {
    backgroundColor: darkMode ? "#121212" : "#f5f5f5",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
  };

  const cardTextColor = {
    color: darkMode ? "#fff" : "#000",
  };

  return (
    <BrowserRouter>
      <div style={appStyle}>
        <div
          style={{
            position: "fixed",
            top: "15px",
            right: "20px",
            zIndex: 999,
          }}
        >
          <button
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              border: "none",
              backgroundColor: darkMode ? "#f1c40f" : "#2c3e50",
              color: darkMode ? "#000" : "#fff",
              cursor: "pointer",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>

      
        <Routes>
          <Route path="/" element={<EmployeesList textStyle={cardTextColor} />} />
          <Route path="/add" element={<AddEmployee textStyle={cardTextColor} />} />
          <Route path="/employees/edit/:id" element={<AddEmployee textStyle={cardTextColor} />} />
          <Route path="*" element={<NotFound textStyle={cardTextColor} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
