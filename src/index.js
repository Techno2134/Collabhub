import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';        // Tailwind base styles (if you’re using Tailwind)
import './App.css';          // Your custom global styles
import './styles/main.css';  // Your animations and extras
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import './styles/main.css';

// App.js
import Home from './pages/Home';

function App() {
  return <Home />;
}

export default App;
