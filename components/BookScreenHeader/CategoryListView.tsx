import React from "react";
import { View } from "react-native";
import CategoryListItem from "./CategoryListItem";

const CategoryListView = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <CategoryListItem text={"fiction"} />
      <CategoryListItem text={"novel"} />
    </View>
  );
};

export default CategoryListView;
