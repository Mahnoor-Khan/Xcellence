import './App.css';
import Navbar from './Components/Navbar';
import HomeJourney from './Components/HomeJourney';
import Experience from './Components/Expirence';
import HomeOwners from './Components/HomeOwners';
import Agents from './Components/Agents';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeJourney />
      <Experience />
      <HomeOwners />
      <Agents />
      <Footer />
    </div>
  );
}

export default App;
