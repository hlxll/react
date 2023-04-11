import { CompassOutlined, HomeOutlined, PhoneOutlined, RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './less'
import {userDetail} from '../../model/config/global'
const FrequencyChannel =()=>{
    const [menuIndex, setMenuIndex] = useState(1)
    const changeTabMenu=(index:number)=>{
        setMenuIndex(index)
    }
    return (
        <View style = {styles.frequency}>
            <View style={styles.frequency_leftMenu}>
                <View style={{...styles.headImage, ...styles.leftMenuSize, ...styles.menuClick}} onClick={()=>{changeTabMenu(1)}}>
                    <Image source={require('../../static/image/header.jpg')} style={{...styles.headImage}}/>
                    <View style={styles.rightTop}></View>
                </View>
                <View style={{...styles.homeIcon, ...styles.leftMenuSize}} onClick={()=>{changeTabMenu(2)}}>
                    <HomeOutlined />
                    <View style={styles.rightTop}></View>
                </View>
                <View style={{...styles.photoIma, ...styles.leftMenuSize}} onClick={()=>{changeTabMenu(3)}}>
                    <Image source={require('../../static/image/header.jpg')} style={styles.photoImage}/>
                    <View style={styles.rightTop}>99+</View>
                    <View style={styles.rightBottom}>
                        <PhoneOutlined />
                    </View>              
                </View>
            </View>
            {
                menuIndex == 1?
                <View style={styles.frequency_right}>
                    <CompassOutlined style={styles.rightSetIcon}/>
                    <View style={styles.right_top_iamge}>
                        <Image style={styles.right_iamge} source={require('../../static/image/header.jpg')}/>
                        <Image style={styles.imagePen} source={require('../../static/icon/pen.svg')}/>
                        <Text style={styles.username}>{userDetail.username}</Text>
                        <Text style={styles.userDetail}>{userDetail.sexual} {userDetail.age}岁 {userDetail.location} | 加入频道142天</Text>
                    </View>
                    <View style={styles.menuRoute}>
                        <View style={styles.leftText}>
                            <Text style={styles.maxText}>我的贴子</Text>
                            <Text style={styles.minText}>成为频道主</Text>
                        </View>
                        <RightOutlined style={styles.rightIcon}/>
                    </View>
                </View>:''
            }
        </View>
    )
}
export default FrequencyChannel;