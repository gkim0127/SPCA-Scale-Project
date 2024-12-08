import React, { useState } from 'react'
import { SafeAreaView, Text, View, TextInput, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ChatListCard from './ChatListCard'

const ChatList = () => {
    const [text, onChangeText] = useState("")
  return (
      <SafeAreaView style={{ flex: 1 }} className="h-screen bg-white-bg">
          <StatusBar style="auto" translucent />
          <View className="mt-10 h-[90vh]">
              <Text className="font-sourceSemiBold text-3xl text-dark-blue mx-5">
                  MESSAGES
              </Text>
              <TextInput
                  className="font-source border border-primary-blue rounded-xl py-1 px-3 bg-white mb-4 mt-4 mx-5"
                  placeholder="Search"
                  onChangeText={onChangeText}
                  value={text}
              />
              <ScrollView className="px-5">
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
                  <ChatListCard />
              </ScrollView>
          </View>
      </SafeAreaView>
  )
}

export default ChatList