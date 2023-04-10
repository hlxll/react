import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";
import { Image, View } from "react-native";
import styles from "./less";
const FrequencyChannel = () => {
  return (
    <View style={styles.frequency}>
      <View style={styles.frequency_leftMenu}>
        <View
          style={{
            ...styles.headImage,
            ...styles.leftMenuSize,
            ...styles.menuClick,
          }}
        >
          <Image
            source={require("../../static/image/header.jpg")}
            style={{ ...styles.headImage }}
          />
          <View style={styles.rightTop}></View>
        </View>
        <View style={{ ...styles.homeIcon, ...styles.leftMenuSize }}>
          <HomeOutlined />
          <View style={styles.rightTop}></View>
        </View>
        <View style={{ ...styles.photoIma, ...styles.leftMenuSize }}>
          <Image
            source={require("../../static/image/header.jpg")}
            style={styles.photoImage}
          />
          <View style={styles.rightTop}>99+</View>
          <View style={styles.rightBottom}>
            <PhoneOutlined />
          </View>
        </View>
      </View>

      <View></View>
    </View>
  );
};
export default FrequencyChannel;
