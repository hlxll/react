import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    frequency:{
        display: 'flex',
        flexDirection: 'row'
    },
    frequency_leftMenu:{
        backgroundColor: "#ddd",
        width: 50,
        padding: 5,
        height: "100vh"
    },
    leftMenuSize: {
        width: 40,
        height: 40,
        marginTop: 10,
        position: 'relative',
    },
    rightTop: {
        backgroundColor: 'blue',
        minWidth: 12,
        width: 'auto',
        height: 12,
        borderRadius: 6,
        position: 'absolute',
        right: 0,
        top: 0,
        color: 'white',
        fontSize: 6,
        lineHeight: 12
    },
    rightBottom:{
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#ddd',
        width: 16,
        height: 16,
        borderRadius: 8,
        overflow: 'hidden'
    },
    menuClick: {
        borderWidth: 2,
        borderColor: 'blue',
        borderStyle: 'solid',
        width: 44,
        height: 44
    },
    headImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    homeIcon: {
        marginTop: 10,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        lineHeight: 40,
        paddingTop: 10,
        textAlign: 'center'
    },
    photoImage:{
        width: 40,
        height: 40,
    },
    photoIma: {
        width: 40,
        height: 40
    },
    frequency_right: {
        width: "calc(100% - 50px)",
        padding: 10
    },
    rightSetIcon: {
        height: 0,
        textAlign: 'right',
        paddingTop: 10,
    },
    right_top_iamge: {
        width: '100%',
        position: 'relative',
    },
    username: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 5
    },
    userDetail: {
        textAlign: 'center',
        fontSize: 6,
        height: 20,
        lineHeight: 20,
        color: 'rgba(0,0,0,0.6)'
    },
    right_iamge: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 'auto'
    },
    imagePen: {
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: 8,
        left: 'calc(50% + 10px)',
        top: 45,
        backgroundColor: 'white',
        color: '#ddd'
    },
    menuRoute: {
        backgroundColor: '#ddd',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        color: 'rgba(0,0,0,0.6)'
    },
    leftText: {
    },
    maxText: {
        fontSize: 14,
        fontWeight: '600'
    },
    minText: {
        fontSize: 6,
        color: 'rgba(0,0,0,0.6)'
    },
    rightIcon: {
        marginLeft: 'auto',
        fontSize: 12
    }

})
export default styles;