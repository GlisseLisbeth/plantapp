import React from 'react'
import { IoIosStar } from "react-icons/io";

const NothingSelected = () => {
    return (
        <div className="flex h-screen md:w-full w-4/5 m-auto">
            <div className="w-full max-w-sm m-auto shadow-md text-center">
                <p className="p-3 text-900-green weigth-3 text-center">
                    Seleccione una planta
                </p>
                <IoIosStar className="inline-block m-2" color="rgba(16, 185, 129,1)" size="50px" />
            </div>
        </div>
    )
}

export default NothingSelected;