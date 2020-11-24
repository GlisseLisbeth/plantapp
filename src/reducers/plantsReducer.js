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
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        case types.plantsDelete:
            return {
                ...state,
                active: null,
                plants: state.plants.filter( note => note.id !== action.payload )
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