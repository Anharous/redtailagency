import Image from "next/image"
import  "./page.css"
import Header from './Components/Header/page'
import Hero from './Components/Hero/page'
import About from './Components/About/page'
import Cards from './Components/Cards/page'
import Form from './Components/Form/page'
import Footer from './Components/Footer/page'
import Accordian from './Components/Accordion/page'
import Content from './Components/Content/page'

export default function Home() {
  return (
    <div className="home-container">
      <Header/>
      <Hero/>
      <Content/> 
      <About/>
      <Cards/>
      <Form/>
      <Accordian/>
      <Footer/>
    </div>
  );
}
