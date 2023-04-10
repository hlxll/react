import { View, Image, Text, Animated } from "react-native";
import { useRef, useEffect } from "react";
import styles from "./less";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
export default function SmollWord() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    let maxWid = document.body.clientWidth;
    Animated.timing(fadeAnim, {
      toValue: maxWid * 0.2,
      duration: 500,
    }).start();
  }, []);
  return (
    <View style={styles.smollWord}>
      <View style={styles.tabHead}>
        <View style={styles.tabText}>
          <Image
            source={require("../../static/image/header.jpg")}
            style={styles.headerImg}
          />
        </View>
        <Text style={styles.tabText}>直播</Text>
        <Text style={styles.tabText}>关注</Text>
        <Text style={styles.tabText}>朋友</Text>
        <Text style={styles.tabText}>广场</Text>
        <BellOutlined style={styles.bellOut} />
        <SearchOutlined style={styles.search} />
      </View>
      <Animated.View
        style={[
          {
            marginLeft: fadeAnim,
            width: "7vw",
            height: 2,
          },
        ]}
      >
        <View style={styles.animationBottom}></View>
      </Animated.View>
    </View>
  );
}
