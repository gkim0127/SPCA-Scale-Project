import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import { SvgUri } from 'react-native-svg'

const Profile = () => {
  const name = encodeURIComponent("Brendan Zhou")
  const router = useRouter();
  return (
      <SafeAreaView style={{ flex: 1 }} className="bg-white-bg h-screen">
          <View className="justify-center flex-row h-[20vh] mt-20">
              <SvgUri
                  uri={`https://source.boringavatars.com/beam/120/${name}`}
                  width="100%"
                  height="100%"
              />
          </View>
          <Text className="font-sourceBold text-center text-primary-blue text-3xl mt-10">
              Brendan Zhou
          </Text>
          <View className="border-primary-blue border-2 mt-10"></View>
          <Text className="text-primary-blue font-source text-3xl ml-5 mt-10">
              Occupation: Vet
          </Text>
          <Text className="text-primary-blue font-source text-3xl ml-5 mt-10">
              Location: Auckland
          </Text>
          <Pressable
              className="bg-primary-blue rounded-xl px-4 py-3 mx-10 mt-20"
              onPress={() => {
                  router.replace("/auth")
              }}
          >
              <Text className="font-sourceSemiBold text-white text-center text-3xl">
                  Log Out
              </Text>
          </Pressable>
      </SafeAreaView>
  )
};

export default Profile;
