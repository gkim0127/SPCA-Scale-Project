import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import React, { useEffect } from 'react'

export default function Layout() {
    const [fontsLoaded] = useFonts({
        'SourceSansPro-Regular': require('../assets/fonts/SourceSansPro-Regular.ttf'),
        'SourceSansPro-Light': require('../assets/fonts/SourceSansPro-Light.ttf'),
        'SourceSansPro-SemiBold': require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
        'SourceSansPro-Bold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
    })

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync()
        }
        prepare()
    }, [])

    if (!fontsLoaded) {
        return undefined
    } else {
        SplashScreen.hideAsync()
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="auth"></Stack.Screen>
        </Stack>
    )
}
