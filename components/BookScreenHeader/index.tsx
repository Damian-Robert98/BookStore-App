import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

//types
import { IBook } from "../../types";
import styles from "./styles";

import RatingsIndicator from "./RatingsIndicator";
import IconsContainer from "./IconsContainer";
import CategoryListView from "./CategoryListView";

import BuyBtn from "./BuyBtn";
//to do :improve naming convention

const BookScreenHeader = (props: IBook) => {
  useEffect(() => {
    
  }, [])
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.container}>
        <View style={styles.shadow}>
          <Image style={styles.img} source={{ uri: props.cover }} />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.authorName}>By {props.author}</Text>
          <RatingsIndicator rating={2.7} numOfRatings={272} starSize={19}/>
          <CategoryListView categories={props.category} />
          <IconsContainer />
          <BuyBtn price={props.price} />
        </View>
      </View>

      <View style={{margin:10 ,flexShrink:1}}>
        <Text style={styles.title}>Introduction</Text>
        <View>
          <Text numberOfLines={3.5} ellipsizeMode='tail'>
            {props.sample}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BookScreenHeader;
