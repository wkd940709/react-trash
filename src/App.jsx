import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import './styles/tailwind.css';  // Tailwind CSS 파일을 임포트
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        {/* <Route path="/gallery" element={<DetailCardPage />}>
          <Route path=":cardId" element={<DetailCard />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
