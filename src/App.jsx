export default function App() {
  return (
    <MovieProvider>
      <NavBar />
      {/* FIX: Change 'clasName' to 'className' */}
      <div className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}
