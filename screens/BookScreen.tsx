import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import BookScreenHeader from '../components/BookScreenHeader';

const BookScreen = () => {
  return (
    <View>
      <Text>BookScreen</Text>
      <BookScreenHeader 
        id={1} 
        title={"design Patterns"} 
        author={1} 
        price={100} 
        rating={3}
        cover={''}
        category={[]}
        sample={"lorem ipso"}  
      />
      
      <View>
        <Text>Introduction</Text>
        <Text>description</Text>
      </View>

      <View>
        <Text>user rating</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
});

export default BookScreen;
