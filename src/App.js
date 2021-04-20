import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavComponent from "./components/NavComponent";
import RoomsList from "./components/RoomsList";

function App() {
  return (
    <Container fluid>
      <NavComponent />
      <RoomsList />
    </Container>
  );
}

export default App;
