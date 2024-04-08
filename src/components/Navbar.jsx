import { HamburgerIcon } from "../icons/HamburgerIcon";
import { useState } from 'react'

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-col items-center p-2 gap-2 sticky bg-[#13151B] top-0">
        <div className="flex items-center justify-end md:justify-between w-full">
          <ul
            className="md:flex justify-center w-full hidden items-center gap-20 text-white font-semibold text-lg"
          >
            <li className="hover:text-cyan-400 transition-all duration-100">
              <a href="#">Introducción</a>
            </li>
            <li className="hover:text-cyan-400 transition-all duration-100">
              <a href="#example">Ejemplo</a>
            </li>
            <li className="hover:text-cyan-400 transition-all duration-100">
              <a href="#definition">Definición</a>
            </li>
            <li className="hover:text-cyan-400 transition-all duration-100">
              <a href="#disadvantages">Desventajas</a>
            </li>
          </ul>


          <div onClick={() => setIsOpen(true)}><HamburgerIcon onClick={() => setIsOpen(true)} /> </div>

        </div>
        <hr className="bg-white border-white w-[80%] hidden md:block" />
      </nav>

      {
        isOpen && (
          <div className="bg-slate-950 transition-all duration-300 text-white fixed top-0 left-0 w-full h-full bg-opacity-50">
            <div className="bg-slate-950 w-2/3 h-full fixed top-0 right-0 p-4">
              <button
                className="bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <ul className="flex flex-col gap-4 mt-8">
                <li onClick={() => setIsOpen(false)}>
                  <a href="#">Introducción</a>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <a href="#example">Ejemplo</a>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <a href="#definition">Definición</a>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <a href="#disadvantages">Desventajas</a>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    </>
  )
}
