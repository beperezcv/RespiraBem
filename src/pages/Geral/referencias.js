import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import logo from './logo-rosa.png';
import icon from './iconlivro.png';

export default function Referencias() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <LinearGradient colors={['#FBB45D', '#CE447B']} style={styles.gradient}>
                <Image source={logo} style={styles.logo} />

                <View style={styles.esfera}>
                    <Image source={icon} style={styles.esferaIcon} />
                </View>

                <View style={styles.retangulo}>
                    <Text style={styles.titulo}>Referências Bibliográficas</Text>

                    <Text style={styles.informativo}>
                    Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial. (2022). Manual de lavagem nasal (Versão 2). Disponível em https://aborlccf.org.br{"\n\n"}
                    Romeiros, S. R. (2017). IV Consenso Brasileiro sobre Rinites 2017. Departamento Científico SPSP, Gestão 2019-2022. CREFITO 258500F.{"\n\n"}
                    Sociedade Brasileira de Pediatria. (2023). Guia prático de atualização: lavagem nasal (Nº 120). Departamento Científico de Otorrinolaringologia, gestão 2022-2024.{"\n\n"}    
                    Saline Nasal Irrigation for Upper Respiratory Conditions. (2009, November 15). American Family Physician, 80(10), 1117–1119. Disponível no NIH Public Access em PMC, com versão editada.{"\n\n"}
                    Sociedade de Pediatria de São Paulo. (2019-2022). Atualização de condutas em pediatria: limpeza nasal – como fazer. Diretoria de Publicações.
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
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
        paddingHorizontal: 10,
        marginTop: 30,
    },
    informativo: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 15,
        paddingHorizontal: 10,
        lineHeight: 15,
        marginTop:15
    },
    rodape: {
        position: 'absolute',
        bottom:40,
        position: 'absolute',
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