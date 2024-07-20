import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE, 
    EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS} from './types'
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
}

export const employeeCreate = ({name, phone, shift}) => {

    const {currentUser} = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({type: EMPLOYEE_CREATE})
            Actions.employeeList({type: 'reset'})
        })
    }
}

export const employeesFetch = () => {
    const {currentUser} = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                // console.log( snapshot.val()['-M5EtocLJbbSSjSY7GDf'])
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            }, err => console.log('####' + err)
        )
    }
}

export const employeeSave = ({name, phone, shift, uid}) => {

    const {currentUser} = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({type: EMPLOYEE_SAVE_SUCCESS})
                // console.log('========'+'save success')
                Actions.employeeList({type: 'reset'})
            })
    }
}

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth()

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({type: 'reset'})
            })
    }

}