import Navbar from './components/Navbar/Navbar'
import './App.css';
import Profile from './components/HeroSection/Profile';
import Softskills from './components/soft skills/Softskills';
import Competence from './components/competence/Competence';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Profile></Profile>
      <Softskills></Softskills>
      <Competence></Competence>
    </div>
  );
}

export default App;
