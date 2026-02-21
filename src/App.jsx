import MovieCard from "./components/MovieCard"
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import "./css/App.css"
import Favorites from "./pages/Favorites"
import {MovieProvider} from "./contexts/MovieContext"
import NavBar from "./components/NavBar"
export default function App(){
  return(
    <MovieProvider>
      <NavBar></NavBar>
      <main clasName = "main-content">
        <Routes>
          <Route path = "/" element = {<Home></Home>}></Route>
          <Route path = "/home" element = {<Home></Home>}></Route>
          <Route path = "/favorites" element = {<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </MovieProvider>
  )
}
