import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F6EEEE",
        height: "100vh",
    },
    boxStyle: {
        height: '257px',
        width: '744px',
        borderRadius: '30px',
        backgroundImage: "linear-gradient(90deg, rgba(255,187,107,1) 0%, rgba(255,174,100,1) 0%, rgba(209,133,255,1) 100%)",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    nome: {
        backgroundImage: "linear-gradient(180deg, rgb(219.64, 165.42, 252.88) 8.85%,rgb(197.26, 103.06, 255) 36.84%, rgb(220.68, 164.69, 255) 100%",
        height: "120px",
        borderRadius: '30px',
        width: "283px",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    funcionario: {
        backgroundImage: "linear-gradient(180deg, rgb(255, 198.79, 132.81) 8.85%,rgb(255, 187.06, 107.31) 36.84%,rgb(255, 230.07, 200.81) 100%",
        height: "120px", 
        width: "283px", 
        borderRadius: '30px',
        marginTop: "50px",
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    cabecalho: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold', // Deixa o cabeçalho em negrito
        marginBottom: 10, // Adiciona um espaço abaixo do cabeçalho
    }
})

export default styles;