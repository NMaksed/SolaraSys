import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '93vh',
        padding: "1%",
        backgroundColor: "#F6EEEE",
        alignItems: "center",
        justifyContent: "space-around",
        overflow: "auto",
      },
    boxStyle: {
        height: '100%',
        width: '100%',
        borderRadius: '30px',
        backgroundImage: "linear-gradient(90deg, rgba(255,187,107,1) 0%, rgba(255,174,100,1) 0%, rgba(209,133,255,1) 100%)",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    funcionario: {
        backgroundImage: "linear-gradient(180deg, rgb(255, 198.79, 132.81) 8.85%,rgb(255, 187.06, 107.31) 36.84%,rgb(255, 230.07, 200.81) 100%",
        width: "100%", 
        height: "30%",
        borderRadius: '30px',
        marginTop: "50px",
        minHeight: "65px",
        maxHeight: "100px",
        minWidth: "200px",
        textDecoration: "none", 
        color: "black",
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