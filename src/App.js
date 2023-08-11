// import React, { PureComponent } from 'react'
// import TestComp from './TestProject/TestComp';
// export default function App(){
//   return (
//     <>
//     <TestComp/></>
//   );
// }

// import React, { useState, useEffect } from "react";
// import "./App.css";
// useState()
// import Counter from "./components/Counter.js";
// import Form from "./components/Form";
// 4th
// import Props from "./components/Props.js";
// TODO List
// import TodoList from "./components/TodoList";
// Gallery
// import Profile, {Student2} from './GalleryProject/Profile.js';
// import {Student2} from './Profile';
// 1st
// import ParentComponent from './Project1/ParentComponent';
// 2nd
// import CardGrid from './Project1/CardGrid';
// 3rd
// import {Navbar, NavbarBrand} from 'reactstrap' ;
// import Menu from './Project2/MenuComponent';

// CWH PROJECT 1
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavNav from "./CwhNotes/Project1/NavNav.js";
import FormForm from "./CwhNotes/Project1/FormForm";
import AboutAbout from "./CwhNotes/Project1/AboutAbout";
import AlertAlert from "./CwhNotes/Project1/AlertAlert";
export default function App() {
  // DARK MODE
  const bgColor = "#404041";
  const [mode, setMode] = useState("light");
  const [currentButton, setButton] = useState("dark");
  const changeMode = () => {
    if (mode == "light") {
      setMode("dark");
      setButton("light");
      document.body.style.backgroundColor = bgColor;
      displayAlert("enjoy working in dark mode..", "success");
    } else {
      setMode("light");
      setButton("dark");
      document.body.style.backgroundColor = "white";
      displayAlert("welcome to light mode..", "success");
    }
  };
  // ALERT
  const [alert, setAlert] = useState(null);
  const displayAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      {/* ROUTED APP STARTS HERE */}
      <Router>
        <div>
          <NavNav
            title="Util App"
            mode={mode}
            changeMode={changeMode}
            currentButton={currentButton}
            setButton={setButton}
          />
          <AlertAlert alert={alert} />
          <Routes>
            {/* <Route exact path="/" element={<Home />}></Route> */}
            <Route
              excat
              path="/about"
              element={<AboutAbout mode={mode} changeMode={changeMode} />}
            ></Route>
            <Route
              exact
              path="/contact"
              element={
                <FormForm
                  heading="We would love to hear from you.."
                  mode={mode}
                  changeMode={changeMode}
                  displayAlert={displayAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
      {/* FUNCTIONALITY OF HOOKS  */}
      {/* <HookeyHookFunction /> */}
      <br />
      {/* DIFFERENCE B/W HOOKS AND CLASS */}
      {/* <HookeyHookClass /> */}
    </>
  );
}

// LIFECYCLE PROJECT 3
// import React, { Component } from "react";
// import Demo from './LifeCycleProject/Demo';
// export default function App() {
//   return (
//     <>
//     <Demo/>
//     </>
//   )
// }

// FOOD APP

// import React, { Component } from 'react';
// import Home from "./ProjectRouting2/components/HomeComponent";
// import About from "./ProjectRouting2/components/AboutComponent";
// import Contact from "./ProjectRouting2/components/ContactComponent";
// import Menu from './ProjectRouting2/components/MenuComponent';
// import Header from './ProjectRouting2/components/HeaderComponent';
// import Footer from './ProjectRouting2/components/FooterComponent';
// import { DISHES } from './ProjectRouting2/shared/dishes';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import HomeComponent from './components/HomeComponent';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import CarouselComponent from  './ProjectRouting2/components/CarouselComponent';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES
//     };
//   }

//   render() {
//     return (
//       <Router>
//       <div className="App">
//         <Header />
//           <Routes>
//             <Route path='/home' element={ <Home />} />
//             <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
//             <Route exact path='/about' element={ <About />} />
//             <Route exact path='/contact' element={ <Contact />} />
//           </Routes>
//           {/* <CarouselComponent/> */}
//         <Footer />
//       </div>
//       </Router>
//     );
//   }
// }
// export default App;

// PROJECT ROUTING 1
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./ProjectRouting1/NavBar.js";
// import Home from "./ProjectRouting1/Home.js";
// import About from "./ProjectRouting1/About.js";
// import Contact from "./ProjectRouting1/Contact.js";

// export default function App() {
//   return (
//     <>
//       <Router>
//         <div>
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<Home />}></Route>
//             <Route path="/about" element={<About />}></Route>
//             <Route path="/contact" element={<Contact />}></Route>
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       {/* <Counter/> */}
//       {/* <Form/> */}
//     </>
//   );
// }

// setToggle
// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       setUsers(data);
//     };

//     fetchUsers();
//   }, []); // The empty dependency array ensures the effect runs only once on component mount

// //   return (
// //     <div>
// //       <h1>User List</h1>
// //       <ul>
// //         {users.map((user) => (
// //           <li key={user.name}>
// //             {user.name} <br />
// //             {user.address.street} <br /> {user.address.geo.lat} <br />
// //             {user.address.geo.lng}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
//   return (
//     <div className="container">
//       <div className="row">
//         {users.map((user, index) => (
//           <div key={index} className="col-md-3">
//             <div className="card">
//               <div className="card-body">
//                 <li key={user.name}>
//                   {user.name} <br />
//                   {user.address.street} <br /> {user.address.geo.lat} <br />
//                   {user.address.geo.lng}
//                 </li>
//                 {/* <h5 className="card-title">{card.title}</h5>
//                 <p className="card-text">{card.content}</p> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default UserList;

// useState HOOK
// export default function App() {
//   // var a = 0; //count Not Working without useState()
//   var [a, abc] = useState(0); //a=0
//   function change(e) {
//     abc(a + 1); //a++ not working
//     // console.log(e.target.value + 5);
//     // abc(e.target.value + 5);
//   }
//   return (
//     <div>
//       {/* other component will not get reloaded after change through useState hook */}
//       <Child1 />
//       <Child1 />
//       <p>Count Value : {a}</p>
//       <button onClick={change}>Click Me</button>
//       <input
//         type="text"
//         value={a} >
//         {/* onChange={change} */}
//       </input>
//     </div>
//   );
// }

// 4th
// export default function App(){
//   return (
//       <div>
//       <Child1 a="cat"/>
//       <Child1 b="dog"/>
//       <Child1 c="elephant"/>
//       </div>
//   );
// }

// 3rd
// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/">Menu Items</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu />
//     </div>
//   );
// }
// export default App;

// 2nd
// function App() {
//   return (
//     <div className="App">
//       <h1>Indian Restaurants !</h1>
//       <CardGrid />
//     </div>
//   );
// }
// export default App;

// 1st
// const App = () => {
//   return (
//     <div>
//       <ParentComponent />
//     </div>
//   );
// };
// export default App;

// Gallery
// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//       <Profile/>
//       <Student1/>
//       <Student2/>
//     </section>
//   );
// }
// function Student1(){
//   return (
//   <section>
//     <h2>Student 1</h2>
//   </section>);
// }

// ToDo List
// export default function App(){
//   return (
//       <TodoList/>
//   );
// }
