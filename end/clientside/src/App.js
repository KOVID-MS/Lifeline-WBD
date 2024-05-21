import HotelForm from "./components/user";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HotelForm />} />
        </Routes> 
      </Router>  
    </div>
  )  
}

export default App;
