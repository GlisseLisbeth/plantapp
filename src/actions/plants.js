import Swal from 'sweetalert2';

import { db } from '../configuration/firebase-config';
import { types } from '../types/types';
import { loadPlants } from '../helpers/loadPlants';
import { fileUpload } from '../helpers/fileUpload';


export const startNewPlant = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        const newPlant = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            const doc = await db.collection(`${ uid }/plants`).add( newPlant );
    
            dispatch( activePlant( doc.id, newPlant ) );
            dispatch( addNewPlant( doc.id, newPlant ) );
            
        } catch (error) {
            console.log(error);
        }


    }
}

export const activePlant = ( id, plant ) => ({
    type: types.plantsActive,
    payload: {
        id,
        ...plant
    }
});

export const addNewPlant = ( id, plant ) => ({
    type: types.plantsAddNew,
    payload: {
        id, ...plant
    }
})


export const startLoadingPlants = ( uid ) => {
    return async( dispatch ) => {
        
        const plants = await loadPlants( uid );
        dispatch( setPlants( plants ) );

    }
}


export const setPlants = ( plants ) => ({
    type: types.plantsLoad,
    payload: plants
});


export const startSavePlant = ( plant ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if ( !plant.url ){
            delete plant.url;
        }

        const plantToFirestore = { ...plant };
        delete plantToFirestore.id;

        await db.doc(`${ uid }/plants/${ plant.id }`).update( plantToFirestore );

        dispatch( refreshPlant( plant.id, plantToFirestore ) );
        Swal.fire('Saved', plant.title, 'success');
    }
}

export const refreshPlant = ( id, plant ) => ({
    type: types.plantsUpdated,
    payload: {
        id,
        plant: {
            id,
            ...plant
        }
    }
});


export const startUploading = ( file ) => {
    return async( dispatch, getState ) => {

        const { active:activePlant } = getState().plants;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
        activePlant.url = fileUrl;

        dispatch( startSavePlant( activePlant ) )
        

        Swal.close();
    }
}


export const startDeleting = ( id ) => {
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/plants/${ id }`).delete();

        dispatch( deletePlant(id) );

    }
}

export const deletePlant = (id) => ({
    type: types.plantsDelete,
    payload: id
});


export const plantLogout = () => ({
    type: types.plantsLogoutCleaning
});
