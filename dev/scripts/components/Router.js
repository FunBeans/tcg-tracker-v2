import React from 'react';
import { Route, HashRouter, BrowserHistory } from 'react-router-dom';
import FranchisePage from './FranchisePage';
import SplashPage from './SplashPage';
import CardGridPage from './CardGridPage';
import CardDetailPage from './CardDetailPage';
import MyDeck from './MyDeck';

class Router extends React.Component {
  render() {
    return (
      <HashRouter history={BrowserHistory}>
        <div>
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/franchises" component={FranchisePage} />
          <Route exact path="/franchises/pokemon" component={CardGridPage} />
          <Route exact path="/franchises/pokemon/:cardId" component={CardDetailPage} />
          <Route exact path="/myDecks" component={MyDeck} />
        </div>
      </HashRouter>
    );
  }
}

export default Router;
