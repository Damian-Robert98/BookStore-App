import React, { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";

//types
import { IBook } from "../../types";
import styles from "./styles";
import RatingsIndicator from "./RatingsIndicator";
import IconsContainer from "./IconsContainer";
//to do :improve naming convention

type CategoryBtnProp = {
  text: string;
};

const CategoryBtn = (props: CategoryBtnProp) => {
  return (
    <View style={{ backgroundColor: "lightgrey", margin: 4, padding: 3 }}>
      <Text style={{ color: "red" }}>{props.text}</Text>
    </View>
  );
};

const BookScreenHeader = (props: IBook) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Image style={styles.img} source={{ uri: props.cover }} />
      </View>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.authorName}>By {props.author}</Text>
        <RatingsIndicator rating={4.5} numOfRatings={272} />
        
        <View style={{ flexDirection: "row" }}>
          <CategoryBtn text={"fiction"} />
          <CategoryBtn text={"novel"} />
        </View>

        <Text>save fav btn</Text>
        <IconsContainer />
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

export default BookScreenHeader;
