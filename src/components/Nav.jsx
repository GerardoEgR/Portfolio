import { BsFolder2Open, BsHeadset, BsHouse, BsPerson } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='fixed flex-col items-center xl:justify-center gap-y-4 h-max bottom-2 mt-auto lg:mt-60 lg:bottom-8 w-full xl:right-[2%] z-50 top-0 xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h[96px backdrop-blur-2xl] rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center xl:flex-col gap-y-10 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)] border border-slate-600'>
          <Link
            to='header'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white drop-shadow-[3px_2px_2px_rgba(0,0,0,0.9)]'
          >
            <BsHouse />
          </Link>
          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white drop-shadow-[3px_2px_2px_rgba(0,0,0,0.9)]'
          >
            <BsPerson />
          </Link>
          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white '
          >
            <BsHeadset />
          </Link>
          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white drop-shadow-[3px_2px_2px_rgba(0,0,0,0.9)]'
          >
            <BsFolder2Open />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav