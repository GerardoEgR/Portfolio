import principal from '../assets/image1.png'
import { BsGithub } from 'react-icons/bs'
import { BiLogoLinkedinSquare } from 'react-icons/bi'

const Header = () => {
  return (
    <>
      <div className='w-full h-xl bg-gradient-to-tl from-indigo-950 via-blue-900 to-blue-950 min-h-[75vh] lg:min-h-[68vh] flex items-center pt-8' id='header'>
        <div className='text-center flex flex-col gap-y-8 xl:text-left container mx-auto lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center lg:text-left drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
            <p className='xl:mb-4 sm:mb-4 text-3xl leading-6 font-semibold text-purple-500 dark:text-purple-400 drop-shadow-[4px_2px_1px_rgba(0,0,0,0.9)]'>¡Hola!<span className='text-purple-500 dark:text-purple-400  px-5'>Soy</span></p>
            <h1 className='text-[50px] font-semibold lg:text-[60px] text-slate-300 mb-5 drop-shadow-[5px_2px_1px_rgba(0,0,0,0.9)]'>Gerardo Gallardo<br />
              <span className='text-sky-500 dark:text-sky-400'>Desarrollador Full Stack Freelance</span>
            </h1>
            <div className='flex text-[30px] xl:text-[35px] gap-x-6 max-w-max mx-auto lg:mx-0 text-slate-300 px-4 py-4'>
              <a href='https://github.com/GerardoEgR' target='_blank' className='hover:text-sky-400 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.9)]' rel="noreferrer">
                <BsGithub />
              </a>
              <a href='https://www.linkedin.com/in/gerardo-gallardo-rodr%C3%ADguez-396193171/' target='_blank' className='hover:text-sky-400 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.9)]' rel="noreferrer">
                <BiLogoLinkedinSquare />
              </a>
            </div>
          </div>
          <div className='border-solid border-2 border-slate-600 rounded-full drop-shadow-[2px_2px_20px_rgba(0,0,0,0.9)]'>
            <img src={principal} className='rounded-full drop-shadow-[10px_1px_20px_rgba(0,0,0,0.9)]' alt='desarrollador full stack' />
          </div>
        </div>
      </div>
      <div className='w-full h-14 lg:h-20 bg-gradient-to-l from-indigo-950 to-blue-900'></div>
      <div className='w-full h-14 lg:h-20 bg-gradient-to-tr from-blue-950  via-blue-900 to-indigo-950'></div>
    </>


  )
}

export default Header