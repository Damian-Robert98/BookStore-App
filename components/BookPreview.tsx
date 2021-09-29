import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { HomeStackParamList } from "../types";

// to do: export type to type.tsx
// to do :add nav
type Props = {
  img?: string;
  title: string;
  price: number;
  id: string;
  author: string;
};
const BookPreview = (props: Props) => {
  const navigation2 = useNavigation();
  const onPress=()=>(
    navigation2.navigate('Root',{screen:'TabOne',params:{screen:'Book',params:{userId:props.id}}})
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{ uri: props.img }} style={styles.img}></Image>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity>
          <Text style={{ alignSelf: "center", color: "grey" }}>
            {props.author}
          </Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", color: "red" }}>
          {"$" + props.price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  title: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "bold",
  },
  img: {
    width: 120,
    height: 170,
  },
});
export default BookPreview;
