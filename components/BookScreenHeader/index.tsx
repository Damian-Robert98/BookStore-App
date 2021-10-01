import React, { useState } from "react";
import { Image, Text, View } from "react-native";

//types
import { IBook } from "../../types";
import styles from "./styles";
import RatingsIndicator from "./RatingsIndicator";
import IconsContainer from "./IconsContainer";
import CategoryListView from "./CategoryListView";
import CategoryListItem from "./CategoryListItem";
import BuyBtn from "./BuyBtn";
//to do :improve naming convention

const BookScreenHeader = (props: IBook) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Image style={styles.img} source={{ uri: props.cover }} />
      </View>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.authorName}>By {props.author}</Text>
        <RatingsIndicator rating={2.7} numOfRatings={272} />
        <CategoryListView />
        <IconsContainer />
        <BuyBtn price={props.price}/>
      </View>
      <Text></Text>
    </View>
  );
};

export default BookScreenHeader;