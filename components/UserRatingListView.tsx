import React from "react";
import { Text, View, FlatList } from "react-native";
import UserRatingListItem from "./UserRatingListItem";

const data = [{ img: "" }];
const UserRatingListView = () => {
  return (
    <View>
      <Text>User Ratings</Text>
      <FlatList
        
        data={[{}, {}, {}, {}, {}, {},{},{},{}]}
        renderItem={({ item, index }) => (
          <UserRatingListItem
            img={"https://picsum.photos/200/304"}
            author={"john"}
            rating={4}
            key={index}
            review={
              "best book drdsfsdfs sdasd sadasd asdasdas dasdas vasdasd fsdfsfs sdfdever"
            }
          />
        )}
      />
    </View>
  );
};

export default UserRatingListView;
