import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const ChatListCard = () => {
    const router = useRouter();
  return (
      <Pressable
          onPress={() => {
              router.push(`/home/messages/hello`)
          }}
      >
          <View className="flex-row mt-3">
                <View className="rounded-full bg-primary-blue h-16 w-16"></View>
                <View className="my-auto ml-3">
                    <Text className="font-sourceSemiBold text-xl">
                        Harry Smith
                    </Text>
                    <Text className="font-sourceLight text-lg">
                        I need some help
                    </Text>
                </View>
          </View>
      </Pressable>
  )
}

export default ChatListCard