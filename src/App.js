import './App.css';
import HomeContainer from './component/homeContainer/HomeContainer';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <div style={{height:"85vh"}}>
      <Navbar />
      <HomeContainer />
    </div>
  );
}

export default App;
