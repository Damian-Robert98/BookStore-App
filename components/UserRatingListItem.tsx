import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";


import RatingsIndicator from "./BookScreenHeader/RatingsIndicator";

type UserRatingListItemProps = {
  img: string;
  author: string;
  review: string;
  rating: number;
};

const UserRatingListItem = (props: UserRatingListItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: props.img }} />
      <View style={{ flexDirection: "column", width:'80%' }}>
        <View style={styles.topContainer}>
          <Text style={styles.author}>{props.author}</Text>
          <View style={{alignSelf:'flex-end'}}>
            <RatingsIndicator rating={props.rating} starSize={14} />
          </View>
          
        </View>
        <View>
          <Text>{props.review}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 7,
    width: "100%",
    borderBottomWidth:1,
    
    
  },
  img: {
    width: 50,
    height: 50,
    margin: 5,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center'
   

  
  },
  author: {
    marginLeft: 5,
    fontSize:16,
    fontWeight:'bold'
    
  },
});

export default UserRatingListItem;
