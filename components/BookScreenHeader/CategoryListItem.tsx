import React from "react";
import {View, Text} from 'react-native';




type CategoryListItem = {
  text: string;
};

const CategoryListItem = (props: CategoryListItem) => {
  
  return (
    <View style={{ backgroundColor: "#EBEBEB", margin: 4, padding: 3 }}>
      <Text style={{ color: "#FF002E" }}>{props.text}</Text>
    </View>
  );
};


export default CategoryListItem;