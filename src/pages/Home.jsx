import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import "../css/Home.css"
import Footer from "../components/Footer"
import {searchMovies, getPopularMovies} from "../services/api"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...")
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])
    
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                    {/* CONDITIONAL RENDERING: Show Hero only if movies list is empty */}
                    {movies.length === 0 ? (
                        <div className="hero-section">
                            <div className="hero-content">
                                <h1>Unlimited Movies & More</h1>
                                <p>Ready to watch? Press <strong>Home</strong> to explore our collection.</p>
                                <button className="refresh-btn" onClick={() => window.location.reload()}>
                                    Load Movies
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Show Grid only if we have movies */
                        <div className="movies-grid">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                        </div>
                    )}
                </>
            )}
            
            <Footer />
        </div>
    )
}

export default Home
