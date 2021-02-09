
import './App.css';
import React from "react";
import Nav from "./components/Navbar";



import AuthForm from './AuthForm'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav>

        </Nav>
        <p>
          ATLANTA ANIMAL ACTIVISTS
        </p>
        <AuthForm/>
       
      </header>
    </div>
  );
}

export default App;
