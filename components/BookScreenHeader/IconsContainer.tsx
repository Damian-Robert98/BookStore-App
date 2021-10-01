import React, {useState} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";


const IconsContainer = () => {
  const [isFavorited, setFavorited] = useState(false);
  const [isSaved, setSaved] = useState(false);

  const onHeartPressed = () => setFavorited(!isFavorited);
  const onSavePressed = () => setSaved(!isSaved);

  return (
    <View style={{ flexDirection: "row", margin: 10 }}>
      <FontAwesome
        name="heart"
        color={isFavorited ? "red" : "grey"}
        size={25}
        onPress={onHeartPressed}
        style={{marginRight:10}}
      />
      <FontAwesome
        name="bookmark"
        color={isSaved ? "red" : "grey"}
        size={25}
        onPress={onSavePressed}
      />
    </View>
  );
};

export default IconsContainer;