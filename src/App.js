import { Toaster } from 'react-hot-toast';
import './App.css';
import Container from 'Components/Container';
import AppBar from 'Components/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom';
import RegisterView from 'Views/RegisterView/RegisterView';
import LoginView from 'Views/LoginView/LoginView';
import ContactsView from 'Views/ContactsView/ContactsView';

function App() {
  return (
    <Container>
      <AppBar />
      {/* <Switch>
        <PublicRoute exact path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute exact path="/login" redirectTo="/todos" restricted>
          <LoginView />
        </PublicRoute>
        <PrivateRoute path="/todos" redirectTo="/login">
          <TodosView />
        </PrivateRoute>
        <PrivateRoute path="/upload" redirectTo="/login">
          <UploadView />
        </PrivateRoute>
      </Switch> */}
      <Switch>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
      </Switch>
      <Toaster />
    </Container>
  );
}

export default App;
