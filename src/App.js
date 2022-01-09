import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import EasyContainer from './EasyContainer';
import NormalContainer from './NormalContainer';
import HardContainer from './HardContainer';
import Win from './Win';
import GameOver from './GameOver';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Menu />} exact path="/" />
        <Route element={<Menu />} exact path="/menu" />
        <Route element={<EasyContainer />} path="/easy" />
        <Route element={<NormalContainer />} path="/normal" />
        <Route element={<HardContainer />} path="/hard" />
        <Route element={<Win />} path="/win" />
        <Route element={<GameOver />} path="/gameOver" />
      </Routes>
    </div>
  );
}

export default App;
