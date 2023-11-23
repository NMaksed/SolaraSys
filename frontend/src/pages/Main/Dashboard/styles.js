import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    texto: {
        textAlign: "justify",
        fontSize: 18,
        fontFamily: "Montserrat",
        width: "80%",
        margin: "0 auto", // Centraliza o texto horizontalmente
        lineHeight: 1.5, // Espaçamento entre linhas
    },
    solara: {
        fontFamily: "Montserrat",
        textAlign: "center",
        fontSize: 60,
        color: 'black',
        marginTop: 20, // Adiciona um espaço acima do título
    },
    paragrafo: {
        marginLeft: 10,
        marginBottom: 20, // Adiciona um espaço abaixo dos parágrafos
        fontSize: 16,
    },
    cabecalho: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold', // Deixa o cabeçalho em negrito
        marginBottom: 10, // Adiciona um espaço abaixo do cabeçalho
    }
})

export default styles;