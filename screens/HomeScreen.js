import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, LayoutAnimation} from 'react-native';
import firebase from 'firebase/app';

export default class HomeScreen extends React.Component {

    state = {
        email: "",
        password: ""
    };

    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser

        this.setState({email, displayName});
    };

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Text>Hi {this.state.email}!</Text>

                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Гарах</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
