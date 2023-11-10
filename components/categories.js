import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import {categories} from '../constants'

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null)
  return (
    <View style={tw`mt-4`}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        {...tw`overflow-visible`}
            contentContainerStyle={{
                paddingHorizontal: 15
        }} >
        {
            categories.map((category, index) => {
              let isActive = category.id == activeCategory;
              let btnClass = isActive? 'bg-gray-600' : 'bg-gray-200';
              // onPress={setActiveCategory(category.id)}
              let textClass = isActive? 'font-semibold text-gray-800': 'text-gray-500';
              return (
                <View
                  key={index}
                  {...tw`flex justify-center items-center mr-6 mt-2`}
                >
                  <TouchableOpacity
                    onPress={() => setActiveCategory(category.id)}
                    style={tw`p-1 rounded-full shadow bg-gray-200`} 
                  >
                    <Image
                      style={{ width: 45, height: 35 }}
                      source={category.image}
                    />
                  </TouchableOpacity>
                  <Text style={tw`text-sm`}> {category.name}</Text>
                </View>
              );
            })
        }


        </ScrollView>
    </View>
  )
}