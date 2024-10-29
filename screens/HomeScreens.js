import React from "react";
import { StyleSheet, Text,TextInput, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import NavOptions from "./components/NavOptions";
import NavFavourites from "./components/NavFavourites.js";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const HomeScreens = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        {/*<GooglePlacesAutocomplete nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400} 
        />*/}
         <TextInput
         style={tw`text-sm`}      
          placeholder="Where from ?" 
        />
        <NavOptions />
        <NavFavourites style={tw``}/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreens;
