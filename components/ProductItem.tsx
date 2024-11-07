import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Product } from '../types/Product';

type Props = {
  produto: Product;
};

export const ProductItem = (props: Props) => {

  function handleClick(){
    alert('Voce adicionou no carrinho ' +props.produto.name)
  }
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.produto.image }} style={styles.img} />
      <View style={styles.are}>
        <Text style={styles.name}>{props.produto.name}</Text>
        <Text style={styles.price}>R$ - {props.produto.price.toFixed(2)}</Text>
        <Button title="Clique aqui" onPress={handleClick}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom:20
  },

  img: {
    width:100,
    height:100
  },
  are: {
    flex:1,
    paddingLeft:10,

  },
  name: {
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10
  },
  price: {
    color:'#f16464',
    marginBottom:10
  }
});
