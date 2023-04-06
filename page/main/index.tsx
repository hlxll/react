import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import News from "../news";
import FrequencyChannel from "../frequencyChannel";
import PeopleHead from "../../component/mainCom/PeopleHead";

const Tab = createBottomTabNavigator();

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
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"black"} size={"10px"} />
          ),
        }}
      />
      <Tab.Screen
        name="FreChan"
        component={FrequencyChannel}
        options={{
          header: () => {},
          title: "频道",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="appstore-o"
              color={"black"}
              size={"10px"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SmollWord"
        component={FrequencyChannel}
        options={{
          header: () => {},
          title: "小世界",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="grooveshark"
              color={"black"}
              size={"10px"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={FrequencyChannel}
        options={{
          header: () => {},
          title: "联系人",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="people"
              color={"black"}
              size={"10px"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trends"
        component={FrequencyChannel}
        options={{
          header: () => {},
          title: "动态",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="sync" color={"black"} size={"10px"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
