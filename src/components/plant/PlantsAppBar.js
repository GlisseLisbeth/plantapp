import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSavePlant, startUploading } from '../../actions/plants';

const PlantsAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.plants );

    const handleSave = () => {
        dispatch( startSavePlant( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    return (
        <div className="">
            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default PlantsAppBar;