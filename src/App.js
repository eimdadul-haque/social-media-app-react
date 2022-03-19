import './App.css';
import HomeContainer from './component/homeContainer/HomeContainer';
import Navbar from './component/navbar/Navbar';
import Profile from './page/profile/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/'  element={< HomeContainer />} />
        <Route exact path='profile' element={< Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
