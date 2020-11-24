import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Entries from './Entries'
import { startLogout } from '../../actions/auth';
import { startNewPlant } from '../../actions/plants';

const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch( startNewPlant() );
    }

    return (
        <aside className="w-1/5 bg-green-500 text-white flex flex-col h-screen px-2.5">
            
            <div className="flex justify-between">
                <h3 className="mt-5">
                    <span> { name }</span>
                </h3>

                <button 
                    className="btn"
                    onClick={ hanleLogout }
                >
                    Salir
                </button>
            </div>

            <div
                className="w-full flex items-center flex-col justify-center cursor-pointer mt-7 transition duration-300 ease-in-out"
                onClick={ handleAddNew }
            >
                <i className=""></i>
                <p className="mt-5">
                    Nueva planta
                </p>
            </div>

            <Entries />    

        </aside>
    )
}

export default Sidebar;