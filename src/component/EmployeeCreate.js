import React, { Component } from 'react'
import {View} from 'react-native'
import {connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import {employeeUpdate, employeeCreate} from '../actions'
import {Button, Card, CardSection, Spinner} from './common'

class EmployeeCreate extends Component {

    onButtonPress(){
        const {name, phone, shift} = this.props

        this.props.employeeCreate({name, phone, shift})
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                      Create
                    </Button>
                </CardSection>

            </Card>
        )
    }
}


const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm

    return {name, phone, shift}
    
}

export default connect( mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate)