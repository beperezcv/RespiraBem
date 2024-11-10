import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import logo from './logo-rosa.png';
import icon from './iconesteto.png';

export default function Papelfisio() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <LinearGradient colors={['#FBB45D', '#CE447B']} style={styles.gradient}>
                <Image source={logo} style={styles.logo} />

                <View style={styles.esfera}>
                    <Image source={icon} style={styles.esferaIcon} />
                </View>

                <View style={styles.retangulo}>
                    <Text style={styles.titulo}>O Papel do Fisioterapeuta</Text>

                    <Text style={styles.informativo}>
                        A fisioterapia respiratória em Pediatria desempenha um papel importante no alívio dos sintomas.{"\n\n"}
                        Por meio de avaliações e da aplicação de técnicas manuais e específicas, ela promove a liberação das secreções que obstruem as vias aéreas centrais e periféricas.{"\n\n"}
                        <Text style = {{ fontWeight: 'bold'}}>Procure sempre um especialista!</Text>
                    </Text>

                </View>

                <View style={styles.rodape}>
                    <TouchableOpacity
                        style={styles.voltar}
                        onPress={() => navigation.goBack()}
                        accessibilityLabel="Voltar"
                    >
                        <Text style={styles.botaoTextoVoltar}>VOLTAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.continuar}
                        onPress={() => navigation.navigate('Referencias')}
                        accessibilityLabel="Continuar"
                    >
                        <Text style={styles.botaoTextoContinuar}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    )
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
        backgroundColor: '#CE447B',
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
        marginBottom: 20,
        marginTop: 50,  
    },
    titulo: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 20,
        marginTop: 40,
    },
    informativo: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
        paddingHorizontal: 20,
        lineHeight: 22,
        marginTop:15
    },
    rodape: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    voltar: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        width: 120,
        borderColor: '#FBB45D',
        borderRadius: 10,
        borderWidth: 2
    },
    botaoTextoVoltar: {
        textAlign: 'center',
        color: '#FBB45D',
        fontWeight: 'bold'
    },
    continuar: {
        backgroundColor: '#FBB45D',
        padding: 10,
        width: 120,
        borderRadius: 10,
    },
    botaoTextoContinuar: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
})