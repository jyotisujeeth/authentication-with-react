import { Switch, Route, Redirect  } from 'react-router-dom';
import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContextProvider from "./Store/Auth-context";

function App() {
  const AuthCtx = useContext(AuthContext); 
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!AuthCtx.isloggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        {AuthCtx.isloggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path='*'>
          <Redirect to='/'>
          </Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
