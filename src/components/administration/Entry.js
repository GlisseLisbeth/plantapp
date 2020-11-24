import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activePlant } from '../../actions/plants';

export const Entry = ({ id, date, title, body, url }) => {

    const plantDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch( 
            activePlant( id, {
                date, title, body, url
            })
        );
    }

    return (
        <div 
            className=""
            onClick={ handleEntryClick }
        >
            
            {
                url &&
                <div 
                    className=""
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${ url })`
                    }}
                ></div>
            }

            <div className="">
                <p className="">
                    { title }
                </p>
                <p className="">
                    { body }
                </p>
            </div>

            <div className="">
                <span> { plantDate.format('dddd') } </span>
                <h4> { plantDate.format('Do') } </h4>
            </div>

        </div>
    )
}
