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
