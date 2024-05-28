import { View, StyleSheet, Text } from 'react-native'
import { Cabecalho} from '../componentes/Cabecalho'

export function Inicial(){
    return(
        <>
        <Cabecalho titulo= "Inicial" />
        <View style={estilos.conteiner}>
            
        </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
})