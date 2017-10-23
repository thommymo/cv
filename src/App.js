import React, { Component } from 'react';
import CurriculumVitae from './components/curriculum-vitae'
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>This is my Title</title>
        </Helmet>
        <CurriculumVitae />
      </div>
    );
  }
}

export default App;
