import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#fff',
        paddingTop: height*0.04,
    },
    rowView:{
        flexDirection: 'row',
        paddingHorizontal: width*0.02,
    }
})