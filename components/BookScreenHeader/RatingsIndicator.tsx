import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


type RatingsIdicatorProps = {
  rating?: number;
  numOfRatings: number;
};
const RatingsIndicator = (props: RatingsIdicatorProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <FontAwesome name="star-o" size={17} style={{ marginRight: 4 }} />
      <FontAwesome name="star" size={17} />
      <FontAwesome name="star" size={17} color={"red"} />
      <FontAwesome name="star" size={17} color={"red"} />
      <FontAwesome name="star" size={17} color={"red"} />

      <Text>({props.numOfRatings})</Text>
    </View>
  );
};

export default RatingsIndicator;