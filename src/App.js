import './App.scss';
import { Route } from 'react-router';
import { Menu } from './Menu';
import EasyContainer from './EasyContainer';
import NormalContainer from './NormalContainer';
import HardContainer from './HardContainer';
import Win from './Win';
import GameOver from './GameOver';

function App() {
  return (
    <div className="App">
      <Route render={() => <Menu />} exact path={["/", "/menu"]} />
      <Route render={() => <EasyContainer />} path="/easy" />
      <Route render={() => <NormalContainer />} path="/normal" />
      <Route render={() => <HardContainer />} path="/hard" />
      <Route render={() => <Win />} path="/win" />
      <Route render={() => <GameOver />} path="/gameOver" />
    </div>
  );
}

export default App;
