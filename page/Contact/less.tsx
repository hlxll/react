import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    searchView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    searchinput:{
        width: '90vw',
        marginLeft: '5vw',
        marginRight: '5vw',
        height: 30,
        backgroundColor: '#ddd'
    },
    wantKnow: {
        width: '100vw',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: 'white'
    },
    wantknowItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    wantknowImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10
    },
    wantKnowTitle: {
        width: 'calc(100% - 115px)',
    },
    wantTitle: {
        fontWeight: '600'
    },
    wantTip: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 12
    },
    addBtn: {
        width: 50,
        height: 25,
        lineHeight: 25,
        textAlign: 'center',
        border: '1px solid #ddd',
        marginRight: 5
    },
    newFriend: {
        marginTop: 10,
        backgroundColor: 'white',
        paddingLeft: '5vw',
        paddingRight: '5vw'
    },
    newFriendItem: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        alignItems:'center'
    },
    tagMenu: {
        marginTop: 10,
        backgroundColor: 'white'
    },
    unClickTab: {
        color: 'black',
        width: 'max-content',
        margin: 'auto',
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
        borderStyle: 'solid',
    },
    tagMenuitem: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10
    },
    menuitem: {
        width: '16.6%',
    },
    clickTab: {
        width: 'max-content',
        margin: 'auto',
        color: 'blue',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        borderStyle: 'solid',
    }
})
export default styles;