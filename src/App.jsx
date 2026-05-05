import MovieCard from "./components/MovieCard"
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import "./css/App.css"
import Favorites from "./pages/Favorites"
import {MovieProvider} from "./contexts/MovieContext"
import NavBar from "./components/NavBar"
export default function App() {
  return (
    <MovieProvider>
      <NavBar />
      {/* FIX: Change 'clasName' to 'className' */}
      <main className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

