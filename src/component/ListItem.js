import React, { Component } from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import {CardSection, Card} from './common'
import {Actions} from 'react-native-router-flux'

class ListItem extends Component {
    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee})
    }


    render() {
        const {name} = this.props.employee.item
        const {titleStyle} = styles
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {name}
                        </Text>
                    </CardSection>                
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem