import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type BuyBtnProps = {
  price: number;
};
const BuyBtn = (props: BuyBtnProps) => {
  const onPress = () =>
    //add to cart
    console.log("buy pressed");
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: "#FF002E", maxWidth: 130 }}>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            alignSelf: "center",
            margin: 3,
          }}
        >
          Buy now ${props.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BuyBtn;
