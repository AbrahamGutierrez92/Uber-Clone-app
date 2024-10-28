import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center text-xl`}>
        Good Morning, Abraham Gutierrez
      </Text>

      <View style={tw`mt-2 border-t border-gray-200 flex-shrink`}>
        <View style={tw`mt-2`}>
          <TextInput style={tw` text-sm p-3 bg-gray-200`} placeholder="Where from ?" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
