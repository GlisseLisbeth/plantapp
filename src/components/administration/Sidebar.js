import React, { useState} from 'react'
import { useDispatch } from 'react-redux'

import Entries from './Entries'
import { startLogout } from '../../actions/auth';
import { startNewPlant } from '../../actions/plants';
import Logo from '../../img/icon.png';
import { IoIosAddCircle } from "react-icons/io";

const Sidebar = () => {
  
  const dispatch = useDispatch();
  const [showSideBar, setShowSidebar] = useState(true);

  const hanleLogout = () => {
    dispatch(startLogout())
  }

  const handleAddNew = () => {
    dispatch(startNewPlant());
  }
  
  const toggleSidebar = () => setShowSidebar(!showSideBar);
  return (
    <div class="md:w-2/6 absolute md:relative">
      <div class="md:hidden flex justify-start bg-green-500 p-2 w-screen">
        <button class="mr-2 focus:b-0 bg-green-900 rounded" aria-label="Open Menu"  onClick={() => toggleSidebar()}>
          <svg
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-8 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <img className="w-10 h-10 m-auto" src={Logo} alt="App Plant"></img>
      </div>
      <aside className={`md:h-screen md:block md:flex w-full flex items-center flex-col justify-between bg-green-500 md:translate-x-0 transform ${
          showSideBar
            ? "hidden -translate-x-full ease-in transition-medium"
            : "block translate-x-0 ease-out transition-medium h-96"
        }`}>
        <div>
          <div
            className="hidden md:block shadow-inner cursor-pointer transition duration-300 ease-in-out border-b-2 border-green-600"
          >
            <img className="w-1/2 m-auto" src={Logo} alt="App Plant"></img>
          </div>
          <div
            className="shadow-inner cursor-pointer px-2 transition duration-300 ease-in-out  border-b-2 border-green-600 w-screen md:w-full"
            onClick={handleAddNew}
          >
            <IoIosAddCircle className="inline-block m-2" color="white" />
            <p className="inline-block my-1 text-white">
              Agregar planta
            </p>
          </div>
          <Entries />
        </div>
        <button
          className="w-5/6 btn shadow-inner bg-green-900 text-white px-4 py-2 mx-0 mb-2 outline-none focus:shadow-outline"
          onClick={hanleLogout}
        >
          Salir
          </button>
      </aside >
    </div>
  )
}

export default Sidebar;