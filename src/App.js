import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from './history';
import "./App.css";
import NavComponent from "./components/NavComponent";
import RoomsList from "./components/RoomsList";
import SignIn from "./components/SignIn";
import SignInPage from "./pages/signin";


function App() {
  return (
    <Container fluid>
      <BrowserRouter history={history}>
        <NavComponent />

        <Switch>
          <Route exact path="/">
            <RoomsList />
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
