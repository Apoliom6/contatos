import { TextInput, View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useState } from 'react'
import { Cabecalho} from '../componentes/Cabecalho'

export function Usuarios (){
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    function validarUsuario(){
        console.log(`Nome: ${nome}`)
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)
    }

    return(
        <>
        <Cabecalho titulo= "Cadastrar-se"/> 
        <View style={estilos.conteiner}>
             <TextInput
                style={estilos.campo}
                placeholder='Nome'
                placeholderTextColor='#a9d6e5'
                value={nome}
                onChangeText={setNome}
            />

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
        </View>
        </>
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
        fontSize: 16,
        
    }
})