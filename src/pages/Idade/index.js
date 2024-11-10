import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import logo from './logo-verde-es.png';
import icon from './iconidade.png';
import logobotaoverdees from './logobotaoverdees.png';
import logobotaoroxo from './logobotaoroxo.png';
import logobotaorosa from './logobotaorosa.png';


export default function Idade() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#9C5DFC', '#47E9CB']} style={styles.gradient}>

                <Image source={logo} style={styles.logo} />

                <View style={styles.esfera}>
                    <Image source={icon} style={styles.esferaIcon} />
                </View>

                <View style={styles.retangulo}>
                    <Text style={styles.titulo}>Qual a idade do seu bebê ou criança?</Text>

                    <TouchableOpacity 
                        style={[styles.botao, styles.botaoVerde]} 
                        onPress={() => navigation.navigate('Ateseis')}
                        accessibilityLabel="Até 6 meses">
                        <Image source={logobotaoverdees} style={styles.logobotao} />
                        <Text style={styles.botaoTextoVerde}>Até 6 meses</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.botao, styles.botaoRoxo]} 
                        onPress={() => navigation.navigate('SeisaDois')}
                        accessibilityLabel="De 6 meses a 2 anos">
                        <Image source={logobotaoroxo} style={styles.logobotao} />
                        <Text style={styles.botaoTextoRoxo}>De 6 meses a 2 anos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.botao, styles.botaoRosa]} 
                        onPress={() => navigation.navigate('Dois')}
                        accessibilityLabel="A partir de 2 anos">
                        <Image source={logobotaorosa} style={styles.logobotao} />
                        <Text style={styles.botaoTextoRosa}>A partir de 2 anos</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        position: 'absolute',
        top: 30,
        left: 20,
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    esfera: {
        position: 'absolute',
        top: 80,  
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: '#47E9CB',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,  
    },
    esferaIcon: {
        width: 60,  
        height: 60,
        resizeMode: 'contain',
    },
    retangulo: {
        position: 'absolute',
        top: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 20,
        borderRadius: 8, 
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 50,  
    },    
    titulo: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        paddingHorizontal: 20,
        marginTop: 30,
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: 300,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    logobotao: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginRight: 10,
    },
    botaoTextoVerde: {
        color: '#47E9CB',
        fontWeight: 'bold',
        fontSize: 18,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    botaoTextoRoxo: {
        color: '#9C5DFC',
        fontWeight: 'bold',
        fontSize: 18,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    botaoTextoRosa: {
        color: '#CE447B',
        fontWeight: 'bold',
        fontSize: 18,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
});
