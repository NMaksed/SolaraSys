import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundSize: 'cover',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  backgroundBlur: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    filter: 'blur(10px)',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    borderRadius: '40px',
    margin: '100px',
    padding: 20,
  },
  contentBlur: {
    alignItems: 'center',
    zIndex: -1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: 150,
  },
  description: {
    fontSize: 16,
    color: 'white',
    padding: 10,
    textAlign: 'justify',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgb(102, 170, 106)', // Cor do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  loginForm: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1, 
    borderColor: 'white', 
    borderRadius: 5,
    padding: 20,
  },
  loginText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 18,
  },
});

export default styles;