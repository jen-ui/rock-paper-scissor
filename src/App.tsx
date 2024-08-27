import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StartPage } from "./gamePage/startPage"
import { GamePage } from "./gamePage/ongoingGame"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/ongoingGame" element={<GamePage />} />
        
      </Routes>
    </BrowserRouter>
  );
  
}

export default App
