import { Route, Switch } from 'react-router';
import CardContainer from '../CardContainer/CardContainer';
import s from './App.module.css';

function App() {
  return (
    <div className={s.appContainer}>
      <Switch>
        <Route path="/">
          <CardContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
