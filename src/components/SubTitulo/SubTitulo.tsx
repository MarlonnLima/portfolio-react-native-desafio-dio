import { Text, View } from 'react-native';
import { styles } from './SubTituloStyle';

interface props {
    texto: string
}

export function SubTitulo(props: props) {
    return (
        <Text style={styles.subtitulo}>{props.texto}</Text>
    );
}