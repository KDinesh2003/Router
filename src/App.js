import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <div className="flex-container">
      <Link to="/page1">Go to Page 1</Link>
      <Link to="/page2">Go to Page 2</Link>
      <Link to="/page3">Go to Page 3</Link> {/* New link to Page 3 */}
    </div>
  </div>
);

const Page1 = () => (
  <div>
    <h1>My Profile:</h1>
    <h2>Dinesh</h2>
    <p></p>
    I'm pursuing Btech Program in Artifical Intelligence and Data Science.  
    <div className="flex-container">
    <Link to="/" className="back-link">Back to Home</Link>
    <Link to="/page2" className='back-ink:last-child'>Go to Page 2</Link>
    <Link to="/page3">Go to Page 3</Link>
      
    </div>
  </div>
);

const Page2 = () => (
  <div>
    <h1>Welcome to Page 2</h1>
    <h2>Interests:</h2>
    <p></p>
    <ul>
    <li>Technology and Gadgets</li>
    <li>Travel and Adventure</li> 
    <li>Health and Fitness</li> 
    <li>Football and Cricket</li> 
    </ul>
    <div className="flex-container">
      <Link to="/" className="back-link">Back to Home</Link>
      <Link to="/page1">Go to Page 1</Link>
      <Link to="/page3">Go to Page 3</Link> {/* New link to Page 3 */}
    </div>
  </div>
);

const Page3 = () => (
  <div>
    <h1>This is Page 3</h1>
    <h2>My Projects: </h2>
    <p></p>
    <div className="gif-container">
      <img src="page3-animation.jpg" alt="Page 3 GIF" />
    </div>
    <div className="flex-container">
      <Link to="/" className="back-link">Back to Home</Link>
      <Link to="/page1">Go to Page 1</Link>
      <Link to="/page2">Go to Page 2</Link>
    </div>
    
    
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} /> {/* New route for Page 3 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
