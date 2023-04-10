import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  smollWord: {},
  tabHead: {
    display: "flex",
    backgroundColor: "rgba(0,0,0,0)",
    flexDirection: "row",
    alignItems: "center",
  },
  headerImg: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 15,
  },
  tabText: {
    width: "15vw",
    textAlign: "center",
    height: 40,
    lineHeight: 40,
  },
  bellOut: {
    width: "10vw",
    textAlign: "center",
    marginLeft: "auto",
  },
  search: {
    width: "10vw",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  animationBottom: {
    width: "7vw",
    height: 2,
    backgroundColor: "blue",
  },
});
export default styles;
