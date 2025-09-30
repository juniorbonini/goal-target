import { Button, Text, View } from "react-native";
import { HomeHeader } from "@/components/Home";
export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader  dataProps={{ total: 'R$ 2.650,00' }}/>
    </View>
  );
}
