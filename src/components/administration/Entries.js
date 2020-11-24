import React from 'react'
import { useSelector } from 'react-redux';
import { Entry } from './Entry';

const Entries = () => {

    const { plants } = useSelector( state => state.plants );

    return (
        <div className="">
            
            {
                plants.map( plant => (
                    <Entry 
                        key={ plant.id }
                        { ...plant }
                    />
                ))
            }

        </div>
    )
}

export default Entries;