import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
        <p></p>
      </Layout>
      </div>
    );
  }
}

export default App;
