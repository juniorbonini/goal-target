import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";


import { styles } from "./style";
import { Colors } from "@/theme/style";
import Separator from "../Separator";

export type HomeHeaderProps = {
  total: string;
};

type Props = {
  dataProps: HomeHeaderProps;
};

export function HomeHeader({ dataProps }: Props) {
  return (
    <LinearGradient
      colors={[Colors.blue[500], Colors.blue[800]]}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>Total que você possui</Text>
        <Text style={styles.total}>{dataProps.total}</Text>
      </View>
      <Separator color={Colors.blue[400]}/>
    </LinearGradient>
  );
}
