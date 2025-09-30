import { ActivityIndicator } from "react-native";

import { styles } from "./style";
import { Colors } from "@/theme/style";

export default function Loading() {
  return (
    <ActivityIndicator color={Colors.blue[500]} style={styles.container} />
  );
}
