import {EMPLOYEES_FETCH_SUCCESS} from '../actions/types'

const INITIAL_STATE = {

    // '-M5EtocLJbbSSjSY7GDf': {
    //     name: 'template'
    // }

 }

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
       default:
            return state;
    }
}
