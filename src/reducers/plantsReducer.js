import { types } from '../types/types';

const initialState = {
    plants: [],
    active: null
}


const plantsReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.plantsActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        
        case  types.plantsAddNew:
            return {
                ...state,
                plants: [ action.payload, ...state.plants ]
            }

        case types.plantsLoad:
            return {
                ...state,
                plants: [ ...action.payload ]
            }
    
        case types.plantsUpdated:
            return {
                ...state,
                plants: state.plants.map(
                    plant => plant.id === action.payload.id
                        ? action.payload.plant
                        : plant
                )
            }

        case types.plantsDelete:
            return {
                ...state,
                active: null,
                plants: state.plants.filter( plant => plant.id !== action.payload )
            } 

        case types.plantsLogoutCleaning:
            return {
                ...state,
                active: null,
                plants: []
            }

        default:
            return state
    }


}

export default plantsReducer;