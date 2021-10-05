import React from "react";
import { Text, View, FlatList } from "react-native";
import UserRatingListItem from "./UserRatingListItem";

const data = [{ img: "" }];
const UserRatingListView = () => {
  const renderItem = ({ item, index }) => (
    <UserRatingListItem
      img={"https://picsum.photos/200/304"}
      author={"john"}
      rating={4}
      key={index}
      review={
        "safdsfsdg fsdgdg dfertergasdas sdad as fsdgvd gdfgd vdfgdff dsfs fsdfs fdfsfsdfsdfd ssfsddfsefaeeee  s"
      }
    />
  );
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 5,
          marginBottom: 5,
        }}
      >
        User Ratings
      </Text>
      <FlatList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default UserRatingListView;
