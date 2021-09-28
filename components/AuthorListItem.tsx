import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

type AuthorListItemProps={
  id: number;
  img?: string;
  name: string;
};
const AuthorListItem = (props: AuthorListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.img }}style={styles.img} />
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const styles =StyleSheet.create({
  container:{
    flexDirection:'column',
    alignItems:'center',
    margin:10,
  },
  img:{
    width:70,
    height:70,
    borderRadius:36,
    marginBottom:5,
  },
  text:{
    
  }

})

export default AuthorListItem;
