import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import * as Speech from 'expo-speech';
import {useState} from "react";

export default function App() {

    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput style={{borderColor: 'black', borderWidth: 1, width: '90%', textAlign: 'center'}}
                       onChangeText={text => setText(text)}
                       value={text}
                       placeholderTextColor={'grey'}
                       placeholder={'Insert text to speech'}/>
            <Button title={'Press to hear!'} onPress={() => {
                Speech.speak(text)
            }}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '5%',
    },
});
