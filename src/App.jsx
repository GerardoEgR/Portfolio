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
        <Services/>
        <Work />
        <Footer />

          {/* <div className='p-24'>
            <h1 className='text-white text-6xl font-bold'>Hey there! I'm Gerardo</h1>
            <p className='text-white text-xl'>I'm a Full Stack Developer</p>
          </div>
          <div className='hidden xl:flex xl:max-w-none'>
            <img src={principal} width={985} height={496} className='rounded-full border-solid border-4 border-stone-500' alt='' />
          </div> */}
      </div>
      {/* <div className='h-[4000px]'></div> */}
    </>
  )
}

export default App
