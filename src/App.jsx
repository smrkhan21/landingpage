import './App.css'
import About from './components/About';
import Home from "./components/Home";
import MyFooter from './components/MyFooter';
import NavBar from "./components/NavBar";
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Services from './components/Services';

export default function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Newsletter/>
      <MyFooter/>
    </>
  )
}