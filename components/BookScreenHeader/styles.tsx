import { StyleSheet } from "react-native";
import window from "../../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    
  },
  rightContainer:{
    flexShrink:1,
   
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    
    
  },
  authorName: {
    fontSize: 16,
  },
  img: {
    marginLeft: 7,
    marginRight: 7,
    width: 140,
    height: 190,
  },
  shadow: {
    elevation: 20,
    shadowColor: "#52006A",
  },
});

export default styles;
