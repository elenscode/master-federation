import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function Vue() {
  return <h2>Vue Page</h2>;
}

function ReactPage() {
  return <h2>React Page</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vue">Vue</Link>
            </li>
            <li>
              <Link to="/react">React</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vue" element={<Vue />} />
          <Route path="/react" element={<ReactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
