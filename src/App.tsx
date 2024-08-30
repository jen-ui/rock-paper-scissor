import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GamePage } from "./gamePage/game"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePage />} />
        {/* <Route path="/ongoingGame" element={<GamePage />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
  
}

export default App
