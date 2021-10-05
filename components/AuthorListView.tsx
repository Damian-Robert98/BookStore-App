import React from "react";
import { Text, View, FlatList } from "react-native";
import AuthorListItem from "./AuthorListItem";

type AuthorListViewProps = {
  data: AuthorListItemProps[];
};
type AuthorListItemProps = {
  id: number;
  img?: string;
  name: string;
};
const AuthorListView = (props: AuthorListViewProps) => {
  const renderItem = ({ item }) => (
    <AuthorListItem id={item.id} img={item.img} name={item.name} />
  );
  return (
    <View>
      <Text style={{fontSize:20}}>Popular Authors</Text>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AuthorListView;
