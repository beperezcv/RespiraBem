import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import logo from './logo-rosa.png';
import icon from './icontorneira.png';

export default function Higienizardispositivo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#FBB45D', '#CE447B']} style={styles.gradient}>
                <Image source={logo} style={styles.logo} />

                <View style={styles.esfera}>
                    <Image source={icon} style={styles.esferaIcon} />
                </View>

                <View style={styles.retangulo}>
                    <Text style={styles.titulo}>Como higienizar os dispositivos</Text>

                    <Text style={styles.lista}>
                        1. Limpe o bico a cada uso.{"\n\n"}
                        2. Higienize o reservatório interno com água corrente e sabão neutro pelo menos uma vez por dia e seque bem.{"\n\n"}
                        3. Mantenha o dispositivo armazenado em local seco e limpo.{"\n\n"}
                        4. Não utilize o dispositivo em caso de sujidade evidente.{"\n\n"}
                        5. Substitua o dispositivo periodicamente, idealmente antes de 3 meses.{"\n\n"}
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
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 110,
    },
    titulo: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 30,
        marginBottom: 20
    },
    lista: {
        backgroundColor: '#fff',
        width: 300,
        paddingHorizontal: 30,
        paddingVertical: 20,
        color: '#8f8f8f',
        fontSize: 14,
        borderRadius: 10,
        marginBottom: 20
    },
    atencao: {
        backgroundColor: '#FBB45D',
        width: 300,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    iconAtencao: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginRight: 10,
    },
    atencaoTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 15
    },
    voltar: {
        backgroundColor: '#FBB45D',
        padding: 10,
        width: 120,
        borderRadius: 10,
    },
    botaoTextoVoltar: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
})