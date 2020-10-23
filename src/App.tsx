import React from 'react';

import './App.css';

import Layout from './Layout';

import Home from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
