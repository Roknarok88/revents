import React, { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../Features/event/EventDashboard/EventDashboard";
import NavBar from "../../Features/nav/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
