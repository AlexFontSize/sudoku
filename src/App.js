import './App.scss';
import { Route } from 'react-router';
import { Menu } from './Menu';
import EasyContainer from './EasyContainer';

function App() {
  return (
    <div className="App">
      <Route render={() => <Menu />} exact path={["/", "/menu"]} />
      <Route render={() => <EasyContainer />} path="/easy" />
    </div>
  );
}

export default App;
