import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

import logo from './logo-verde-es.png';
import icon from './iconlogoverdees.png';
import seringa from './seringaverdecl.png';
import maos from './maosverdees.png';
import torneira from './torneiraroxa.png';
import sino from './sino.png';

export default function Ateseis() {
    const navigation = useNavigation();
    const [reminderEnabled, setReminderEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleToggleReminder = async () => {
        if (reminderEnabled) {
            // Desativar o lembrete
            await Notifications.cancelAllScheduledNotificationsAsync();
            setAlertMessage("Lembrete desativado");
            setModalVisible(true);
        } else {
            // Ativar o lembrete
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Hora da Higiene Nasal!",
                    body: "Já lavou o nariz do seu bebê hoje?",
                },
                trigger: {
                    hour: 18,
                    minute: 0,
                    repeats: true,
                },
            });
            setAlertMessage("Lembrete ativado com sucesso");
            setModalVisible(true);
        }
        setReminderEnabled(!reminderEnabled);
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#47E9CB', '#5DFC80']} style={styles.gradient}>

                <Image source={logo} style={styles.logo} />

                <View style={styles.esfera}>
                    <Image source={icon} style={styles.esferaIcon} />
                </View>

                <View style={styles.retangulo}>
                    <Text style={styles.titulo}>{"\n"}Até 6 meses{"\n"}</Text>

                    <TouchableOpacity
                        style={[styles.botao, styles.botaoVerdeCl]}
                        onPress={() => navigation.navigate('MateriaisAteSeis')}
                        accessibilityLabel="MateriaisAteSeis">
                        <Image source={seringa} style={styles.logobotao} />
                        <Text style={styles.botaoTextoVerde}>Materiais Necessários</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.botao, styles.botaoVerdeEs]}
                        onPress={() => navigation.navigate('ComofazerAteSeis')}
                        accessibilityLabel="ComofazerAteSeis">
                        <Image source={maos} style={styles.logobotao} />
                        <Text style={styles.botaoTextoVerdeEs}>Como fazer a higiene nasal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.botao, styles.botaoRoxo]}
                        onPress={() => navigation.navigate('Higienizardispositivo')}
                        accessibilityLabel="Higienizardispositivo">
                        <Image source={torneira} style={styles.logobotao} />
                        <Text style={styles.botaoTextoRoxo}>Como higienizar os dispositivos</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.botaoRelogio]}
                    onPress={handleToggleReminder}
                    accessibilityLabel="Lembrete">
                    <Image source={sino} style={styles.logobotaoRelogio} />
                    <Text style={styles.botaoTextoAlarme}>
                        {reminderEnabled ? "Desativar lembrete diário" : "Ativar lembrete diário"}
                    </Text>
                </TouchableOpacity>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.alertBox}>
                            <Text style={styles.alertTitulo}>Aviso</Text>
                            <Text style={styles.alertTexto}>{alertMessage}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.alertBotao}>
                                <Text style={styles.alertBotaoTexto}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
        top: 10,
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: 300,
        marginBottom: 20,
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
        color: '#5DFC80',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 25,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    botaoTextoVerdeEs: {
        color: '#47E9CB',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 15,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    botaoTextoRoxo: {
        color: '#9C5DFC',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 10,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    botaoRelogio: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9C5DFC',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    logobotaoRelogio: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10,
    },
    botaoTextoAlarme: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertBox: {
        width: 300,
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    alertTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#47E9CB',
        marginBottom: 10,
    },
    alertTexto: {
        color: '#8f8f8f',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 20,
    },
    alertBotao: {
        backgroundColor: '#9C5DFC',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5
    },
    alertBotaoTexto: {
        color: '#fff',
    },
});
