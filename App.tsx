import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCallback, useState} from "react";
import PagerView from "react-native-pager-view";

export default function App() {

  const [items, setItems] = useState<number[]>([1, 2, 3]);
  const [current, setCurrent] = useState(0);

  const onPress = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, idx) => idx !== index));
  }, []);

  const onAdd = useCallback(() => {
    setItems((p) => [...p, p[p.length - 1] + 1])
  }, []);

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pager}
        initialPage={0}
        onPageSelected={(e) => setCurrent(e.nativeEvent.position)}
      >
        {items.map((item, index) => (
          <View key={item} style={styles.page}>
            <Text>Hello Item {item}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onPress(index)}>
              <Text>Remove {item}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </PagerView>
      <View style={styles.controls}>
        <Text>{current + 1}/{items.length}</Text>
        <TouchableOpacity style={styles.button} onPress={() => onAdd()}>
          <Text>Add +</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    marginBottom: 24,
  },
  pager: {
    flex: 1,
    width: '100%'
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 12,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'green'
  }
});
