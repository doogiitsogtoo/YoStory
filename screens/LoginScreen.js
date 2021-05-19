import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, LayoutAnimation} from 'react-native';
import firebase from 'firebase/app';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}));
    };

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>

                <Image 
                    source={require("../assets/header.png")} 
                    style={{height: 150}}
                ></Image>

                <Image 
                    source={require("../assets/YoStory_new.png")} 
                    style={{marginTop: -30, alignLeft: "center", width: 90, height: 80, marginLeft: 140}}
                ></Image>

                <Text style={styles.greeting}>
                    {'YoStory-д тавтай морил'}
                </Text>

                <View style={styles.errorMessage}>
                    {this.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Имэйл хаяг</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}            
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Нууц үг</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry autoCapitalize="none" 
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>
    
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.handleLogin}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Нэвтрэх</Text> 
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}}
                    onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{color: "414959", fontSize: 13}}>
                        Шинэлэг Yostory? <Text style={{fontWeight: "500", color: "#49abf4"}}>Бүртгүүлэх</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#90caf9"
    },
    greeting: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30 
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },  
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8a8f9e",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8a8f9e",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#55aff8",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});