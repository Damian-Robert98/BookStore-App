import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";


import BookScreenHeader from '../components/BookScreenHeader';
import UserRatingListView from "../components/UserRatingListView";

const BookScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BookScreen</Text>
      <ScrollView>
      <BookScreenHeader 
        id={1} 
        title={"design Patterns and the art of stealing"} 
        author={1} 
        price={100} 
        rating={3}
        cover={'https://picsum.photos/200/300'}
        category={["fiction","novel","mystery"]}
        sample={"lorem ipso dfsdgdfhgdfsdsdas  dsdfsdghjyutyhgrsdgftntrnbftgyftytdfdrftfrtfvdtgvrdgcdd dasdasdsadasdasdasd sadasdasda sdasdsad sadasdasdfhfgnhdfsdgfynsdfsdfhfhnfgfthfgfdhghbdfhghfggdfhdgsdgdfgsdgdhgsdfdfhgsfdhsdffdhdffsdgdfhgsdfsd"}  
      />
      <UserRatingListView/>
      </ScrollView>
      
      
     

      <View>
        
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
