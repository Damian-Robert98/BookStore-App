import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type RatingsIdicatorProps = {
  rating: number;
  numOfRatings?: number;
  starSize: number; 
};

const RatingsIndicator = (props: RatingsIdicatorProps) => {
  const ratingInt = Math.round(props.rating);
  const setIconColor = (iconNumber: number, rating: number) => {
    if (iconNumber <= rating) {
      return "#FF002E";
    } else {
      return "#C4C4C4";
    }
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <FontAwesome
        name="star"
        size={props.starSize}
        style={{ marginRight: 3 }}
        color={setIconColor(1, ratingInt)}
      />
      <FontAwesome
        name="star"
        size={props.starSize}
        color={setIconColor(2, ratingInt)}
        style={{ marginRight: 3 }}
      />
      <FontAwesome
        name="star"
        size={props.starSize}
        color={setIconColor(3, ratingInt)}
        style={{ marginRight: 4 }}
      />
      <FontAwesome
        name="star"
        size={props.starSize}
        color={setIconColor(4, ratingInt)}
        style={{ marginRight: 3 }}
      />
      <FontAwesome
        name="star"
        size={props.starSize}
        color={setIconColor(5, ratingInt)}
        style={{ marginRight: 3 }}
      />
      
      <Text>{props.numOfRatings}</Text>
    </View>
  );
};

export default RatingsIndicator;
