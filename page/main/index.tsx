import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import News from "../news";
import FrequencyChannel from "../frequencyChannel";
import PeopleHead from "../../component/mainCom/PeopleHead";
import SmollWord from "../SmollWord";
const Tab = createBottomTabNavigator();

const menuCustom = (props: { num: number }) => {
  let newsNum = "";
  if (props.num <= 99) {
    newsNum = props.num.toString();
  } else {
    newsNum = "99+";
  }
  return (
    <View>
      <MaterialCommunityIcons name="home" color={"black"} size={"10px"} />
      {newsNum != "0" ? (
        <View style={styles.iconRightIcon}>{newsNum}</View>
      ) : (
        ""
      )}
    </View>
  );
};
export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="News"
        component={News}
        options={{
          header: () => {
            return <PeopleHead />;
          },
          title: "消息",
          tabBarIcon: () => menuCustom({ num: 100 }),
        }}
      />
      <Tab.Screen
        name="FreChan"
        component={FrequencyChannel}
        options={{
          header: () => {},
          title: "频道",
          tabBarIcon: () => menuCustom({ num: 0 }),
        }}
      />
      <Tab.Screen
        name="SmollWord"
        component={SmollWord}
        options={{
          header: () => {},
          title: "小世界",
          tabBarIcon: () => menuCustom({ num: 0 }),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={FrequencyChannel}
        options={{
          header: () => {},
          title: "联系人",
          tabBarIcon: () => menuCustom({ num: 2 }),
        }}
      />
      <Tab.Screen
        name="Trends"
        component={FrequencyChannel}
        options={{
          header: () => {},
          title: "动态",
          tabBarIcon: () => menuCustom({ num: 1 }),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  iconRightIcon: {
    position: "absolute",
    right: -18,
    top: -5,
    width: "auto",
    fontSize: 12,
    textAlign: "center",
    minWidth: 15,
    backgroundColor: "red",
    height: 15,
    lineHeight: 15,
    borderRadius: 10,
    color: "white",
  },
});
