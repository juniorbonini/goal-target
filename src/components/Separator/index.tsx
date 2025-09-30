import { View, ColorValue } from "react-native";

import { styles } from "./style";

export default function Separator({ color }: { color: ColorValue }) {
  return <View style={[styles.container, { backgroundColor: color }]}></View>;
}
