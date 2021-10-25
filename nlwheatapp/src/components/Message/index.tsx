import React from "react";

import { View, Text } from "react-native";
import { UserPhoto } from "../UserPhoto";

import { styles } from "./styles";

export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Texto da mensagem</Text>

      <View>
        <UserPhoto
          sizes="SMALL"
          imageUri="https://github.com/BrendaRodriguees.png"
        />

        <Text style={styles.userName}>Brenda Cordeiro</Text>
      </View>
    </View>
  );
}
