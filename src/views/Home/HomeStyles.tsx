import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerApp: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    containerConteudo: {
      flex: 0.70,
      width: "100%",
      padding: 16,
    },
    containerPerfil: {
      flex: 0.30,
      justifyContent: "center",
      alignItems: "center",
    },
    imgPerfil: {
      width: 150,
      height: 150,
      marginTop: 40
    },
    tituloPerfil: {
      fontSize: 30,
      color: "#FFF",
      marginTop: 10
    },
    wrapper: {
      padding: 16
    },
    paragrafo: {
      marginBottom: 10
    },
    textCenter: {
      textAlign: "center"
    }
});
  