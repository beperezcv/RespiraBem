import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import logo from './logo-rosa.png';
import icon from './seringaroxa.png';

export default function MateriaisDois() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(true);  
    }, []);

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#CE447B', '#9C5DFC']} style={styles.gradient}>

                <Image source={logo} style={styles.logo} />

                <View style={styles.esfera}>
                    <Image source={icon} style={styles.esferaIcon} />
                </View>

                <View style={styles.retangulo}>
                    <Text style={styles.titulo}>Materiais necessários</Text>

                    <Text style={styles.lista}>
                        <Text style={styles.subtitulo}> Dispositivo{"\n"}</Text>
                        - Seringa de 3 a 20 ml ou,{"\n"}
                        - Spray de jato contínuo ou,{"\n"}
                        - Garrafinha
                    </Text>

                    <Text style={styles.lista}>
                        <Text style={styles.subtitulo}> Solução{"\n"}</Text>
                        - Soro fisiológico ou,{"\n"}
                        - Solução salina 0,9% ou,{"\n"}
                        - Solução salina caseira
                    </Text>

                    <TouchableOpacity
                        style={styles.botaoSolucao}
                        onPress={() => navigation.navigate('Solucaocaseira')}
                        accessibilityLabel="Solucaocaseira"
                    >
                        <Text style={styles.botaoSolucaoTexto}>Como fazer Solução Salina Caseira</Text>
                    </TouchableOpacity>

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
                        onPress={() => navigation.navigate('ComofazerDois')}
                        accessibilityLabel="Continuar"
                    >
                        <Text style={styles.botaoTextoContinuar}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.alertBox}>
                        <Text style={styles.alertTitulo}>Aviso Importante</Text>
                        <Text style={styles.alertTexto}>
                            Siga as recomendações do fabricante quanto ao local e temperatura de conservação.
                        </Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.alertBotao}>
                            <Text style={styles.alertBotaoTexto}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        backgroundColor: '#fff',
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
        fontSize: 16,
        lineHeight: 24,
        borderRadius: 10,
        marginBottom: 20
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CE447B'
    },
    botaoSolucao: {
        alignItems: 'center',
        backgroundColor: '#47E9CB',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    botaoSolucaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 15
    },
    voltar: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    alertBox: {
        width: 300,
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        alignItems: 'center'
    },
    alertTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CE447B',
        marginBottom: 10
    },
    alertTexto: {
        color: '#8f8f8f',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight:20
    },
    alertBotao: {
        backgroundColor: '#FBB45D',
        paddingVertical: 10, paddingHorizontal: 30,
        borderRadius: 5 },
    alertBotaoTexto: {
        color: '#fff',
    },
})