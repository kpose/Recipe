import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <Text>sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
