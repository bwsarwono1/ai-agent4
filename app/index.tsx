import colors from "@/services/colors";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./../assets/images/fortia.png')} style={{ width: 120, height: 100 }} />

      <View style={{
        padding: 20,
        backgroundColor: colors.PRIMARY,
        margin: 20,
        width: '80%',
        borderRadius: 20,
      }}>
        <Text style={{
          fontSize: 20,
          color: colors.BLUE,
          fontWeight: 'bold',
          textAlign: 'center',

        }}>
          Agentic AI</Text>
      </View>      <View style={styles.button}>
        <Text style={{
          backgroundColor: colors.GRAY,
          borderColor: colors.PRIMARY,
          color: colors.BLUE,
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 10,
          borderRadius: 20,
        }}>Sign in with Google</Text>
      </View>
      <View style={styles.button}>
        <Text style={{
          backgroundColor: colors.GRAY,
          borderColor: colors.PRIMARY,
          color: colors.BLUE,
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 10,
          borderRadius: 20,
        }}>Skip</Text>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.PRIMARY,
    height: '100%'
  },
  heading: {
    fontSize: 20,
    color: colors.BLACK,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 2
  }
});