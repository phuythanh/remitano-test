import AppHeader from './app/components/Header/AppHeader';
import NotFound from './app/components/NotFound';
import HomePage from './app/pages/HomePage';
import SharePage from './app/pages/SharePage';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Switch>
        <Route>
          <div className="container mx-auto">
            <div>
              <AppHeader />
            </div>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/share">
                <SharePage />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
