import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'

export default function EditScreen() {

    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}