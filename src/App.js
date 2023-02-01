import React from 'react';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Tables from "./components/Tables";
import Finland from "./components/Finland";
import Estonia from "./components/Estonia";
import Arsenal from "./components/Arsenal";
import ManU from "./components/ManU";
// import Button from "./components/Button";
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img src="BORBY 1.png" className="logo-borby" alt="logo" />
//         <h4>SportsBall Lounge</h4>
//       </header>
//       <body>
//         <div class="topnav">
//           <a href="#sports">Sports</a>
//           <a href="#tables">Tables</a>
//           <a href="#finland">Finland NTs</a>
//           <a href="#estonia">Estonia NTs</a>
//           <a href="#arsenal">Arsenal</a>
//           <a href="#manu">ManU</a>
//         </div>
//         <p>
//           Welcome to SportsBall Lounge!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Reäct
//         </a>
//       </body>
//     </div>
//   );
// }
function App() {
return (
  <>
  <Header />
  <Navigation />
  
  {/* <Tables /> 
  <Sports />
  <Finland />
  <Estonia />
  <Arsenal />
  <ManU />
  <Button />  */}
  </>
);
}
export default App;
