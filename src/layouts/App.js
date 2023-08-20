import React from 'react';
import '../styles/App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import Page from './Page';
import Searcher from './Searcher';

function App() {
  return (
    <Router>
    <div className="App">
      <p>What happened on that day in the past?</p>
      <main>
        <aside>
          { <Nav />}
        </aside>
        <section>
          { <Page />}
        </section>
      </main>
      <footer>
        { <Footer />}
      </footer>
    </div>
    </Router>
  );
}
export default App;
