import React,{Component} from 'react';
import { View, Button, Alert, Animated, 
    ActivityIndicator, FlatList, Modal, 
    Text, TextInput, TouchableHighlight,
    Image, StyleSheet, Picker, Switch
} from 'react-native';
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
});
export default class DemoCon extends Component{
        state = {
            fadeAnim: new Animated.Value(0),
            DATA:[
                {
                    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                    title: 'First Item',
                },
                {
                    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    title: 'Second Item',
                },
                {
                    id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    title: 'Third Item',
                }
            ],
            sureModal: false,
            age: 12,
            name: 'huaglin',
            pickerValue: '',
            switchValue: false
        }
        fadeIn = ()=>{
            Animated.timing(this.state.fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }).start()
        }
        fadeOut = ()=>{
            Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true
            }).start()
        }
    BtnDemo(){
        Alert.alert('弹窗')
    }
    setSureModel = (sure)=>{
        this.setState({sureModal: sure});
    }
    render(){
        console.log(this.state)
        const {sureModal} = this.state;
        return (
            <View>
                <Animated.View style={{opacity:this.state.fadeAnim}}>
                    <Text>Animation</Text>
                </Animated.View>
                {/* 图片必须加style，不然显示不出来 */}
                <Image
                    style={styles.tinyLogo}
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
                <Button onPress={this.fadeIn} title="fadeIn"></Button>
                <Button onPress={this.fadeOut} title="fadeOut"></Button>
                <Picker
                    selectedValue={this.state.pickerValue}
                    onValueChange={(item, index)=>{this.setState({pickerValue: item})}}
                    style={{height: 50,width: 150}}
                >
                    <Picker.Item label="one" value="one"></Picker.Item>
                    <Picker.Item label="two" value="two"></Picker.Item>
                </Picker>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.state.switchValue ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(item)=>{this.setState({switchValue: item})}}
                    value={this.state.switchValue}
                />
                <ActivityIndicator size="large" color="#0000ff" animating={true} hidesWhenStopped={true}>
                </ActivityIndicator>
                {/* animating是指定是否显示动画，hidesWhenStopped当animating为false，是否显示指示器 */}
                <FlatList data={this.state.DATA} renderItem={({item})=>{<Text title={item}></Text>}} keyExtractor={item => item.id}>
                </FlatList>
                
                <Button onPress={()=>{this.setSureModel(true)}} title="显示modal"></Button>
                <Modal visible={sureModal}>
                    <View>
                        <Text>{this.state.age}</Text>
                    </View>
                    
                </Modal>

                <TextInput
                    // value='默认文字'
                    placeholder="输入框place"
                    keyboardType={'number-pad'}//键盘类型
                    multiline={true}
                    autoCapitalize={'characters'}
                />
                <TouchableHighlight activeOpacity={0.5} underlayColor={'red'}>
                    <Text>{this.state.name}</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
} 