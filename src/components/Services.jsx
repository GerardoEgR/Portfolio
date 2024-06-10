import { BiLogoReact, BiLogoSpringBoot } from 'react-icons/bi'
import { BsArrowsAngleContract, BsDatabase, BsReverseLayoutTextWindowReverse } from 'react-icons/bs'


const Services = () => {
  return (
    <>
      <div className='bg-gradient-to-tl from-indigo-950 via-blue-900 to-blue-950 w-full h-lg min-h-[75vh] lg:min-h-[68vh] z-10' id='services'>
        <div className='flex-1 text-center lg:text-left drop-shadow-[2px_1px_1px_rgba(0,0,0,0.9)] pb-5'>
          <h1 className='lg:text-center text-[50px] font-semibold lg:text-[60px] text-slate-300 mb-12 drop-shadow-[5px_2px_1px_rgba(0,0,0,0.9)]'>Mis Servicios</h1>
        </div>

        <div className='py-18 sm:pt-18 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>

              <div className='mx-auto flex w-full  max-w-xs flex-col gap-y-4 border border-slate-400 p-8 rounded-md items-center'>
                <div className='h-px w-full m-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <dt className='text-2xl leading-7 text-gray-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Páginas web estáticas
                  <p className='text-sm leading-6 text-gray-300 mt-4'>
                    Ideales para mostrar información básica sobre empresas, productos o servicios, con cinco secciones o páginas
                    para distribuir dicha información (Inicio, Nosotros, Servicios, Galería, Contacto).
                  </p>
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl'>
                  <div className='rounded-full bg-slate-900/20 p-5 border border-slate-600'>
                    <BsReverseLayoutTextWindowReverse className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' />
                  </div>
                </dd>
              </div>

              <div className='mx-auto flex w-full max-w-xs flex-col gap-y-4 border border-slate-400 p-8 rounded-md items-center'>
                <div className='h-px w-full m-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <dt className='text-2xl leading-7 text-gray-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Páginas web dinámicas
                  <p className='text-sm leading-6 text-gray-300 mt-4'>
                    Ideales para mostrar contenido que debe ser modificado con regularidad.
                    A menudo incluyen funcionalidades interactivas, como formularios de contacto, blogs, foros o tiendas en línea.
                  </p>
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl'>
                  <div className='rounded-full bg-slate-900/20 p-5 border border-slate-600'>
                    <BsReverseLayoutTextWindowReverse className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' />
                  </div>
                </dd>
              </div>

              <div className='mx-auto flex w-full max-w-xs flex-col gap-y-4 border border-slate-400 p-8 rounded-md items-center'>
                <div className='h-px w-full m-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <dt className='text-2xl leading-7 text-gray-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Backend a medida
                  <p className='text-sm leading-6 text-gray-300 mt-4'>
                    Desarrollo de la lógica del lado del servidor utilizando el framework Spring Boot de Java. Esta tecnología es ideal
                    para construir aplicaciones web robustas y escalables, proporcionando un backend seguro y eficiente.
                  </p>
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl'>
                  <div className='rounded-full bg-slate-900/20 p-5 border border-slate-600'>
                    <BiLogoSpringBoot className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' />
                  </div>
                </dd>
              </div>

              <div className='mx-auto flex w-full max-w-xs flex-col gap-y-4 border border-slate-400 p-8 rounded-md items-center'>
                <div className='h-px w-full m-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <dt className='text-2xl leading-7 text-gray-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Integración de base de datos
                  <p className='text-sm leading-6 text-gray-300 mt-4'>
                    Integración de bases de datos relacionales, como es MySQL o PostgreSQL.
                    Estas bases de datos permiten almacenar y gestionar de manera eficiente grandes cantidades de datos.
                  </p>
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl'>
                  <div className='rounded-full bg-slate-900/20 p-5 border border-slate-600'>
                    <BsDatabase className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' />
                  </div>
                </dd>
              </div>


              <div className='mx-auto flex w-full max-w-xs flex-col gap-y-4 border border-slate-400 p-8 rounded-md items-center'>
                <div className='h-px w-full m-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <dt className='text-2xl leading-7 text-gray-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Desarrollo Bajo Demanda
                  <p className='text-sm leading-6 text-gray-300 mt-4'>
                    Creación de los proyectos utilizando JavaScript o React, el cual es una biblioteca de JavaScript ampliamente utilizada para construir interfaces que permite mantener una experiencia de usuario fluida.
                  </p>
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl'>
                  <div className='rounded-full bg-slate-900/20 p-5 border border-slate-600'>
                    <BiLogoReact className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' />
                  </div>
                </dd>
              </div>

              <div className='mx-auto flex w-full max-w-xs flex-col gap-y-4 border border-slate-400 p-8 rounded-md items-center'>
                <div className='h-px w-full m-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <dt className='text-2xl leading-7 text-gray-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)]'>
                  Desarrollo Responsive Design
                  <p className='text-sm leading-6 text-gray-300 mt-4'>
                    Diseño de sitios web que se adaptan y responden de manera óptima a diferentes tamaños de pantalla y dispositivos.
                    Garantizando así una experiencia de usuario consistente y atractiva en cualquier dispositivo.
                  </p>
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl'>
                  <div className='rounded-full bg-slate-900/20 p-5 border border-slate-600'>
                    <BsArrowsAngleContract className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)]' />
                  </div>
                </dd>
              </div>

            </dl>
          </div>
        </div>

      </div>
      <div className='w-full h-14 lg:h-20 bg-gradient-to-l from-indigo-950 to-blue-900'></div>
      <div className='w-full h-14 lg:h-20 bg-gradient-to-tr from-blue-950  via-blue-900 to-indigo-950'></div>
    </>
  )
}

export default Services