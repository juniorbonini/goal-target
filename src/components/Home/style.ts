import { StyleSheet } from "react-native";


import { Colors, fontFamily } from '@/theme/globalStyle'


export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 324,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
    paddingBottom: 18,
    gap: 24,
  },
  label: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: fontFamily.regular,
  },
  total: {
    fontSize: 32,
    color: Colors.white,
    fontFamily: fontFamily.medium
  }
});
