import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  // BiLogoPostgresql,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTailwindCss
} from 'react-icons/bi'
import { BsEye, BsGithub } from 'react-icons/bs'
import work1 from '../assets/work-1.jpeg'
import work2 from '../assets/work-2.jpeg'
import work3 from '../assets/work-3.jpeg'
import work4 from '../assets/work-4.png'
import Tooltip from './Tooltip'


const Work = () => {
  return (
    <>
      <div className='bg-gradient-to-tl from-indigo-950 via-blue-900 to-blue-950 w-full h-lg min-h-[75vh] lg:min-h-[68vh] pb-20' id='work'>
        <div className='flex-1 text-center lg:text-left drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)] pb-5'>
          <h1 className='lg:text-center text-[50px] font-semibold lg:text-[60px] text-slate-300 mb-12 drop-shadow-[5px_2px_1px_rgba(0,0,0,0.9)]'>Proyectos</h1>
        </div>

        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl sm:text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl drop-shadow-[1px_1px_5px_rgba(249,250,251,0.9)]'>
              ¡Bienvenido a la sección de proyectos de mi portafolio!
            </h2>
            <p className='mt-5 text-lg leading-8 max-w-2xl mx-auto text-gray-300 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
              <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>Aquí encontrarás una selección de algunos de los proyectos en los que he trabajado y que representan mi trayectoria como desarrollador Full Stack.</span>
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl rounded-lg ring-1 ring-gray-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            <div className='-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center mx-auto max-w-md'>
              <img src={work1} className='h-full border border-gray-500 rounded-tl-lg rounded-tr-lg  lg:rounded-bl-lg lg:rounded-tr-none' alt='moviespedia' />
            </div>

            <div className='p-8 sm:p-8 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900 drop-shadow-[1px_1px_4px_rgba(249,250,251,0.9)]'>MoviesPedia</h3>
              <p className='mt-6 text-base leading-7 text-gray-300 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
                <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Aplicación web que permite a los usuarios buscar películas, registrarse y/o iniciar sesión.
                  Una vez autenticados, pueden crear, editar y eliminar comentarios sobre las películas y/o agregarlas a una lista de favoritos,
                  para mantener un seguimiento de sus preferencias.
                </span>
              </p>
              <ul
                role='list'
                className='mt-4 ms-4 grid grid-cols-3 gap-3 text-sm leading-6 text-gray-600 sm:grid-cols-12 sm:gap-6'
              >
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <a href='https://github.com/GerardoEgR/moviesPediaPage.git' target='_blank' className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' rel='noreferrer'>
                    <BsGithub className='h-8 w-auto flex-none text-gray-400 hover:text-gray-50' />
                  </a>
                </li>
              </ul>
              <div className='mt-4 flex items-center gap-x-4'>
                <h4 className='flex-none text-md font-semibold leading-6 text-sky-500 drop-shadow-[3px_1px_1px_rgba(0,0,0,0.9)]'>
                  <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                    Tecnologías utilizadas
                  </span>
                </h4>
                <div className='h-px flex-auto bg-gray-400 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]' />
              </div>
              <ul
                role='list'
                className='mt-4 flex flex-wrap justify-center gap-3 text-gray-600 sm:grid-cols-8 sm:gap-6'
              >
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='React'>
                    <a className=' drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoReact className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Bootstrap'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoBootstrap className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Javascript'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoJavascript className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Spring Boot'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoSpringBoot className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Spring Security'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <svg className='h-16 w-auto flex-none p-2 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' fill='#0ea5e9' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spring Security</title><path d="M20.59 2.066 11.993 0 3.41 2.066v6.612h4.557a3.804 3.804 0 0 0 0 .954H3.41v3.106C3.41 19.867 11.994 24 11.994 24s8.582-4.133 8.582-11.258V9.635h-4.545a3.616 3.616 0 0 0 0-.954h4.558zM12 12.262h-.006a3.109 3.109 0 1 1 .006 0zm-.006-4.579a.804.804 0 0 0-.37 1.52v.208l.238.237v.159l.159.159v.159l-.14.14.15.246v.159l-.16.189.223.222.246-.246V9.218a.804.804 0 0 0-.346-1.535zm0 .836a.299.299 0 1 1 .298-.299.299.299 0 0 1-.298.3z" /></svg>
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='MySQL'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <svg className='h-16 w-auto flex-none p-2 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' fill='#0ea5e9' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 50 50'>
                        <path d='M 31.167969 8 C 30.699219 7.988281 30.289063 8.167969 30.078125 8.6875 C 29.71875 9.558594 30.613281 10.410156 30.933594 10.855469 C 31.15625 11.164063 31.445313 11.511719 31.605469 11.859375 C 31.710938 12.089844 31.726563 12.320313 31.816406 12.5625 C 32.039063 13.160156 32.394531 13.839844 32.679688 14.394531 C 32.824219 14.675781 32.984375 14.96875 33.167969 15.21875 C 33.28125 15.371094 33.472656 15.441406 33.503906 15.675781 C 33.316406 15.941406 33.304688 16.351563 33.199219 16.6875 C 32.722656 18.191406 32.902344 20.0625 33.59375 21.171875 C 33.808594 21.515625 34.3125 22.246094 35 21.96875 C 35.601563 21.722656 35.46875 20.960938 35.640625 20.285156 C 35.679688 20.136719 35.65625 20.023438 35.734375 19.921875 L 35.734375 19.953125 C 35.914063 20.320313 36.097656 20.6875 36.28125 21.050781 C 36.691406 21.707031 37.414063 22.390625 38.023438 22.855469 C 38.339844 23.09375 38.589844 23.507813 39 23.648438 L 39 23.617188 L 38.96875 23.617188 C 38.890625 23.492188 38.765625 23.441406 38.664063 23.34375 C 38.425781 23.109375 38.160156 22.816406 37.964844 22.546875 C 37.40625 21.792969 36.914063 20.964844 36.46875 20.105469 C 36.253906 19.695313 36.066406 19.242188 35.886719 18.824219 C 35.816406 18.660156 35.816406 18.417969 35.671875 18.332031 C 35.472656 18.640625 35.183594 18.886719 35.03125 19.25 C 34.789063 19.828125 34.753906 20.535156 34.664063 21.265625 C 34.609375 21.285156 34.632813 21.269531 34.605469 21.296875 C 34.179688 21.191406 34.027344 20.753906 33.871094 20.378906 C 33.472656 19.429688 33.394531 17.898438 33.75 16.808594 C 33.839844 16.523438 34.25 15.632813 34.085938 15.371094 C 34.007813 15.109375 33.742188 14.960938 33.597656 14.761719 C 33.414063 14.515625 33.234375 14.191406 33.109375 13.90625 C 32.78125 13.164063 32.472656 12.304688 32.125 11.554688 C 31.960938 11.195313 31.683594 10.835938 31.453125 10.515625 C 31.199219 10.164063 30.917969 9.90625 30.71875 9.476563 C 30.652344 9.328125 30.554688 9.085938 30.660156 8.929688 C 30.691406 8.824219 30.738281 8.78125 30.84375 8.746094 C 31.019531 8.609375 31.511719 8.789063 31.699219 8.867188 C 32.1875 9.070313 32.597656 9.265625 33.011719 9.539063 C 33.210938 9.671875 33.410156 9.925781 33.652344 10 L 33.925781 10 C 34.359375 10.097656 34.839844 10.027344 35.238281 10.152344 C 35.949219 10.367188 36.585938 10.703125 37.160156 11.066406 C 38.921875 12.175781 40.363281 13.757813 41.34375 15.644531 C 41.503906 15.949219 41.574219 16.242188 41.714844 16.5625 C 41.992188 17.210938 42.347656 17.882813 42.628906 18.515625 C 42.90625 19.152344 43.179688 19.789063 43.574219 20.316406 C 43.78125 20.59375 44.585938 20.746094 44.949219 20.898438 C 45.203125 21.007813 45.625 21.121094 45.863281 21.265625 C 46.328125 21.542969 46.773438 21.875 47.207031 22.183594 C 47.425781 22.335938 48.089844 22.667969 48.125 22.945313 C 47.050781 22.917969 46.230469 23.015625 45.53125 23.3125 C 45.332031 23.398438 45.011719 23.398438 44.980469 23.648438 C 45.085938 23.761719 45.105469 23.933594 45.191406 24.074219 C 45.359375 24.34375 45.640625 24.707031 45.894531 24.898438 C 46.171875 25.105469 46.453125 25.328125 46.75 25.511719 C 47.273438 25.828125 47.859375 26.011719 48.367188 26.332031 C 48.664063 26.523438 48.964844 26.761719 49.253906 26.972656 C 49.398438 27.082031 49.492188 27.246094 49.679688 27.3125 L 49.679688 27.28125 C 49.582031 27.15625 49.558594 26.984375 49.46875 26.855469 L 49.066406 26.453125 C 48.679688 25.941406 48.1875 25.488281 47.664063 25.113281 C 47.246094 24.8125 46.3125 24.40625 46.140625 23.921875 L 46.109375 23.890625 C 46.402344 23.859375 46.75 23.75 47.023438 23.675781 C 47.484375 23.554688 47.890625 23.585938 48.363281 23.464844 C 48.578125 23.402344 48.792969 23.339844 49.007813 23.28125 L 49.007813 23.15625 C 48.769531 22.914063 48.597656 22.585938 48.335938 22.363281 C 47.652344 21.78125 46.90625 21.199219 46.136719 20.714844 C 45.710938 20.445313 45.183594 20.269531 44.734375 20.042969 C 44.582031 19.964844 44.316406 19.925781 44.214844 19.796875 C 43.976563 19.496094 43.847656 19.113281 43.664063 18.761719 C 43.28125 18.023438 42.90625 17.21875 42.566406 16.441406 C 42.335938 15.914063 42.183594 15.390625 41.894531 14.914063 C 40.507813 12.636719 39.015625 11.257813 36.703125 9.90625 C 36.210938 9.617188 35.621094 9.507813 34.996094 9.359375 C 34.65625 9.335938 34.324219 9.316406 33.984375 9.296875 C 33.78125 9.210938 33.566406 8.960938 33.375 8.835938 C 32.894531 8.535156 31.949219 8.011719 31.167969 8 Z M 34.476563 11.3125 C 34.253906 11.308594 34.09375 11.339844 33.925781 11.375 L 33.925781 11.40625 L 33.957031 11.40625 C 34.0625 11.625 34.253906 11.765625 34.386719 11.953125 C 34.488281 12.167969 34.585938 12.382813 34.6875 12.597656 L 34.71875 12.566406 C 34.90625 12.433594 34.996094 12.21875 34.996094 11.894531 C 34.917969 11.816406 34.90625 11.714844 34.84375 11.621094 C 34.753906 11.492188 34.585938 11.421875 34.476563 11.3125 Z M 1.867188 23.996094 C 1.566406 24.007813 1.238281 24.066406 0.882813 24.179688 C 0.289063 24.359375 -0.00390625 24.714844 -0.00390625 25.4375 L -0.00390625 33 L 2 33 L 2 25.621094 L 4.777344 31.929688 C 5.121094 32.714844 5.589844 32.996094 6.507813 32.996094 C 7.429688 32.996094 7.878906 32.714844 8.222656 31.929688 L 11 25.78125 L 11 33 L 13 33 L 13 25.4375 C 13 24.714844 12.710938 24.359375 12.113281 24.179688 C 10.691406 23.730469 9.734375 24.117188 9.304688 25.089844 L 6.453125 31.503906 L 3.695313 25.089844 C 3.382813 24.359375 2.757813 23.960938 1.867188 23.996094 Z M 26.246094 24 C 25.457031 24 23 24.09375 23 26 L 23 27.234375 C 23 28.109375 23.769531 28.824219 25.4375 29 C 25.625 29.011719 25.8125 29.027344 26 29.027344 C 26 29.027344 27.945313 28.988281 28 29 C 29.125 29 29 29.875 29 30 L 29 31 C 29 31.136719 28.96875 32 27.988281 32 L 23 32 L 23 33 L 28.007813 33 C 28.664063 33 29.300781 32.863281 29.808594 32.625 C 30.652344 32.238281 31 31.714844 31 31.027344 L 31 29.597656 C 31 28.0625 29.09375 28 28 28 L 26 28 C 25.214844 28 25.09375 27.523438 25 27 L 25 26 C 25.09375 25.601563 25.269531 25.0625 25.964844 25 L 31 25 L 31 24 Z M 33.980469 24 C 32.503906 24.203125 31.984375 24.9375 31.984375 26 L 31.984375 31 C 31.984375 31.972656 32.527344 32.558594 33.644531 32.863281 C 34.019531 32.96875 34.359375 33.011719 34.679688 33.011719 L 36.90625 33 L 38.214844 33 L 39.328125 34 L 41.578125 34 L 40.03125 32.605469 C 40.757813 32.304688 40.984375 31.84375 40.984375 30.980469 L 40.984375 26 C 40.984375 24.9375 40.292969 24.203125 38.816406 24 Z M 42 24 L 42 30.957031 C 42 32.164063 42.683594 32.84375 44.492188 32.980469 C 44.660156 32.988281 44.832031 33 45 33 L 50 33 L 50 32 L 45.378906 32 C 44.347656 32 44 31.566406 44 30.949219 L 44 24 Z M 35.171875 25 L 37.746094 25 C 38.425781 25 38.882813 25.546875 38.984375 26 C 38.984375 26 39 30.65625 39 31 C 39 31.34375 38.808594 31.5 38.808594 31.5 L 38.265625 31 L 36 31 L 37.113281 32 L 35.171875 32 C 34.476563 32 34.085938 31.484375 33.984375 31 L 33.984375 26.101563 C 33.984375 25.570313 34.390625 25 35.171875 25 Z M 14 27 C 14.039063 27.039063 14 31.261719 14 31.34375 C 14.015625 32.21875 15.125 32.984375 16.863281 33 L 20 33 L 20 33.066406 C 20 33.253906 20.136719 33.878906 19 34 C 18.988281 34 14.011719 34 14 34 L 14 35 L 19.214844 35 C 20.097656 34.972656 22.011719 34.773438 22 33.242188 C 22 33.214844 22.007813 27 22 27 L 20 27 L 20 32 C 19.96875 32 17.523438 32.007813 17.03125 32 C 16.066406 31.984375 15.984375 31.433594 16 31.222656 L 16 27 Z'></path>
                      </svg>
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>

          <div className='mx-auto mt-16 max-w-2xl rounded-lg ring-1 ring-gray-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            <div className='-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center mx-auto max-w-md'>
              <img src={work2} className='h-full border border-gray-500 rounded-tl-lg rounded-tr-lg  lg:rounded-bl-lg lg:rounded-tr-none' alt='effeta' />
            </div>

            <div className='p-8 sm:p-8 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900 drop-shadow-[1px_1px_4px_rgba(249,250,251,0.9)]'>Effeta</h3>
              <p className='mt-6 text-base leading-7 text-gray-300 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
                <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Página web estática creada con Astro, para proporcionar información sobre la Corporación Chilena de Padres y
                  Amigos de Personas Sordas (CCPAS). El objetivo principal es difundir información relevante sobre la organización.
                </span>
              </p>
              <ul
                role='list'
                className='mt-4 ms-4 grid grid-cols-3 gap-3 text-sm leading-6 text-gray-600 sm:grid-cols-12 sm:gap-6'
              >
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <a href='https://github.com/GerardoEgR/pageEffeta.git' target='_blank' className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' rel='noreferrer'>
                    <BsGithub className='h-8 w-auto flex-none text-gray-400 hover:text-gray-50' />
                  </a>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <a href='https://gerardoegr.github.io/pageEffeta/' target='_blank' className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' rel='noreferrer'>
                    <BsEye className='h-8 w-auto flex-none text-gray-400 hover:text-gray-50' />
                  </a>
                </li>
              </ul>
              <div className='mt-4 flex items-center gap-x-4'>
                <h4 className='flex-none text-md font-semibold leading-6 text-sky-500 drop-shadow-[3px_1px_1px_rgba(0,0,0,0.9)]'>
                  <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                    Tecnologías utilizadas
                  </span>
                </h4>
                <div className='h-px flex-auto bg-gray-400 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]' />
              </div>
              <ul
                role='list'
                className='mt-4 flex flex-wrap justify-center gap-3 text-gray-600 sm:grid-cols-8 sm:gap-6'
              >
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Astro'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'  >
                      <svg className='h-16 w-auto flex-none p-2 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' fill='#0ea5e9' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><defs><linearGradient id='a' x1='882.997' x2='638.955' y1='27.113' y2='866.902' gradientTransform='scale(.1)' gradientUnits='userSpaceOnUse'><stop offset='0' stopColor='#0ea5e9' /><stop offset='1' stopColor='#0ea5e9' /></linearGradient><linearGradient id='b' x1='1001.68' x2='790.326' y1='652.45' y2='1094.91' gradientTransform='scale(.1)' gradientUnits='userSpaceOnUse'><stop offset='0' stopColor='#0ea5e9' /><stop offset='1' stopColor='#0ea5e9' stopOpacity='0' /></linearGradient></defs>
                        <path fill='url(#a)' d='M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0' /><path fill='#0ea5e9' d='M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0' /><path fill='url(#b)' d='M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0' /></svg>
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='HTML'>
                    <a className=' drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoHtml5 className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Javascript'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoJavascript className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='TailwindCss'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoTailwindCss className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>

          <div className='mx-auto mt-16 max-w-2xl rounded-lg ring-1 ring-gray-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            <div className='-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center mx-auto max-w-md'>
              <img src={work3} className='h-full border border-gray-500 rounded-tl-lg rounded-tr-lg  lg:rounded-bl-lg lg:rounded-tr-none' alt='aysen' />
            </div>

            <div className='p-8 sm:p-8 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900 drop-shadow-[1px_1px_4px_rgba(249,250,251,0.9)]'>Región de Aysén</h3>
              <p className='mt-6 text-base leading-7 text-gray-300 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
                <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Página web estática creada con Astro, para información sobre la Región de Aysén. El objetivo de
                  este sitio es difundir información relevante sobre los principales atractivos turísticos existentes de la Región.
                </span>
              </p>
              <ul
                role='list'
                className='mt-4 ms-4 grid grid-cols-3 gap-3 text-sm leading-6 text-gray-600 sm:grid-cols-12 sm:gap-6'
              >
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <a href='https://github.com/GerardoEgR/region-aysen-page.git' target='_blank' className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' rel='noreferrer'>
                    <BsGithub className='h-8 w-auto flex-none text-gray-400 hover:text-gray-50' />
                  </a>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <a href='https://gerardoegr.github.io/region-aysen-page/' target='_blank' className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' rel='noreferrer'>
                    <BsEye className='h-8 w-auto flex-none text-gray-400 hover:text-gray-50' />
                  </a>
                </li>
              </ul>
              <div className='mt-4 flex items-center gap-x-4'>
                <h4 className='flex-none text-md font-semibold leading-6 text-sky-500 drop-shadow-[3px_1px_1px_rgba(0,0,0,0.9)]'>
                  <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                    Tecnologías utilizadas
                  </span>
                </h4>
                <div className='h-px flex-auto bg-gray-400 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]' />
              </div>
              <ul
                role='list'
                className='mt-4 flex flex-wrap justify-center gap-3 text-gray-600 sm:grid-cols-8 sm:gap-6'
              >
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Astro'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'  >
                      <svg className='h-16 w-auto flex-none p-2 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' fill='#0ea5e9' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><defs><linearGradient id='a' x1='882.997' x2='638.955' y1='27.113' y2='866.902' gradientTransform='scale(.1)' gradientUnits='userSpaceOnUse'><stop offset='0' stopColor='#0ea5e9' /><stop offset='1' stopColor='#0ea5e9' /></linearGradient><linearGradient id='b' x1='1001.68' x2='790.326' y1='652.45' y2='1094.91' gradientTransform='scale(.1)' gradientUnits='userSpaceOnUse'><stop offset='0' stopColor='#0ea5e9' /><stop offset='1' stopColor='#0ea5e9' stopOpacity='0' /></linearGradient></defs>
                        <path fill='url(#a)' d='M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0' /><path fill='#0ea5e9' d='M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0' /><path fill='url(#b)' d='M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0' /></svg>
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='HTML'>
                    <a className=' drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoHtml5 className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='CSS'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoCss3 className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Bootstrap'>
                    <a className=' drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoBootstrap className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Javascript'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoJavascript className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>

          <div className='mx-auto mt-16 max-w-2xl rounded-lg ring-1 ring-gray-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            <div className='-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center mx-auto max-w-md'>
              <img src={work4} className='h-full border border-gray-500 rounded-tl-lg rounded-tr-lg  lg:rounded-bl-lg lg:rounded-tr-none' alt='aysen' />
            </div>

            {/* <div className='p-8 sm:p-8 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900 drop-shadow-[1px_1px_4px_rgba(249,250,251,0.9)]'>HealthNet</h3>
              <p className='mt-6 text-base leading-7 text-gray-300 drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)]'>
                <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Aplicación web que permite a los usuarios agendar horas médicas, además cuenta con un sistema de búsqueda en base a filtros,
                  que permite realizar consultas mas exactas a la base de datos para encontrar la hora que se desea cancelar.
                </span>
              </p>
              <ul
                role='list'
                className='mt-4 ms-4 grid grid-cols-3 gap-3 text-sm leading-6 text-gray-600 sm:grid-cols-12 sm:gap-6'
              >
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <a href='https://github.com/GerardoEgR/HealthNetApp.git' target='_blank' className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' rel='noreferrer'>
                    <BsGithub className='h-8 w-auto flex-none text-gray-400 hover:text-gray-50' />
                  </a>
                </li>
              </ul>
              <div className='mt-4 flex items-center gap-x-4'>
                <h4 className='flex-none text-md font-semibold leading-6 text-sky-500 drop-shadow-[3px_1px_1px_rgba(0,0,0,0.9)]'>
                  <span className='drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                    Tecnologías utilizadas
                  </span>
                </h4>
                <div className='h-px flex-auto bg-gray-400 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]' />
              </div>
              <ul
                role='list'
                className='mt-4 flex flex-wrap justify-center gap-3 text-gray-600 sm:grid-cols-8 sm:gap-6'
              >
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='React'>
                    <a className=' drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoReact className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Next'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <svg className='h-16 w-auto flex-none p-2 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 15 15'><path fill='#0ea5e9' d='m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z' /></svg>
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Javascript'>
                    <a className=' drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoJavascript className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='TailwindCss'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoTailwindCss className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='Prisma'>
                    <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <svg className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24'><path fill='currentColor' d='M21.807 18.285L13.553.757a1.32 1.32 0 0 0-1.129-.755a1.31 1.31 0 0 0-1.206.626l-8.952 14.5a1.36 1.36 0 0 0 .016 1.455l4.376 6.778a1.41 1.41 0 0 0 1.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145m-1.848.752L9.18 22.224a.452.452 0 0 1-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 0 1-.325.713' /></svg>
                    </a>
                  </Tooltip>
                </li>
                <li className='flex gap-x-3 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                  <Tooltip text='PostgreSQL'>
                    <a className=' drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
                      <BiLogoPostgresql className='h-16 w-auto flex-none text-sky-500 p-1 mr-4 rounded-md border border-sky-500 hover:transform hover:scale-110' />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default Work