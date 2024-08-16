import React from 'react';
import GuessTheNumber from './GuessTheNumber'; // Import GuessTheNumber 
import './App.css'; // Import CSS file

// Define App component
const App: React.FC = () => {
  return (
    <div className="App">
      {/* Render the GuessTheNumber component */}
      <GuessTheNumber />
    </div>
  );
};

export default App;