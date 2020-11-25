import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activePlant } from '../../actions/plants';

const Entry = ({ id, date, name, description, url }) => {

    const plantDate = moment(date);
    const dispatch = useDispatch();
    
    const handleEntryClick = () => {
        dispatch( 
            activePlant( id, {
                date, name, description, url
            })
        );
    }

    return (
        <div 
            className="flex justify-between bg-white rounded color-gray-700 my-2 overflow-hidden"
            onClick={ handleEntryClick }
        >
            
            {
                url &&
                <div 
                    className="bg-cover w-full"
                    style={{
                        backgroundImage: `url(${ url })`
                    }}
                ></div>
            }

            <div className="cursor-pointer p-2.5">
                <p className="font-bold text-sm">
                    { name }
                </p>
                <p className="text-xs">
                    { description }
                </p>
            </div>

            <div className="flex justify-center flex-col p-1">
                <h4 className="font-bold"> { plantDate.format('Do') } </h4>
                <span className="capitalize"> { plantDate.format('dddd') } </span>
            </div>

        </div>
    )
}

export default Entry;