import _ from 'lodash'
import React, { Component } from 'react'
import {View} from 'react-native'
import {connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import {employeeUpdate, employeeSave, employeeDelete} from '../actions'
import {Button, Card, CardSection, Confirm} from './common'
import Communications from 'react-native-communications'

class EmployeeEdit extends Component {

    state = {showModal: false}

    componentWillMount(){
        
        // console.log(this.props.employee)
        _.each(this.props.employee.item, (value, prop) => {
            this.props.employeeUpdate({prop, value})
        })
    }

    onButtonPress(){
        const {name, phone, shift} = this.props.employee.item

        this.props.employeeSave({name, phone, shift, uid: this.props.employee.item.uid})
    }

    onTextPress(){
        const { phone, shift} = this.props.employee.item

        Communications.text(phone, `Your shift is ${shift}`)
    }

    onAccept(){
        const { uid } = this.props.employee.item

        this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({showModal: false})
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                      Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                      Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={
                        () => this.setState({showModal: !this.state.showModal})
                    }>
                      Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this? 
                </Confirm>

            </Card>
        )
    }
}

export default connect(null, 
    {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit)