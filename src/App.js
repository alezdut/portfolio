import './App.css';

import Profile from './components/profile/profile';
import NavBar from "./components/navBar/Navbar"
import Head from "./components/head/Head"
import MainCard from "./components/mainCard/MainCard"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main__app">
        <div className="container__app">
          <Profile />
          <div className="container2__app">
            <Head />
            <MainCard />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
