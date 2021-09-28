import React from "react";
import { View, Text, FlatList,StyleSheet } from "react-native";
import BookPreview from "./BookPreview";

type BookPreviewDataProp={

  id: number;
  title: string;
  author: number;
  sample: string;
  price: number;
};
type BookPreviewListProps = {
  title: string;
  data: BookPreviewDataProp[];
};

const BookPreviewList = (props: BookPreviewListProps) => {
  const renderItem = ({ item }) => (
    <BookPreview
      title={item.title}
      id={item.id}
      price={item.price}
      author={item.author}
      img={item.cover}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.viewAll} >View all</Text>
      </View>
      
      <FlatList
        data={props.data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    
  
  },
  topContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  
    
    
  },
  title:{
    paddingLeft:5,
    fontSize:18,
    fontWeight:'bold'
  },
  viewAll:{
    fontSize:16,
    color:"red",
    marginRight:5,
  }

})

export default BookPreviewList;
