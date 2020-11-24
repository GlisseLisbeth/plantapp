import { db } from '../configuration/firebase-config';



export const loadPlants = async ( uid ) => {

    const plantsSnap = await db.collection(`${ uid }/administration/plants`).get();
    const plants = [];

    plantsSnap.forEach( snapChild => {
        plants.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    });
    
    return plants;
}



