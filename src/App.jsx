import Header from "./components/header/Header";
import Hero from "./components/header/Hero/Hero";
import "./App.css"
import Companies from "./components/header/companies/Companies";
import Residencies from "./components/header/residencies/Residencies";
// import Value from "./components/header/value/value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./components/header/About Us/about";
// import About from "./components/header/About Us/About";
// import About from "./components/header/About Us/About";

function App() {
  return (
    <div className = "App">
      <div>
      <div className="white-gradient"/>
      <Header/>
      <Hero/>

</div>
<Companies/>
<Residencies/>
{/* <Value/> */}
{/* <About/> */}
<Contact/>
<About/>
<GetStarted/>
<Footer/>
<BrowserRouter>
<Routes>
  {/* <Route path = "about" element = {<About/>}> */}
    {/* </Route> */}
</Routes>
</BrowserRouter>


    </div>
    
  );
}

export default App;
