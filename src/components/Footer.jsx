import { Link } from 'react-scroll'
import LogoWhite from '../assets/Logo-white.png'

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-slate-800 border-2 border-slate-800  border-t-indigo-500'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
        <div className='sm:flex mt-4 space-x-5 sm:justify-between sm:mt-0'>
          <span className='flex text-sm text-gray-500 sm:text-center dark:text-gray-400 items-center space-x-1 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
            <img src={LogoWhite} className='h-10 p-1 mr-1 opacity-60 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]' alt='Gerardo' />
            Gerardo Gallardo<a className='underline drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>Web Developer</a>.
          </span>
          <div className='flex sm:items-center sm:justify-between mt-4 space-x-5 sm:mt-0'>
            <ul className='flex mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
              <Link to='header' className='mr-4 hover:underline md:mr-6 cursor-pointer'>Home</Link>
              <Link to='about' className='mr-4 hover:underline md:mr-6 cursor-pointer'>Sobre Mi</Link>
              <Link to='services' className='mr-4 hover:underline md:mr-6 cursor-pointer'>Mis Servicios</Link>
              <Link to='work' className='mr-4 hover:underline md:mr-6 cursor-pointer'>Proyectos</Link>
            </ul>
          </div>
        </div>
        <div className='my-6 h-px w-full mt-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent lg:my-8' />
        <div className='sm:flex sm:flex-col sm:items-center sm:justify-between drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
          <div className='flex m-4 space-x-5 sm:justify-center sm:mt-0'>
            <a href='https://www.linkedin.com/in/gerardo-gallardo-rodr%C3%ADguez-396193171/' target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white' rel="noreferrer">
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-linkedin' viewBox='0 0 16 16'> <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' /> </svg>
              <span className='sr-only'>LinkedIn account</span>
            </a>
            <a href='https://github.com/GerardoEgR' target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white' rel="noreferrer">
              <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' />
              </svg>
              <span className='sr-only'>GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
