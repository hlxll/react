import React, { useState, useRef, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import LinearGradient from "react-native-linear-gradient";
import {
  Text,
  Modal,
  View,
  Animated,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./less";
interface menu {
  name: string;
}
const News = () => {
  const fadeAnim = useRef(new Animated.Value(-390)).current;
  const [isShow, setIsShow] = useState(false);
  const [menuList, setMenuList] = useState<menu[]>([]);
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    let newsData = [];
    newsData.push({ url: "", name: "", news: "" });
    setNewsList(newsData);
    let list = [];
    let i = 0;
    while (i < 9) {
      list.push({ name: "直播" });
      i++;
    }
    setMenuList(list);
  }, []);
  const closeModal = () => {
    let res = Animated.timing(fadeAnim, {
      toValue: -390,
      duration: 500,
    }).start();
    setTimeout(() => {
      setIsShow(false);
    }, 500);
  };
  const openLeftModal = () => {
    setIsShow(true);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
    }).start();
  };
  return (
    <View>
      <View style={styles.searchInput}>
        <TextInput
          style={styles.searchInt}
          placeholder={"搜索"}
          placeholderTextColor="#ddd"
        />
      </View>
      <View>
        {newsList.map((item) => {
          return (
            <View style={styles.newsItem}>
              <Image
                style={styles.newsImage}
                source={require("../../static/image/header.jpg")}
              />
              <View style={styles.newsDetail}>
                <Text>嵩峰小无赖</Text>
                <Text>给力的消息</Text>
              </View>
            </View>
          );
        })}
      </View>
      <Text onClick={openLeftModal}>打开左侧</Text>
      {isShow ? (
        <Modal visible={isShow} transparent={true}>
          <Animated.View
            style={[
              {
                overflow: "hidden",
                width: "100%",
                position: "absolute",
                height: "100%",
                left: fadeAnim,
              },
            ]}
          >
            <View style={styles.modalMain}>
              <View style={styles.addCat}>
                <MaterialCommunityIcons color={"white"} size={30} name="book" />
                <Text style={styles.dakaBtn}>打卡</Text>
              </View>
              <MaterialCommunityIcons
                style={styles.closeModal}
                color={"white"}
                size={30}
                name="close"
                onClick={closeModal}
              />
            </View>
            <View style={styles.peopleDetailBack}>
              <View style={styles.peopleDetail}>
                <Image
                  style={styles.peopleTop}
                  source={require("../../static/image/header.jpg")}
                />
                <View style={styles.peopleCenterText}>
                  <View>
                    <Text style={styles.name}>依古比古的小毯子</Text>
                    {/* <Image source={require('')}/> */}
                  </View>
                  <Text>ssssss</Text>
                  <View>
                    <Text style={styles.detailTip} numberOfLines={1}>
                      8月29号，是我难忘的一天。希望我和他一直这样下去
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.modalBottom}>
              <View style={styles.alarmPush}>
                <Image source={require("../../static/image/header.jpg")} />
                <Text style={styles.alarmPushText}>收到7条通知</Text>
              </View>
              <ScrollView style={styles.scrollMenu}>
                {menuList.map((item, index) => {
                  return (
                    <View style={styles.menu} key={index}>
                      <MaterialCommunityIcons
                        style={styles.leftIcon}
                        name="close"
                        color={"black"}
                        size={20}
                      />
                      <Text>{item.name}</Text>
                      <MaterialCommunityIcons
                        style={styles.toRight}
                        name="close"
                        color={"black"}
                        size={15}
                      />
                    </View>
                  );
                })}
              </ScrollView>
              {/* <LinearGradient colors={['#FFD801', '#FF8040', '#F75D59']}>
                                        <Text>
                                            Sign in with Facebook
                                        </Text>
                                    </LinearGradient> */}
              <View style={styles.modalFooter}>
                <View style={styles.footerBtn}>
                  <MaterialCommunityIcons
                    name="close"
                    color={"black"}
                    size={20}
                  />
                  <Text>设置</Text>
                </View>
                <View style={styles.footerBtn}>
                  <MaterialCommunityIcons
                    name="close"
                    color={"black"}
                    size={20}
                  />
                  <Text>夜间</Text>
                </View>
                <View style={styles.footerBtn}>
                  <MaterialCommunityIcons
                    name="close"
                    color={"black"}
                    size={20}
                  />
                  <Text>等级</Text>
                </View>
                <View style={styles.footerBtn}>
                  <MaterialCommunityIcons
                    name="close"
                    color={"black"}
                    size={20}
                  />
                  <Text>当日天气</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </Modal>
      ) : (
        ""
      )}
    </View>
  );
};

export default News;
