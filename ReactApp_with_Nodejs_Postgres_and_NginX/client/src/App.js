
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import OtherPage from './OtherPage.js';
import MainComponent from './MainComponent.js';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Fragment>
        <header className='header'>
          <div>This is a multicontainer app</div>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/otherpage">Other Page</Link>
          <br/>
          <br/>
        </header>
        <br/>
        <div className='main'>
          <Route exact path="/" component={MainComponent} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </Fragment> 
    </Router>
  );
}

export default App;
