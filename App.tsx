import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { list } from './data';
import { Product } from './types/Product';
import { ProductItem } from './components/ProductItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/hero.jpg')} style={styles.img} />
      <View style={styles.are}>
        <Text style={styles.h1}>Produtos</Text>
        <FlatList
          data={list}
          renderItem={({ item }: { item: Product }) => <ProductItem produto={item}/>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  img: {
    width: '100%',
    height: 150,
  },

  are: {
    marginTop: 10,
  },

  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
