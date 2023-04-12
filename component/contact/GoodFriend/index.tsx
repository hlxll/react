import React, { useEffect, useState } from 'react';
import {Text, View, Image} from 'react-native'
import styles from './less'
import {userState} from '../../../model/config/global'
interface friend{
    name: string, 
    url: string,
    state: number
}
const FriendList = (props: {title: string, list: friend[]})=>{
    const {title, list} = props;
    return(
        <View>
            <Text style={styles.bigTitle}>{title}</Text>
            {
                list.map(item=>(
                    <View key={item.name} style={styles.friendItem}>
                        <Image style={styles.friendHead} source={require('../../../static/image/header.jpg')}/>
                        <View>
                            <Text style={styles.friend_name}>{item?.name}</Text>
                            <Text style={styles.friend_state}>
                                {
                                    '['+userState[+item?.state]+']'
                                }
                            </Text>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}
const GoodFriend = ()=>{
    const [muchFriend, setMuchFriend] = useState<friend[]>([])
    useEffect(()=>{
        setMuchFriend([{name: '小舅子', url: '', state: 0}])
    }, [])
    return(
        <View style={styles.goodFriend}>
            <FriendList title="特别关心" list={muchFriend} />
        </View>
    )
}
export default GoodFriend;