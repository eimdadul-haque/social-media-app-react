import './App.css';
import HomeContainer from './component/homeContainer/HomeContainer';
import Navbar from './component/navbar/Navbar';
import Profile from './page/profile/Profile';
import Log_In from './page/account/Log_In';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dropdown_menu from './component/dropdown-menu/Dropdown_menu';
import ContextProvider from "./help/Context";
import Sign_Up from './page/account/Sign_Up';
import Post from './page/post/Post';
import { Provider } from 'react-redux';
import { Store } from "./redux/store/Store";
import MassagePage from "./page/massage-page/MassagePage";
import Pop_Up_Message from './component/pop-up-message/Pop_Up_Message';
import { LogLevel, HubConnectionBuilder } from "@microsoft/signalr";

function App() {

  return (
    <Provider store={Store}>
      <ContextProvider>
        <div className='app'>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={< HomeContainer />} />
              <Route exact path='/profile' element={< Profile />} />
              <Route exact path='/login' element={< Log_In />} />
              <Route exact path='/signup' element={<Sign_Up />} />
              <Route exact path='/post/:id' element={<Post />} />
              <Route exact path='/chat' element={<MassagePage />} />
            </Routes>
            <Dropdown_menu />
          </Router>
        </div>
      </ContextProvider >
    </Provider>
  );
}

export default App;
