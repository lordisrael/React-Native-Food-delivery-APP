import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import tw from "twrnc";

export default function RestaurantCard({item}) {
  return (
    <TouchableWithoutFeedback style={tw`overflow-visible py-5`}>
      <View style={tw`mr-6 bg-white rounded-3xl shadow-lg`}>
        <Image style={tw`h-36 w-64 rounded-t-3xl`} source={item.image} />
        <View style={tw`px-3 pb-4 space-y-2`}>
          <Text style={tw`text-lg font-bold pt-2`}>{item.name}</Text>
          <View style={tw`flex-row items-center space-x-1`}>
            <Image
              source={require("../assets/images/fullStar.png")}
              style={tw`h-4 w-4`}
            />
            <Text style={tw`text-xs`}>
              <Text style={tw`text-green-700`}>{item.stars}</Text>
              <Text style={tw`text-gray-700`}>
                ({item.reviews} review) .{" "}
                <Text style={tw`font-semibold`}>{item.category}</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}