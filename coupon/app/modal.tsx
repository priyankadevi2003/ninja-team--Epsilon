import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text style={{ fontSize: 22, marginBottom: 10 }}>This is a modal screen</Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}
