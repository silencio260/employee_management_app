import _ from 'lodash'
import React, { Component } from 'react'
import {View, FlatList, ScrollView, Text} from 'react-native'
import {employeesFetch} from '../actions'
import {connect} from 'react-redux'
import ListItem from './ListItem'

class EmployeeList extends Component {

    componentDidMount(){

        this.props.employeesFetch()
    }

    componentWillReceiveProps(nextProps){
        this.forceUpdate()
    }

    renderItem(employee){
    
        return <ListItem employee={employee} />
    }


    render() {
 
        return (
           <FlatList 
                data={this.props.employees}
                renderItem={this.renderItem}
                keyExtractor={(employee) => employee.uid}
            />
        )
    }
}

const mapStateToProps = state => {
    
    const employees = _.map(state.employees, (val, uid) => {

        return {...val, uid}     
    })

    return {employees}
}


export default connect(mapStateToProps, {employeesFetch})(EmployeeList)