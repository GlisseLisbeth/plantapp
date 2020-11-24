import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlantsAppBar from './PlantsAppBar';
import { useForm } from '../../hooks/useForm';
import { activePlant, startDeleting } from '../../actions/plants';

const Plant = () => {

    const dispatch = useDispatch();

    const { active:plant } = useSelector( state => state.plants );
    const [ formValues, handleInputChange, reset ] = useForm( plant );
    const { body, title, id } = formValues;

    const activeId = useRef( plant.id );

    useEffect(() => {
        
        if ( plant.id !== activeId.current ) {
            reset( plant );
            activeId.current = plant.id
        }

    }, [plant, reset])

    useEffect(() => {
        
        dispatch( activePlant( formValues.id, { ...formValues } ) );

    }, [formValues, dispatch])


    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }


    return (
        <div className="">
            
            <PlantsAppBar />

            <div className="">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="plants__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="plants__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    (plant.url) 
                    && (
                        <div className="plants__image">
                            <img 
                                src={ plant.url }
                                alt="imagen"
                            />
                        </div>
                    )
                }


            </div>


            <button 
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    )
}

export default Plant;