import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather"
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from "../constants";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <SafeAreaView style={tw`bg-white p-2 mt-9 `}>
        <StatusBar barStyle="dark-content" />
        <View style={tw` flex-row items-center ml-2 px-1 pl-2`}>
          <View style={tw`flex-row flex-1 items-center p-2 rounded-full border border-gray-300`}>
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder="Restaurants" style={tw`ml-2 flex-1`} />
            <View style={tw`flex-row items-center border-0 pl-2 border-l-2 border-l-gray-300`}>
              <Icon.MapPin height="20" width="20" stroke="gray" />
              <Text style={tw`text-gray-600`}>New York, NYC</Text>
            </View>
          </View>

          <View style={{ ...tw`p-3 bg-gray-300 ml-2 rounded-full`, backgroundColor: themeColors.bgColor(1) }}>
            <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>
          </View>
        </View>
          <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20
            }}
          >
            {/* Categories */}
            <Categories />

            {/* Featured */}
            <View style={tw`mt-5`}>
              {
                [featured, featured, featured].map((item, index) => {
                  return (
                    <FeaturedRow key={index} title={item.title} restaurants={item.restaurants} description={item.description} />
                  );
                })
              }
            </View>
          </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
    
  );
}