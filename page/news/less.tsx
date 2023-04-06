import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    searchInput:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ddd'
    },
    searchInt:{
        backgroundColor: 'white',
        height: 30,
        borderRadius: 5,
        paddingLeft: 10
    },
    newsItem:{
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    newsImage: {
        width: 40,
        height: 40,
        borderRadius: 15,
        marginRight: 10,
        marginLeft: 10,
    },
    newsDetail: {},
    modalMain: {
        backgroundColor: "rgb(58, 120, 169)",
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    addCat: {
        flexDirection: 'row',
        height: 40,
        lineHeight: 40,
    },
    dakaBtn: {
        marginLeft: 10,
        color: 'white'
    },
    closeModal: {
        marginLeft: 'auto',
        lineHeight: 40,
    },
    peopleDetailBack: {
        backgroundColor: "rgb(58, 120, 169)",
        paddingBottom: 20,
        paddingTop: 20,
    },
    peopleDetail: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    peopleTop: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    peopleCenterText:{
        width: 'calc(100% - 50px)',
        paddingLeft: 10
    },
    name: {
        color: 'white'
    },
    detailTip: {
        color: 'white',
        width: '100%',
    },
    modalBottom: {
        height: 'calc(100% - 150px)',
        backgroundColor: '#fff'
    },
    alarmPush: {
        height: 40,
        borderRadius: 20,
        marginTop: 20,
        textAlign: 'center',
        width: '40vw',
        margin: 'auto',
        backgroundColor: 'rgb(241, 234, 234)',
        border: '1px solid #d9cdcd',
        display: 'flex',
        justifyContent: 'center'
    },
    alarmPushText: {
        color: 'black',
        fontWeight: '600'
    },
    scrollMenu: {
        height: 'calc(100% - 80px)'
    },
    menu: {
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftIcon: {
        marginRight: 5
    },
    toRight: {
        marginLeft: 'auto',
        marginRight: 10
    },
    modalFooter: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
    },
    footerBtn: {
        width: 60,
        textAlign: 'center',
    },
})
export default styles