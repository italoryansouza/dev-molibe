import { Text, View, StyleSheet , TouchableOpacity , Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'

export function ModalPassword({ password, handleClose }){

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        alert("Senha salva com sucesso");
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}> 
                    <Text style={styles.textPassword}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonsContainer}>

                    <TouchableOpacity style={styles.buttons} onPress={handleClose}>
                        <Text style={styles.buttonsText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttons, styles.buttonSave]}>
                        <Text style={[styles.buttonsText, styles.buttonSaveText]}>Salvar Senha</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: "#FFF",
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24,
    },
    innerPassword:{
        backgroundColor: '#000',
        paddingTop: 10,
        paddingBottom: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    textPassword:{
        fontSize: 20,
        color: '#FFF'
    },
    buttonsContainer:{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    buttons:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20
    },
    buttonSave:{
        backgroundColor: "#392DE9",

    },  
    buttonsText:{
        fontSize: 18
    },
    buttonSaveText:{
        color: '#fff',
        fontWeight: 'bold',
    }
})