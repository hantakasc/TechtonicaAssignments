import React from 'react';
import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import MyNavBar from './components/Navbar'
//import BookItem from './components/BookItem'
import Books from './components/Books'
function App() {

  return (
    <div className="App">
      {/*<MyNavBar /> */}
      <h1>Book Manager!</h1>
      <Books />
      
    </div>
  )
}

export default App;
