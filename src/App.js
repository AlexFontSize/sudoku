import logo from './logo.svg';
import './App.scss';
import { Route } from 'react-router';
import { Menu } from './Menu';
import { Easy } from './Easy';

function App() {
  return (
    <div className="App">
      <Route render={() => <Menu />} exact path={["/", "/menu"]} />
      <Route render={() => <Easy />} path="/easy" />
    </div>
  );
}

export default App;
