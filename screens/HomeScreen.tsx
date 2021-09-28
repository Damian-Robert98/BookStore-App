import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import BookPreviewList from "../components/BookPreviewList";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps, IBook } from "../types";
import booksData from "../components/Data/booksData";
import authorData from "../components/Data/authorData";
import AuthorListView from "../components/AuthorListView";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [booksBO, setBooksBO] = useState<IBook[]>([]); // to do:remove when redux
  const [searchKeyword, setSearchKeyword] = useState("");
  /**
   * Effect used for data fetching
   */
  useEffect(() => {
    async function fetchData() {
      const books: IBook[] = await (
        await fetch("http://localhost:3001/books")
      ).json;

      setBooks(books);
      setBooksBO(books);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredBooks = booksBO.filter((b) => {
      return (
        b.title.includes(searchKeyword) ||
        b.category.includes(searchKeyword) ||
        b.sample.includes(searchKeyword)
      );
    });
    setBooks(filteredBooks);
  }, [searchKeyword]);


  return (
    <View style={styles.container}>
      <ScrollView>
        <BookPreviewList
          title={"best seller"}
          data={booksData}
        ></BookPreviewList>
        <AuthorListView data={authorData}/>
        <BookPreviewList
          title={"Books Of the Month"}
          data={booksData}
        ></BookPreviewList>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
