import React, {useState} from 'react';

import './App.css';

import Layout from './Layout';

import Home from './pages/Home/home';

import ShowContext from './Layout/Context';

function App() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="App">
      <ShowContext.Provider value={[show, setShow]}>
        <Layout>
          <Home />
        </Layout>
      </ShowContext.Provider>
    </div>
  );
}

export default App;
