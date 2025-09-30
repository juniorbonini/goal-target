import { Button, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";


export default function Transaction() {
    const params = useLocalSearchParams<{id: undefined | string}>()
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>ID: {params.id}</Text>
            <Button title="Voltar" onPress={() => router.back()} />
      
    </View>
  );
}
