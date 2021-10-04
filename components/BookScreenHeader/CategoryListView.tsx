import React from "react";
import { View } from "react-native";
import CategoryListItem from "./CategoryListItem";

type CategoryListViewProps={
  categories:string[];
}
//return the first 3 categories
const CategoryListView = (props: CategoryListViewProps) => {
  const categoriesBO= props.categories.slice(0,3);
  return (
    <View style={{ flexDirection: "row" }}>
      {categoriesBO.map((item,index)=>(
        <CategoryListItem text={item} key={index}/> 
      ))}
      
    </View>
  );
};

export default CategoryListView;
