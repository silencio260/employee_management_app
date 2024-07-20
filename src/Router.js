import React from 'react'
import {View} from 'react-native'
import {Router, Scene, Actions} from 'react-native-router-flux'
import LoginForm from './component/LoginForm'
import EmployeeList from './component/EmployeeList'
import EmployeeCreate from './component/EmployeeCreate'
import EmployeeEdit from './component/EmployeeEdit'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                  <Scene key='login' component={LoginForm} title='Please login' initial />
                </Scene>

                <Scene key='main'>
                    <Scene
                        rightTitle='Add'
                        onRight={() => Actions.employeeCreate()}
                        key='employeeList'
                        component={EmployeeList} 
                        title='Employee List'
                        initial
                    />   
                <Scene
                        key='employeeCreate'
                        component={EmployeeCreate} 
                        title='Create Employee'                      
                    />      
                    <Scene
                        key='employeeEdit'
                        component={EmployeeEdit} 
                        title='Edit Employee'                      
                    />             
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent

