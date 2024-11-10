import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import logo from './logo-rosa.png';
import icon from './iconsobre.png';  

export default function Sobre() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#CE447B', '#9C5DFC']} style={styles.gradient}>
                
                <Image source={logo} style={styles.logo} />
                
                <View style={styles.esfera}>
                    <Image source={icon} style={styles.esferaIcon} />
                </View>
                
                <View style={styles.retangulo}>
                    <Text style={styles.titulo}>
                        Por que é preciso fazer higiene nasal nos bebês e crianças?
                    </Text>
                
                    <Text style={styles.informativo}>
                        As Crianças apresentam o nariz mais estreito e, até por volta de seis meses, respiram apenas pelo nariz.{"\n\n"}
                        Qualquer obstrução nasal provocada por excesso de secreções pode provocar dificuldade de respirar, alimentar-se e dormir.{"\n\n"}
                        Além disso, uma rotina de higiene nasal, ajuda a prevenir infecções respiratórias. 
                    </Text>
                </View>
                
                
                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={() => navigation.navigate('Idade')}
                    accessibilityLabel="Continuar"
                >
                    <Text style={styles.botaoTexto}>Continuar</Text>
                </TouchableOpacity>
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
        backgroundColor: '#9C5DFC',
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
        top: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 40,
        marginTop:40
       
    },    
    titulo: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        paddingHorizontal: 20,
        marginTop: 25,
    },
    informativo: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
        lineHeight: 22,
    },
    botao: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
       
    },
    botaoTexto: {
        color: '#9C5DFC',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});