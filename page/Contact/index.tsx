import React, { useEffect, useRef, useState } from 'react';
import {View, TextInput, Text, Image, Button} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {contactMenu} from '../../model/config/global'
import GoodFriend from '../../component/contact/GoodFriend'
import styles from './less'
interface wantUser{
    title: string
}
const Contacts=()=>{
    const [isSearch, setIsSearch] = useState(true)
    const searchInputRef = useRef(null) as React.MutableRefObject<any>
    const [wantKnowList, setWantKnowList] = useState<wantUser[]>([])
    const [lastIndex, setLastIndex] = useState(0)
    const [menuList, setMenuList] = useState<{title: string, clicked: boolean}[]>([])

    useEffect(()=>{
        let list = [{title: '遇猫人不淑'}]
        setWantKnowList(list)
        setMenuList(contactMenu)
    }, [])
    useEffect(()=>{
        if(!isSearch){
            searchInputRef?.current.focus()
        }
    }, [isSearch])
    const changeInput=()=>{
        setIsSearch(item=>{
            return !item
        })
        
    }
    const inputChange=(data: { nativeEvent: { text: string; }; })=>{
        if(data.nativeEvent.text == ''){
            setIsSearch(item=>{
                return !item
            })           
        }
    }
    const changeTab=(index:number)=>{
        let list = [].concat(menuList)
        list[index].clicked = true
        if(lastIndex != -1){
            list[lastIndex].clicked = false
        }
        setMenuList(list)
        setLastIndex(index)
    }
    return(
        <View>
            <View style={{backgroundColor: 'white', paddingTop: 10}}>
                {
                    isSearch?
                    <View onClick={changeInput} style={{...styles.searchinput, ...styles.searchView}}>
                        <Image source={require('../../static/image/search.png')} style={styles.searchIcon}/>
                        <Text>搜索</Text>
                    </View>:
                    <TextInput ref={searchInputRef} onChange={inputChange} placeholder={'搜索'} placeholderTextColor="#fff" style={styles.searchinput}/>
                }
            </View>
            <View style={styles.wantKnow}>
                <Text style={{color: 'rgba(0,0,0,0.6)'}}>可能想认识的人 ></Text>
                {
                    wantKnowList.map(item=>(
                        <View style={styles.wantknowItem}>
                            <Image source={require('../../static/image/header.jpg')} style={styles.wantknowImage}/>
                            <View style={styles.wantKnowTitle}>
                                <Text style={styles.wantTitle}>{item.title}</Text>
                                <Text style={styles.wantTip}>可能想认识他</Text>
                            </View>
                            <Text style={styles.addBtn}>添加</Text>
                            <MaterialCommunityIcons name='close' size={20} color={'#ddd'}/>
                        </View>
                    ))
                }
            </View>
            <View style={styles.newFriend}>
                <View style={{...styles.newFriendItem, borderBottom: '1px solid #ddd'}}>
                    <Text>新朋友</Text>
                    <MaterialCommunityIcons name='close' size={20} color={'#ddd'} style={{marginLeft: 'auto'}}/>
                </View>
                <View style={{...styles.newFriendItem}}>
                    <Text>群通知</Text>
                    <MaterialCommunityIcons name='close' size={20} color={'#ddd'} style={{marginLeft: 'auto'}}/>
                </View>
            </View>
            <View style={styles.tagMenu}>
                <View style={styles.tagMenuitem}>
                    {
                        menuList.map((item, index)=>(
                            <View style={styles.menuitem} onClick={()=>{changeTab(index)}}>
                                <Text style={item.clicked?styles.clickTab:styles.unClickTab}>{item.title}</Text>
                            </View>
                        ))
                    }
                </View>
                {
                    lastIndex==0?<GoodFriend/>:null
                }
            </View>
        </View>
    )
}
export default Contacts;