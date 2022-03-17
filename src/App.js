import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import StarshipPage from './pages/StarshipDetails/StarshipDetails';
import Starship from './components/Starship/Starship';


function App() {
  const [starships, setStarships] = useState([

  ])

  return (
    <>
    <div className="navBar">
      STAR WARS STARSHIPS
    </div>
      <Routes>
      <Route path ="/" element={<Starship />}/>
      <Route path="/starship-detail" element={<StarshipPage />}/>
      </Routes>
    </>
  );
}

export default App;
