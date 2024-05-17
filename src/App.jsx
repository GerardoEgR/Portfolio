// import principal from './assets/image1.png'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className=' h-screen'>
        <Header />
        <Nav />
        <About />
        <Services />
        <Work />
        <Footer />
      </div>
    </>
  )
}

export default App
