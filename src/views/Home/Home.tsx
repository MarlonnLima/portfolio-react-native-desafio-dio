import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, Linking, TouchableOpacity } from 'react-native';

import { styles } from "./HomeStyles"
import { Link } from '@react-navigation/native';
import { LinkButton } from '../../components/LinkButton/LinkButton';

export default function Home() {
  return (
    <View style={styles.containerApp}>
      <View style={styles.containerPerfil}>
        <Image source={{ uri: "https://portfolio.marlondev.com.br/img/marlon.350125e7.png" }} style={styles.imgPerfil} />
        <Text style={styles.tituloPerfil}>Marlon Lima</Text>
      </View>
      <View style={styles.containerConteudo}>
        <LinkButton text="Linkedin" link='https://www.linkedin.com/in/marlonn-lima/' />
        <LinkButton text="Github" link='https://github.com/MarlonnLima' />
        <Link to={"/About"} style={{ width: '100%', backgroundColor: "#FFF", borderRadius: 25, padding: 16, alignItems: 'center', marginVertical: 10, justifyContent: "center", textAlign: "center"}}>
          <Text>Sobre mim</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}