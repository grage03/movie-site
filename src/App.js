import React    from 'react';

import Header   from './components/Header.js';
import Article  from './components/Article.js';
import Footer   from './components/Footer.js';

import './styles/body.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Article />
      <Footer />
    </React.Fragment>
  );
}

export default App;
