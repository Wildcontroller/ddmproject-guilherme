import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const App = () => {
    const [active_player, setActive_player] = useState("O")
    const [markers, setMarKers] = useState([
        null,null,null,null,null,null,null,null,null
    ])

    const markPosition = (position) => {
        if(!markers[position]){
            let temp = [...markers]
        temp[position] = active_player
        setMarKers(temp)
        if(active_player === "X"){
            setActive_player("O")
        }else{
            setActive_player("X")
        }
      }
    }

    const resetMarkers = () => {
        setMarkers([
            null,null,null,null,null,null,null,null,null
        ])
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0,1,2]
            [3,4,5]
            [0,1,2]
            [6,7,8]
            [0,3,6]
            [1,4,7]
            [2,5,8]
            [0,4,8]
            [2,4,6]
        ];
        for(let i = 0;i < lines.length;i++){
            const [a,b,c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] && squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    useEffect(() => {
        const winner = calculateWinner(markers);
        if(winner === "X"){
            alert("Player  X Won!")
            resetMarkers()
        }else if(winner === "O"){
            alert("Player O Won!")
            resetMarkers()
        }

    },[markers])

    return(
        <SafeAreaView style={style.body}>
            <View style={[styles.playerInfo, {backgroundColor: active_player === "X"?'#007FF4':'#F40075'}]}>
                <Text style={styles.playerTxt}>player X's turn</Text>
            </View>
            <View style={style.mainContainer}>
                <Pressable style = {styles.cell_top_left} onPress={() => markPosition(0)}>
                {markers[0]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[0]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                
                <Pressable style = {styles.cell_top_mid} onPress={() => markPosition(1)}>
                {markers[1]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[1]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                
                <Pressable style = {styles.cell_top_right} onPress={() => markPosition(2)}>
                {markers[2]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[2]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                
                <Pressable style = {styles.cell_mid_left} onPress={() => markPosition(3)}>
                {markers[3]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[3]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                
                <Pressable style = {styles.cell_mid_mid} onPress={() => markPosition(4)}>
                {markers[4]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[4]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                
                <Pressable style = {styles.cell_mid_right} onPress={() => markPosition(5)}>
                {markers[5]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[5]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                
                <Pressable style = {styles.cell_bottom_left} onPress={() => markPosition(6)}>
                {markers[6]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[6]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                
                <Pressable style = {styles.cell_bottom_mid} onPress={() => markPosition(7)}>
                {markers[7]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[7]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                
                <Pressable style = {styles.cell_bottom_right} onPress={() => markPosition(8)}>
                {markers[8]=== "X" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                {markers[8]=== "O" && <Image source={require('./assets/img(cross.png')} style={styles.icon}/>}
                </Pressable>
                <Pressable style = {styles.cancelBTN} onPress ={resetMarkers}>
                <Image source={require('./assets/img/replay.png')} style ={style.cancelIcon}/>
                </Pressable>
                </View>
            </SafeAreaView>
    )
}

export default App
const styles = StyleSheet.create({
    body:{
        flex: 1,
        background: "#fff"
    },
    playerInfo:{
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30
    },
    playerTxt:{
        fontSize: 20,
        fontHeight: "700",
        letterSpacing: 1.2,
        color: '#fff'
    },
    mainContainer:{
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 60

    },
    cell_top_left:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        borderRightWidth: 6,
        borderBottomWidth: 6,
    },
    cell_top_mid:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        borderBottomWidth: 6,
    },
    cell_top_right:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        borderBottomWidth: 6,
        borderLeftWidth: 6,
    },
    cell_mid_left:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        borderRightWidth: 6,
    },
    cell_mid_mid:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
    },
    cell_mid_right:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        borderLeftWidth: 6,
    },
    cell_bottom_left:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        borderWidthRight: 6,
        borderBottomWidth: 6,
    },
    cell_bottom_mid:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        borderTopWidth: 6,
    },
    cell_bottom_right:{
        width: windowWidth/3.2,
        height: WindowWidth/3.2,
        flexDirection: "row",
        justifycontent: "center",
        alignItems: "center",
        borderLeftWidth: 6,
        borderTopWidth: 6,
    },
    icon:{
        height: 62,
        width: 62,
    },

    cancleBTN:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        
    },
    cancelation:{
        height: 80,
        width: 80,
    }
})
