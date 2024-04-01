import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView } from 'react-native';
import { SubTitulo } from '../../components/SubTitulo/SubTitulo';
import { ListItem } from '../../components/ListItem/ListItem';

import logoRpgHelper from "../../../assets/images/logo-rpg-helper.png";

import { styles }  from "./AboutStyles"

export default function About() {
  return (
    <View style={styles.containerApp}>
      <View style={styles.containerPerfil}>
        <Image source={{ uri: "https://portfolio.marlondev.com.br/img/marlon.350125e7.png" }} style={styles.imgPerfil} />
        <Text style={styles.tituloPerfil}>Marlon Lima</Text>
      </View>
      <View style={styles.containerConteudo}>
        <ScrollView style={styles.wrapper}>
          <SubTitulo texto='Sobre' />
          <Text style={styles.paragrafo}>Estudante de análise de sistemas pela Uninter e Desenvolvedor .NET profissionalmente. Atualmente estou empreendendo e desenvolvendo meus próprios aplicativos para a play store.</Text>
          <Text style={styles.paragrafo}>Na area Mobile já utilizei tecnologias como: React Native, Kotlin e Xamarin.</Text>

          <SubTitulo texto='Habilidades' />
          <Text>Tenho experiências em diversas tecnologias para uso em mobile, backend e frontend, veja minhas habilidades abaixo.</Text>
          <Text style={styles.textCenter}>---------- Mobile ----------</Text>
          <Text>React Native: ⭐ ⭐ ⭐ ⭐</Text>
          <Text>Kotlin: ⭐ ⭐ ⭐</Text>
          <Text>Xamarin: ⭐ ⭐</Text>

          <Text style={styles.textCenter}>---------- Front End ----------</Text>
          <Text>React: ⭐ ⭐ ⭐ ⭐</Text>
          <Text>Vue: ⭐ ⭐ ⭐</Text>
          <Text>JS: ⭐ ⭐ ⭐ ⭐ ⭐</Text>
          <Text>HTML: ⭐ ⭐ ⭐ ⭐ ⭐</Text>
          <Text>CSS: ⭐ ⭐ ⭐ ⭐ ⭐</Text>

          <Text style={styles.textCenter}>---------- Back End ----------</Text>
          <Text>C#: ⭐ ⭐ ⭐ ⭐</Text>
          <Text>PHP: ⭐ ⭐ ⭐</Text>

          <SubTitulo texto='Em desenvolvimento' />
          <Text>Dedico essa área a projetos em desenvolvimento/deploy na loja de aplicativos.</Text>
          <ListItem title='RPG HELPER: ROLL DICES' image={logoRpgHelper} />
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}