import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import window from "../constants/Layout";

import BookScreenHeader from '../components/BookScreenHeader';

const BookScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BookScreen</Text>
      <BookScreenHeader 
        id={1} 
        title={"design Patterns and the art of stealing"} 
        author={1} 
        price={100} 
        rating={3}
        cover={'https://picsum.photos/200/300'}
        category={["fiction","novel","mystery"]}
        sample={"lorem ipso"}  
      />
      
      <View>
        <Text>Introduction</Text>
        <Text>description</Text>
      </View>

      <View>
        <Text>user rating</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  title: {},
});

export default BookScreen;
