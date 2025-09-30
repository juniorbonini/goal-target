import { Stack } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import Loading from "@/components/Loading";

import { Colors } from "@/theme/style";

export default function RootLayout() {
  const backgroundColor = Colors.white;
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    />
  );
}
