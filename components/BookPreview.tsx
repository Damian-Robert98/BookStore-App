import React from "react";
import { View, Text, Image, TouchableOpacity,StyleSheet } from "react-native";
// to do: export type to type.tsx
// to do :add nav
type Props={
  img?: string;
  title: string;
  price: number;
  id: string;
  author:string;
};
const BookPreview = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image
        source={{ uri: props.img }}
        style={styles.img}
      ></Image>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity>
        <Text style={{ alignSelf: "center",color:"grey" }}>{props.author}</Text>
      </TouchableOpacity>   
      <Text style={{ alignSelf: "center", color: "red" }}>{'$'+ props.price}</Text>
      </TouchableOpacity>
     
      
    </View>
  );
};


const styles= StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems:'center',
    padding:10,

  },
  title: {
    marginTop:2,
    fontSize:16,
    fontWeight:'bold'
  },
  img:{
    width: 120,
    height:170
  }
});
export default BookPreview;
