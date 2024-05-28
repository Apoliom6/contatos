import { TextInput, View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useState } from 'react'
import { useNavigation} from '@react-navigation/native'

export function Login(){

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    const navegacao = useNavigation()

    function validarUsuario(){
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)

        navegacao.navigate('inicial')
    }

    function cadastrarUsuario(){
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)

        navegacao.navigate('usuarios')
    }


    return(
        <View style={estilos.conteiner}>
            <TextInput
                style={estilos.campo}
                placeholder='E-mail'
                placeholderTextColor='#a9d6e5'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={estilos.campo}
                placeholder='Senha'
                placeholderTextColor='#a9d6e5'
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity 
                style={estilos.botao}
                onPress={validarUsuario}
            > 
                <Text style={estilos.textoBotao}> Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={estilos.cadastro}
                onPress={cadastrarUsuario}
            > 
                <Text style={estilos.textoCadastro}> Cadastre-se </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    campo: {
        height: 50,
        width: 300,
        backgroundColor: '#01233c',
        color: '#a9d6e5',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16
    },
    botao: {
        height: 50,
        width: 300,
        backgroundColor: '#01233c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 20
    },
    textoBotao: {
        color: '#a9d6e5',
        fontSize: 16
    },
    cadastro: {
        width: 300,
        alignItems: 'flex-end',
        marginTop: 2
    },
    textoCadastro: {
        color: '#a9d6e5',
    }
})