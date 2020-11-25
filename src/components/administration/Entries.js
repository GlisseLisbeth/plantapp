import React from 'react'
import { useSelector } from 'react-redux';
import Entry from './Entry';

const Entries = (props) => {
    const { plants } = useSelector( state  => state.plants );
    return (
        <div className="flex-auto px-4 py-2 overflow-auto">
            
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