import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#FBB45D', '#CE447B']} style={styles.gradient}>

                <Image
                    source={require('./logo.png')}
                    style={styles.image}
                />
                <Text style={styles.texto}>Olá! Tudo bem?</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Sobre')}
                    accessibilityLabel="Iniciar"
                >
                    <Text style={styles.buttonText}>Vamos começar?</Text>
                </TouchableOpacity>

                <Image
                    source={require('./logo-pullmonar.png')}
                    style={styles.logopullmonar}
                />
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    texto: {
        fontSize: 20,
        color: '#fff',
        margin: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 250,
        height: 160,
        margin: 100
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
    },
    buttonText: {
        color: '#9C5DFC',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 20,
    },
    logopullmonar: {
        marginTop: 100
    }
});