import React, {useEffect} from 'react';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Tables from "./components/Tables";
import Finland from "./components/Finland";
import Estonia from "./components/Estonia";
import Arsenal from "./components/Arsenal";
import ManU from "./components/ManU";
// import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0,0);
    document.documentElement.scrollTop=0;
  })
return (
  <>
  <Header />
  <Navigation />
  <Tables /> 
  {/* <Sports />
  <Finland />
  <Estonia />
  <Arsenal />
  <ManU />
  <Button />  */}
  </>
);
}
export default App;
