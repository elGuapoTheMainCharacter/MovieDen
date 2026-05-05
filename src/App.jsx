import MovieCard from "./components/MovieCard"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import "./css/App.css"
import Favorites from "./pages/Favorites"
import {MovieProvider} from "./contexts/MovieContext"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content"> {/* Fixed typo: className */}
        
        {/* Beautiful Welcome Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Unlimited Movies & More</h1>
            <p>Ready to watch? Press <strong>Home</strong> to explore our collection.</p>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
