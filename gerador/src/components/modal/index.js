import { Text, View, StyleSheet , TouchableOpacity , Pressable } from "react-native";

export function ModalPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.textPassword}>12312361982</Text>
                </Pressable>

                <View>
                    
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
    }
})