import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    bigTitle: {
        color: 'blue',
        fontSize: 12
    },
    goodFriend:{
        paddingTop: 20,
        backgroundColor: 'white',
        width: '90vw',
        margin: 'auto'
    },
    friendItem: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    friendHead: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    friend_name: {
        fontWeight: '600',
        height: 20,
        lineHeight: 20
    },
    friend_state: {
        color: '#ddd',
        height: 20,
        lineHeight: 20,
        fontSize: 12
    }
})
export default styles