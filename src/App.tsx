import AppHeader from './app/components/Header/AppHeader';
import NotFound from './app/components/NotFound';
import { HomePage } from './app/pages/HomePage';
import { SharePage } from './app/pages/SharePage';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, RouteProps, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { authorized } from './app/store/authSlice';
const UserRoute = ({ children, ...props }: RouteProps) => {
  const isAuthorized = useSelector(authorized);
  return <Route {...props}>{isAuthorized ? children : 'You are not allowed to view this page'}</Route>;
};

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Switch>
        <Route>
          <div className="lg:container mx-auto">
            <ToastContainer />
            <div>
              <AppHeader />
            </div>
            <div className="flex justify-center">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <UserRoute>
                  <Route exact path="/share">
                    <SharePage />
                  </Route>
                </UserRoute>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
