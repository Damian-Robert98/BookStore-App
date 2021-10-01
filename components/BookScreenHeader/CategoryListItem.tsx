import React from "react";
import {View, Text} from 'react-native';
import CategoryListView from "./CategoryListView";



type CategoryListItem = {
  text: string;
};

const CategoryListItem = (props: CategoryListItem) => {
  return (
    <View style={{ backgroundColor: "lightgrey", margin: 4, padding: 3 }}>
      <Text style={{ color: "red" }}>{props.text}</Text>
    </View>
  );
};


export default CategoryListItem;