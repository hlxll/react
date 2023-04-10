import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function PeopleHead() {
  return (
    <View style={styles.mainHead}>
      <Image
        style={styles.head_left_image}
        source={require("../../static/image/header.jpg")}
      />
      <View style={styles.headCenterName}>
        <Text style={styles.headCenterTitle}>依古比古的小毯子</Text>
        <View style={styles.headStateParent}>
          <View style={styles.headStateZero}></View>
          <Text style={{ color: "white", fontSize: 8 }}>手机在线-4G</Text>
        </View>
      </View>
      <View style={styles.headRightBtn}>
        <MaterialCommunityIcons
          style={styles.headRightBtnItem}
          name="github"
          color={"black"}
          size={30}
        />
        <MaterialCommunityIcons
          style={styles.headRightBtnItem}
          name="plus"
          color={"black"}
          size={30}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainHead: {
    height: 50,
    backgroundColor: "rgb(109, 166, 231)",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  head_left_image: {
    width: 30,
    height: 30,
    margin: "auto",
    marginLeft: 10,
    marginRight: 0,
    borderRadius: 15,
  },
  headCenterName: {
    width: "max-content",
    height: 50,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: "auto",
  },
  headCenterTitle: {
    color: "white",
  },
  headStateParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headStateZero: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
    marginRight: 4,
  },
  headRightBtn: {
    display: "flex",
    width: 60,
    flexDirection: "row",
  },
  headRightBtnItem: {
    width: 30,
    color: "white",
  },
});
export default PeopleHead;
