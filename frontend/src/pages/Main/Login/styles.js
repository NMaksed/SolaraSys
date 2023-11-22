import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        borderRadius: 16,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 30,
        shadowOpacity: 1,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 1)',
        padding: '2rem',
        width: '600px',
        height: '300px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },


    containerForm: {
        height: '90%',
        justifyContent: 'center',
        width: '40%',
        alignItems: 'center',
    },
    loginText: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 18,
    },
    loginForm: {
        position: 'absolute',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 20,
    },
    TextField: {
        marginBottom: '15px',
    },
    button: {
        width: 100,
        borderRadius: 20,
        backgroundColor: 'darkblue',
        alignSelf: 'center',
    },


    separator: {
        marginVertical: 20,
        borderLeftWidth: 2,
        borderLeftColor: 'gray',
        height: '100%',
        margin: 20,
    },
    containerLogo: {
        width: '40%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 90,
        height: 60,
        resizeMode: 'contain',
    },
    textoBonitinho: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Helvetica',
        textAlign: 'center',
        marginVertical: 10,
    },
    buttonContainer: {
        marginTop: 50,
        textDecorationLine: 'underline',
    },
    textCase: {
        fontSize: 16,
    },

    separatorH: {
        marginVertical: 20,
        borderTopWidth: 2,
        borderTopColor: 'gray',
        width: '100%', 
        margin: 20,
    },
    mobileContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        borderRadius: 16,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 1)',
        padding: 16,
        width: '80%', 
        maxWidth: 600, 
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height:'auto',
       
      },
      containerFormMobile: {
        height: '90%',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        flexShrink:1
    },
  });

export default styles;
