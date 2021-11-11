import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Message } from "../Message";

export function MessageList() {
  const testMessage = {
    id: "1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto molestias, saepe iste voluptatum aliquam corrupti, cupiditate incidunt dolor aut facere commodi aperiam temporibus quos, perferendis ea. Ipsum alias architecto fuga?",
    user: {
      name: "Dayane Cordeiro",
      avatar_url: "https://github.com/DayaneCordeiro.png",
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
      <Message data={testMessage} />
    </ScrollView>
  );
}
