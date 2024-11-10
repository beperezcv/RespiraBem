import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

import logo from './logo-verde-es.png';
import icon from './maosverdees.png';

export default function ComofazerAteSeis() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(true); 
    }, []);

    return (

        <View style={styles.container}>
            <LinearGradient colors={['#47E9CB', '#5DFC80']} style={styles.gradient}>
                <Image source={logo} style={styles.logo} />

                <View style={styles.esfera}>
                    <Image source={icon} style={styles.esferaIcon} />
                </View>

                <View style={styles.retangulo}>

                    <Text style={styles.titulo}>Como fazer a higiene nasal</Text>

                    <View style={styles.tabelaTitulo}>
                        <Text style={styles.tabelaTextoTitulo}>Dispositivo</Text>
                        <Text style={styles.tabelaTextoTitulo}>Volume</Text>
                    </View>
                    <View style={styles.tabela}>
                        <Text style={styles.tabelaTexto}>Seringa</Text>
                        <Text style={styles.tabelaTexto}>1 ml por vez</Text>
                    </View>
                    <View style={styles.tabela}>
                        <Text style={styles.tabelaTexto}>Conta-gotas</Text>
                        <Text style={styles.tabelaTexto}>1 conta-gotas</Text>
                    </View>
                    <View style={styles.tabela}>
                        <Text style={styles.tabelaTexto}>Spray de jato único</Text>
                        <Text style={styles.tabelaTexto}>4 a 6 borrifadas</Text>
                    </View>
                    <View style={styles.tabela}>
                        <Text style={styles.tabelaTexto}>Spray de jato contínuo</Text>
                        <Text style={styles.tabelaTexto}>por 3 segundos</Text>
                    </View>

                    <Video
                        source={require('./videoateseis.mp4')} 
                        style={styles.video}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                    />

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
                        onPress={() => navigation.navigate('Papelfisio')}
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
                            Se a criança apresenta alguma alteração neurológica ou respiratória importante, procure orientação profissional antes de realizar as lavagens.
                        </Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.alertBotao}>
                            <Text style={styles.alertBotaoTexto}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
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
        marginTop: 80,
        height: 'auto',
        overflow: 'hidden',
        width: '100%'
    },
    titulo: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 20
    },
    tabelaTitulo: {
        flexDirection: 'row',
    },
    tabelaTextoTitulo: {
        color: '#9C5DFC',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: 160,
        textAlign: 'center',
        padding: 3,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#47E9CB'
    },
    tabela: {
        flexDirection: 'row',
    },
    tabelaTexto: {
        color: '#8f8f8f',
        backgroundColor: '#fff',
        width: 160,
        textAlign: 'center',
        padding: 3,
        borderWidth: 1,
        borderColor: '#47E9CB'
    },
    video: {
        width: '100%',
        height: 200,
        marginTop: 20 
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 15
    },
    voltar: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: 10,
        width: 120,
        borderColor: '#9C5DFC',
        borderRadius: 10,
        borderWidth: 2
    },
    botaoTextoVoltar: {
        textAlign: 'center',
        color: '#9C5DFC',
        fontWeight: 'bold'
    },
    continuar: {
        backgroundColor: '#9C5DFC',
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
        color: '#47E9CB',
        marginBottom: 10
    },
    alertTexto: {
        color: '#8f8f8f',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight:20
    },
    alertBotao: {
        backgroundColor: '#9C5DFC',
        paddingVertical: 10, paddingHorizontal: 30,
        borderRadius: 5
    },
    alertBotaoTexto: {
        color: '#fff',
    },
})