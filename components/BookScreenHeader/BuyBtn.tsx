import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type BuyBtnProps = {
  price: number;
};
const BuyBtn = (props: BuyBtnProps) => {
  const onPress=()=>(
    //add to cart
    console.log("buy pressed")
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: "red" }}>
        <Text style={{ color: "white", alignSelf: "center", padding: 2 }}>
          buy now ${props.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BuyBtn;
