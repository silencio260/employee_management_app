import React, { Component } from 'react'
import {View, Text, TextInput} from 'react-native'
import firebase from 'firebase'
import {Button, Card, CardSection, Input, Spinner} from './common'
import {emailChanged, passwordChanged, loginUser} from '../actions'
import {connect} from 'react-redux'


class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text)
    }

    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const {email, password} = this.props
        this.props.loginUser({email, password})
    }

    renderError() {
        if(this.props.error) {
            {console.log(this.props.error)}
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle} >
                        {this.props.error}
                    </Text>
                </View>
            )

        }

    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size='large' />
        }

        return (
            <Button 
                onPress={this.onButtonPress.bind(this)} > 
                Login
            </Button>
        )

    }


    render() {
        return (
            <Card>
                <CardSection>
                <Input
                    label='Email'
                    placeholder='user@gmail.com'
                    value={this.props.email}
                    onChangeText={this.onEmailChange.bind(this)}            
                    />
            
                </CardSection>

                <CardSection>
                <Input
                    secureTextEntry
                    placeholder='password'
                    label='Password'
                    value={this.props.password}
                    onChangeText={this.onPasswordChange.bind(this)}
               />
                </CardSection>

              {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
                
            </Card>
        )
    }
}


const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}


export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm)
