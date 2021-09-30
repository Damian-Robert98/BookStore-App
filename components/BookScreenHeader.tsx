import React ,{useState} from "react";
import { Image, Text, View, StyleSheet } from "react-native";
//icons
import { FontAwesome } from "@expo/vector-icons";
//types
import { IBook } from "../types";
//to do :improve naming convention

type CategoryBtnProp = {
  text: string;
};
const IconsContainer = () => {
  const[isFavorited,setFavorited] =useState(false);
  const[isSaved,setSaved]= useState(false);
  const onHeartPressed =()=>(
    setFavorited(!isFavorited)
  );

  const onSavePressed= () => (
    setSaved(!isSaved)
  );

  return (
    <View style={{ flexDirection: "row", margin: 10 }}>
       {isFavorited ? (
            <FontAwesome name="heart-o" size={25} color={"red"} onPress={onHeartPressed}/>
            ) : (
              <FontAwesome name="heart" size={25} color={"grey"} onPress={onHeartPressed}/>
            )}
       
      <FontAwesome name="bookmark-o" size={25} color={"red"} onPress={onSavePressed} />
    </View>
  );
};
const CategoryBtn = (props: CategoryBtnProp) => {
  return (
    <View style={{ backgroundColor: "lightgrey", margin: 2, padding: 3 }}>
      <Text style={{ color: "red" }}>{props.text}</Text>
    </View>
  );
};

type RatingsIdicatorProps = {
  rating?: number;
  numOfRatings: number;
};
const RatingsIdicator = (props: RatingsIdicatorProps) => {
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

const BookScreenHeader = (props: IBook) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Image style={styles.img} source={{ uri: "https:picsum.photos/200" }} />
      </View>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.authorName}>By {props.author}</Text>
        <RatingsIdicator rating={4.5} numOfRatings={272} />
        <Text>Categories:</Text>
        <View style={{ flexDirection: "row" }}>
          <CategoryBtn text={"fiction"} />
          <CategoryBtn text={"novel"} />
        </View>

        <Text>save fav btn</Text>
        <IconsContainer/>
        <View style={[{ backgroundColor: "red" }, styles.shadow]}>
          <Text style={{ color: "white", alignSelf: "center", padding: 2 }}>
            buy now ${props.price}
          </Text>
        </View>
      </View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  authorName: {
    fontSize: 16,
  },
  img: {
    marginLeft: 15,
    marginRight: 15,
    width: 150,
    height: 200,
  },
  shadow: {
    elevation: 20,
    shadowColor: "#52006A",
  },
});

export default BookScreenHeader;
