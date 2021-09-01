import { Toaster } from 'react-hot-toast';
import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import Container from 'Components/Container';
import AppBar from 'Components/AppBar/AppBar';
import operations from 'redux/Authorization/auth-operations';
import authSelectors from './redux/Authorization/auth-selectors';
import PrivateRoute from 'Components/Routes/PrivateRoute';
import PublicRoute from 'Components/Routes/PublicRoute';
import './App.css';

const RegisterView = lazy(() => import('Views/RegisterView'));
const LoginView = lazy(() => import('Views/LoginView'));
const ContactsView = lazy(() => import('Views/ContactsView/ContactsView'));

function App() {
  const isRefreshing = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing ? (
        <h1>Загружаем</h1>
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/">
                <Redirect from="/" to="/login" />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
      <Toaster />
    </Container>
  );
}

export default App;
